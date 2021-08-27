import {
  AuthenticateUserService,
  CreateUserService,
  ICreateUserDTO,
  UsersRepositoryTest,
} from '@modules'

import { AppError } from '@shared'

let authenticateUserService: AuthenticateUserService
let createUserService: CreateUserService
let usersRepository: UsersRepositoryTest

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryTest()
    authenticateUserService = new AuthenticateUserService(usersRepository)
    createUserService = new CreateUserService(usersRepository)
  })

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '123456',
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    }

    const { email, password } = user

    await createUserService.execute(user)

    const result = await authenticateUserService.execute({ email, password })

    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate a non existant user', async () => {
    expect(async () => {
      await authenticateUserService.execute({
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

      await createUserService.execute(user)

      await authenticateUserService.execute({
        email: user.email,
        password: '000000',
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
