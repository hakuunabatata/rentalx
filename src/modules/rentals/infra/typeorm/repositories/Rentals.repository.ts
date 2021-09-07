import { ICreateRentalDTO, IRentalsRepository, Rental } from '@modules'
import { getRepository, Repository } from 'typeorm'

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental)
  }

  findOpenRentalByCar = async (car_id: string): Promise<Rental> =>
    this.repository.findOne({ car_id })

  findOpenRentalByUser = async (user_id: string): Promise<Rental> =>
    this.repository.findOne({ user_id })

  create = async ({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> => {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
    })

    await this.repository.save(rental)

    return rental
  }
}
