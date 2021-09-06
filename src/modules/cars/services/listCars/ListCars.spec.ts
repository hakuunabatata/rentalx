import { CarsRepositoryTest, ListCarsService } from '@modules'

let listCarService: ListCarsService
let carsRepositoryTest: CarsRepositoryTest

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryTest = new CarsRepositoryTest()
    listCarService = new ListCarsService(carsRepositoryTest)
  })

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryTest.create({
      name: 'Fuscão Preto',
      description: 'Feito de aço',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 15,
      brand: 'VW',
      category_id: 'id',
    })

    const cars = await listCarService.execute({})

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryTest.create({
      name: 'Fuscão Preto',
      description: 'Feito de aço',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 15,
      brand: 'VW',
      category_id: 'id',
    })

    const cars = await listCarService.execute({ name: 'Fuscão Preto' })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryTest.create({
      name: 'Fuscão Preto',
      description: 'Feito de aço',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 15,
      brand: 'VW',
      category_id: 'id',
    })

    const cars = await listCarService.execute({ brand: 'VW' })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryTest.create({
      name: 'Fuscão Preto',
      description: 'Feito de aço',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 15,
      brand: 'VW',
      category_id: 'id',
    })

    const cars = await listCarService.execute({ category_id: 'id' })

    expect(cars).toEqual([car])
  })
})
