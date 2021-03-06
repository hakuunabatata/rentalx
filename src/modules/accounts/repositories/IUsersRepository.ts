import { ICreateUserDTO, User } from '@modules'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}

export { IUsersRepository }
