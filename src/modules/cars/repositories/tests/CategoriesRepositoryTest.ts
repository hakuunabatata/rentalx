import { Category, ICategoriesRepository, ICreateCategoryDTO } from '@modules'

export class CategoriesRepositoryTest implements ICategoriesRepository {
  categories: Category[] = []

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
  async list(): Promise<Category[]> {
    return this.categories
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
    })

    await this.categories.push(category)
  }
}
