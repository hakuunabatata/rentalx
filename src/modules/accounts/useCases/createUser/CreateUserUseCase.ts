import { ICreateUserDTO, IUsersRepository } from '@modules'
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'
import { AppError } from '@errors'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.UsersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('User already exists!')
    }

    const passwordHash = await hash(password, 8)

    await this.UsersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    })
  }
}
