import { Car, ICarsRepository, ICreateCarDTO } from '@modules'
import { AppError } from '@shared'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      license_plate
    )

    if (carAlreadyExists) {
      throw new AppError('Car already exists!')
    }

    return this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    })
  }
}
