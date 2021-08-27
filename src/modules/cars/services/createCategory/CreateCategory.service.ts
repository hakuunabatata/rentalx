import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared'
import { ICategoriesRepository } from '@modules'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    )

    if (categoryAlreadyExists) throw new AppError('Category Already Exists!')

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
