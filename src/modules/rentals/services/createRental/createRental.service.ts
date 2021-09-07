import { ICreateRentalDTO, IRentalsRepository, Rental } from '@modules'
import { AppError } from '@shared'

export class CreateRentalService {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    const carRental = await this.rentalsRepository.findOpenRentalByCar(car_id)

    if (carRental) throw new AppError('Car is already rented by another user')

    const userRental = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    )

    if (userRental) throw new AppError('User already has a car rented.')

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    })

    return rental
  }
}
