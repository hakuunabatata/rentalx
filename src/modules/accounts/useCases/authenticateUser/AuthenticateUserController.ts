import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateUserUseCase } from '@modules'

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const { user, token } = await authenticateUserUseCase.execute({
      email,
      password,
    })

    console.log(`🎅  ${user.name} authenticated!`)

    return res.json({ user, token })
  }
}
