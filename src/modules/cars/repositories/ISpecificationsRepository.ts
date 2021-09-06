import { ICreateSpecificationDTO, Specification } from '@modules'

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>
  findByName(name: string): Promise<Specification>
  findByIds(id: string[]): Promise<Specification[]>
}

export { ISpecificationsRepository }
