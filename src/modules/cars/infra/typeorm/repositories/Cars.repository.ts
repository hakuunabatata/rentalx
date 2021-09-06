import { Car, ICarsRepository, ICreateCarDTO } from '@modules'
import { getRepository, Repository } from 'typeorm'

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    })

    await this.repository.save(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({
      license_plate,
    })
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const query = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true })

    if (brand) {
      query.andWhere('c.brand = :brand', { brand })
    }
    if (name) {
      query.andWhere('c.name = :name', { name })
    }
    if (category_id) {
      query.andWhere('c.category_id = :category_id', { category_id })
    }

    return query.getMany()
  }
}
