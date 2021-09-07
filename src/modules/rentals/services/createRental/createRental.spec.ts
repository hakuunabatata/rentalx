import { CreateRentalService, RentalsRepositoryTest } from '@modules'
import { AppError } from '@shared'

let createRentalService: CreateRentalService
let rentalsRepository: RentalsRepositoryTest

describe('Create Rental', () => {
  beforeEach(() => {
    rentalsRepository = new RentalsRepositoryTest()
    createRentalService = new CreateRentalService(rentalsRepository)
  })

  it('should be able to create a new rental', async () => {
    const rental = await createRentalService.execute({
      user_id: 'user',
      car_id: 'car',
      expected_return_date: new Date(),
    })

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it('should be able to create a new rental if theres another from the same car', async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car',
        expected_return_date: new Date(),
      })

      await createRentalService.execute({
        user_id: 'user2',
        car_id: 'car',
        expected_return_date: new Date(),
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create a new rental if theres another from the same user', async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car',
        expected_return_date: new Date(),
      })

      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car2',
        expected_return_date: new Date(),
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
