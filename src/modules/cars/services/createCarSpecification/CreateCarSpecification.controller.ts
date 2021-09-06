import { CreateCarSpecificationService } from '@modules'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class CreateCarSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { car_id } = req.params
    const { specification_id } = req.body

    const createCarSpecificationService = container.resolve(
      CreateCarSpecificationService
    )

    const specCar = await createCarSpecificationService.execute({
      car_id,
      specification_id,
    })

    return res.json(specCar)
  }
}
