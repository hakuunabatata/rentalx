import { container } from 'tsyringe'

import {
  CategoryRepository,
  ICategoriesRepository,
  ISpecificationsRepository,
  IUsersRepository,
  SpecificationsRepository,
  UsersRepository,
} from '@modules'

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
