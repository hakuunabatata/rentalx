import { UploadCarImageService } from '@modules'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

interface IFiles {
  filename: string
}

export class UploadCarImageController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: car_id } = req.params

    const images = req.files as IFiles[]

    const uploadCarImageService = container.resolve(UploadCarImageService)

    const images_name = images.map(({ filename }) => filename)

    await uploadCarImageService.execute({ car_id, images_name })

    return res.status(201).send()
  }
}
