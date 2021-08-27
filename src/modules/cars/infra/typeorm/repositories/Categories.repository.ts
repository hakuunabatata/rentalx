import { getRepository, Repository } from 'typeorm'

import { Category, ICategoriesRepository, ICreateCategoryDTO } from '@modules'

class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description, name })

    await this.repository.save(category)

    console.log('✏  Creating new category ...')
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()

    console.log('📃  List categories ...')

    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name })

    console.log('🔍  Searching for category ...')

    return category
  }
}

export { CategoryRepository }
