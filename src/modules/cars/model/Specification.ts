import { v4 as uuid } from 'uuid'

import { ICreateSpecificationDTO } from '../repositories/ISpecificationsRepository'

class Specification {
  id?: string
  name: string
  description: string
  created_at?: Date

  constructor({ name, description }: ICreateSpecificationDTO) {
    if (!this.id) this.id = uuid()

    this.created_at = new Date()
    this.name = name
    this.description = description
  }
}

export { Specification }
