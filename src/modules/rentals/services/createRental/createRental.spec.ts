import { CreateRentalService, RentalsRepositoryTest } from '@modules'
import { AppError, DayJSDateProvider } from '@shared'
import dayjs from 'dayjs'

let createRentalService: CreateRentalService
let rentalsRepository: RentalsRepositoryTest
let dateProvider: DayJSDateProvider

describe('Create Rental', () => {
  const tomorrow = dayjs().add(1, 'day').toDate()

  beforeEach(() => {
    rentalsRepository = new RentalsRepositoryTest()
    dateProvider = new DayJSDateProvider()
    createRentalService = new CreateRentalService(
      rentalsRepository,
      dateProvider
    )
  })

  it('should be able to create a new rental', async () => {
    const rental = await createRentalService.execute({
      user_id: 'user',
      car_id: 'car',
      expected_return_date: tomorrow,
    })

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it('should not be able to create a new rental if theres another from the same car', async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car',
        expected_return_date: tomorrow,
      })

      await createRentalService.execute({
        user_id: 'user2',
        car_id: 'car',
        expected_return_date: tomorrow,
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new rental if theres another from the same user', async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car',
        expected_return_date: tomorrow,
      })

      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car2',
        expected_return_date: tomorrow,
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new rental with invalid time', async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: 'user',
        car_id: 'car',
        expected_return_date: dayjs().toDate(),
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
