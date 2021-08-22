import { Category, ICreateCategoryDTO } from '@modules'

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, description }: ICreateCategoryDTO)
}

export { ICategoriesRepository }
