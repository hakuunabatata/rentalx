import { ListCarsService } from '@modules'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class ListCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { brand, category_id, name } = req.query

    const listCarsService = container.resolve(ListCarsService)

    const cars = await listCarsService.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    })
    return res.json(cars)
  }
}
