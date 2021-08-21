import { Category } from '../entities'

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, description }: ICreateCategoryDTO)
}

export { ICategoriesRepository, ICreateCategoryDTO }
