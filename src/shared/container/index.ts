import {
  CarImagesRepository,
  CarsRepository,
  CategoryRepository,
  ICarImagesRepository,
  ICarsRepository,
  ICategoriesRepository,
  IRentalsRepository,
  ISpecificationsRepository,
  IUsersRepository,
  RentalsRepository,
  SpecificationsRepository,
  UsersRepository,
} from '@modules'
import { container } from 'tsyringe'
import { DayJSDateProvider, IDateProvider } from '@shared'

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

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository
)

container.registerSingleton<IDateProvider>('DateProvider', DayJSDateProvider)
