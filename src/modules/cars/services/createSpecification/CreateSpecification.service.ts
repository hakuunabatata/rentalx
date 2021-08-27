import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared'

import { ISpecificationsRepository } from '@modules'

interface IRequest {
  name: string
  description: string
}
@injectable()
class CreateSpecificationService {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specifiationAlreadyExists =
      await this.specificationsRepository.findByName(name)

    if (specifiationAlreadyExists)
      throw new AppError('Specification already exists')

    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
