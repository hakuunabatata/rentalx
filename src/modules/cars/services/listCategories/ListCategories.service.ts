import { inject, injectable } from 'tsyringe'

import { Category, ICategoriesRepository } from '@modules'

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoryRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoriesService }
