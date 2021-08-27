import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserService } from '@modules'

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authenticateUserService = container.resolve(AuthenticateUserService)

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    })

    console.log(`🎅  ${user.name} authenticated!`)

    return res.json({ user, token })
  }
}
