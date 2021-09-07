import { IRentalsRepository } from '@modules'
import { ICreateRentalDTO } from '@modules/rentals/dtos'
import { Rental } from '@modules/rentals/infra'

export class RentalsRepositoryTest implements IRentalsRepository {
  rentals: Rental[] = []

  findOpenRentalByCar = async (car_id: string): Promise<Rental> =>
    this.rentals.find((rental) => rental.car_id === car_id && !rental.end_date)

  findOpenRentalByUser = async (user_id: string): Promise<Rental> =>
    this.rentals.find(
      (rental) => rental.user_id === user_id && !rental.end_date
    )

  create = async ({
    user_id,
    car_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> => {
    const rental = new Rental()

    Object.assign(rental, {
      car_id,
      expected_return_date,
      user_id,
      start_date: new Date(),
    })

    this.rentals.push(rental)

    return rental
  }
}
