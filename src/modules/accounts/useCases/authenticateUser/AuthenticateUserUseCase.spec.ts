import { AppError } from '@errors'
import {
  AuthenticateUserUseCase,
  CreateUserUseCase,
  ICreateUserDTO,
  UsersRepositoryTest,
} from '@modules'

let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase
let usersRepository: UsersRepositoryTest

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryTest()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)
    createUserUseCase = new CreateUserUseCase(usersRepository)
  })

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '123456',
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    }

    const { email, password } = user

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({ email, password })

    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate a non existant user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'nobody@test.com',
        password: '123456',
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with an wrong password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '123456',
        name: 'test',
        email: 'test@test.com',
        password: '123456',
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '000000',
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
