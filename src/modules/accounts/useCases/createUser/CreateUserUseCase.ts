import { ICreateUserDTO, IUsersRepository } from '@modules'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.UsersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    })
  }
}
