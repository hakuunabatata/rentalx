import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from '.'

class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body
    const createCategoryService = container.resolve(CreateCategoryUseCase)

    await createCategoryService.execute({ name, description })

    return res.status(201).send()
  }
}

export { CreateCategoryController }
