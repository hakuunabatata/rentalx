import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { ICreateUserDTO, IUsersRepository } from '@modules'
import { AppError } from '@shared'

@injectable()
export class CreateUserService {
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
