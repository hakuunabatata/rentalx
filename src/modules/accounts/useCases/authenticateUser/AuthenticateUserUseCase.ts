import { IUsersRepository } from '@modules'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
    driver_license: string
  }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new Error('Email or password incorrect!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!')
    }

    const token = sign({}, '7dc10a72810ccb5e01bd9bb6833b2cee', {
      subject: user.id,
      expiresIn: '1d',
    })

    const { name, driver_license } = user

    return {
      user: { name, email, driver_license },
      token,
    }
  }
}
