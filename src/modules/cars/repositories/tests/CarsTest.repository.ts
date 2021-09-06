import { Car, ICarsRepository, ICreateCarDTO } from '@modules'

export class CarsRepositoryTest implements ICarsRepository {
  cars: Car[] = []

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, data)

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate)
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    return this.cars.filter(
      (car) =>
        car.available ||
        (brand && car.brand === brand) ||
        (name && car.name === name) ||
        (category_id && car.category_id === category_id)
    )
  }
}
