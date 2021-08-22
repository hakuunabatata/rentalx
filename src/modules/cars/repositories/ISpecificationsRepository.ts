import { ICreateSpecificationDTO, Specification } from '@modules'

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export { ISpecificationsRepository }
