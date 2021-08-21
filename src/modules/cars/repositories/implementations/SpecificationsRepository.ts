import { Specification } from '../../entities/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification({ description, name })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )

    return specification
  }
}

export { SpecificationsRepository }
