import { CarsRepositoryTest, CreateCarService } from '@modules'
import { AppError } from '@shared'

let createCarService: CreateCarService
let carsRepository: CarsRepositoryTest

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryTest()
    createCarService = new CreateCarService(carsRepository)
  })

  it('should be able to create a new car', async () => {
    const car = await createCarService.execute({
      name: 'Name',
      description: 'Descripiton',
      daily_rate: 100,
      license_plate: 'AAA-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: '1564165asd41f654ca654',
    })

    expect(car).toHaveProperty('id')
  })

  it('should not be able to create a car with exists license plate', () => {
    expect(async () => {
      await createCarService.execute({
        name: 'Car1',
        description: 'Descripiton',
        daily_rate: 100,
        license_plate: 'AAA-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: '1564165asd41f654ca654',
      })

      await createCarService.execute({
        name: 'Car2',
        description: 'Descripiton',
        daily_rate: 100,
        license_plate: 'AAA-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: '1564165asd41f654ca654',
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a car with available true by default', async () => {
    const car = await createCarService.execute({
      name: 'Car2',
      description: 'Descripiton',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: '1564165asd41f654ca654',
    })

    expect(car.available).toBe(true)
  })
})
