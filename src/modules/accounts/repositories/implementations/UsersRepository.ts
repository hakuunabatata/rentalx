import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO, IUsersRepository, User } from '../..'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    })

    await this.repository.save(user)

    console.log('✏  Creating new user ...')
  }
}
