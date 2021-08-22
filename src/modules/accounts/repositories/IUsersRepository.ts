import { ICreateUserDTO } from '@modules'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
}

export { IUsersRepository }
