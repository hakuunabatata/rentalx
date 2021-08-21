import { container } from 'tsyringe'

import {
  ICategoriesRepository,
  CategoryRepository,
  SpecificationsRepository,
  ISpecificationsRepository,
} from '../../modules/cars/repositories'

container.registerSingleton<ICategoriesRepository>(
  'CategoryRepository',
  CategoryRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)
