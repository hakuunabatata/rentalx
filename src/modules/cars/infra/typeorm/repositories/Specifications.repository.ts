import { getRepository, Repository } from 'typeorm'

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
  Specification,
} from '@modules'

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({ description, name })

    await this.repository.save(specification)
    console.log('✏  Creating new specification ...')

    return specification
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name })

    console.log('🔍  Searching for specification ...')

    return specification
  }

  findByIds = async (ids: string[]): Promise<Specification[]> =>
    this.repository.findByIds(ids)
}

export { SpecificationsRepository }
