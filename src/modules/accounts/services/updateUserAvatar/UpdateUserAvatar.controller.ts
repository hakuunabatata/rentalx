import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserAvatarService } from '@modules'

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user

    const avatar_file = req.file.filename

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService)

    await updateUserAvatarService.execute({ avatar_file, user_id: id })

    return res.status(204).send()
  }
}
