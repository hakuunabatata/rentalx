import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
  Specification,
} from '@modules'

export class SpecificationsRepositoryTest implements ISpecificationsRepository {
  specifications: Specification[] = []

  findByName = async (name: string): Promise<Specification> =>
    this.specifications.find((specification) => specification.name === name)

  list = async (): Promise<Specification[]> => this.specifications

  create = async ({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> => {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
    })

    await this.specifications.push(specification)

    return specification
  }

  findByIds = async (ids: string[]): Promise<Specification[]> =>
    this.specifications.filter((spec) => ids.includes(spec.id))
}
