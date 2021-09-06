import { Car, ICarsRepository } from '@modules'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  category_id?: string
  brand?: string
  name?: string
}

@injectable()
export class ListCarsService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    return await this.carsRepository.findAvailable(brand, category_id, name)
  }
}
