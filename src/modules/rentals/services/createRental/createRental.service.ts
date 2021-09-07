import { ICreateRentalDTO, IRentalsRepository, Rental } from '@modules'
import { AppError, IDateProvider } from '@shared'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateRentalService {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider
  ) {}

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

    const compare = this.dateProvider.compareInHours(expected_return_date)

    if (compare < 24) throw new AppError('Invalid return time')

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    })

    return rental
  }
}
