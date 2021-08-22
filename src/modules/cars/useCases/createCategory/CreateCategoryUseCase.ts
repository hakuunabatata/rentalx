import { AppError } from '@errors'
import { ICategoriesRepository } from '@modules'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryUseCase {
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

export { CreateCategoryUseCase }
