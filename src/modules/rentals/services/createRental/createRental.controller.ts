import { CreateRentalService } from '@modules'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class CreateRentalController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { car_id, expected_return_date } = req.body
    const { id: user_id } = req.user

    const createRentalService = container.resolve(CreateRentalService)

    const rental = await createRentalService.execute({
      car_id,
      expected_return_date,
      user_id,
    })

    return res.status(201).json(rental)
  }
}
