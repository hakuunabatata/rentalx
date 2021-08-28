import { ICreateCarDTO, Car } from '@modules'

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>
  findByLicensePlate(license_plate: string): Promise<Car>
}

export { ICarsRepository }
