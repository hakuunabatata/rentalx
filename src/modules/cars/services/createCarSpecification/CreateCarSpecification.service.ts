import { Car, ICarsRepository, ISpecificationsRepository } from '@modules'
import { AppError } from '@shared'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  car_id: string
  specification_id: string[]
}

@injectable()
export class CreateCarSpecificationService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id)

    if (!car) throw new AppError(`Car doesn't exists!`)

    const specifications = await this.specificationsRepository.findByIds(
      specification_id
    )

    car.specifications = specifications

    await this.carsRepository.create(car)

    return car
  }
}
