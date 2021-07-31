import { v4 as uuid } from 'uuid'

interface ICreateCategoryDTO {
  name: string
  description: string
}
class Category {
  id?: string
  name: string
  description: string
  created_at?: Date

  constructor({ name, description }: ICreateCategoryDTO) {
    if (!this.id) this.id = uuid()

    this.created_at = new Date()
    this.name = name
    this.description = description
  }
}

export { Category }
