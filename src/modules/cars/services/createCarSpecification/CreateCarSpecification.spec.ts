import {
  CarsRepositoryTest,
  CreateCarSpecificationService,
  SpecificationsRepositoryTest,
} from '@modules'
import { AppError } from '@shared'

let createCarSpecificationService: CreateCarSpecificationService
let carsRepository: CarsRepositoryTest
let specificationsRepository: SpecificationsRepositoryTest

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryTest()
    specificationsRepository = new SpecificationsRepositoryTest()
    createCarSpecificationService = new CreateCarSpecificationService(
      carsRepository,
      specificationsRepository
    )
  })

  it('should be able to add a new car specification', async () => {
    const { id: car_id } = await carsRepository.create({
      name: 'Brasilia Amarela',
      description: 'com roda gaucha',
      daily_rate: 100,
      license_plate: 'MAA-1996',
      fine_amount: 15,
      brand: 'VW',
      category_id: 'id',
    })

    const specification = await specificationsRepository.create({
      name: 'test',
      description: 'test',
    })

    const specification_id = [specification.id]

    const specCar = await createCarSpecificationService.execute({
      car_id,
      specification_id,
    })

    expect(specCar).toHaveProperty('specifications')
    expect(specCar.specifications.length).toBe(1)
  })
})
