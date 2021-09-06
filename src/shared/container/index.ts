import { container } from 'tsyringe'

import {
  CategoryRepository,
  ICategoriesRepository,
  ISpecificationsRepository,
  IUsersRepository,
  ICarsRepository,
  CarsRepository,
  SpecificationsRepository,
  UsersRepository,
  ICarImagesRepository,
} from '@modules'
import { CarImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarImages.repository'

container.registerSingleton<ICategoriesRepository>(
  'CategoryRepository',
  CategoryRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)

container.registerSingleton<ICarImagesRepository>(
  'CarImagesRepository',
  CarImagesRepository
)
