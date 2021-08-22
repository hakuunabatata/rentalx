import { inject, injectable } from 'tsyringe'

import { ISpecificationsRepository } from '@modules'
import { AppError } from '@errors'

interface IRequest {
  name: string
  description: string
}
@injectable()
class CreateSpecificationUseCase {
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

export { CreateSpecificationUseCase }
