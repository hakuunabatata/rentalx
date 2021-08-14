import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoryRoutes = Router()

categoryRoutes.post('/', (req, res) =>
  createCategoryController.handle(req, res)
)

categoryRoutes.get('/', (req, res) => listCategoriesController.handle(req, res))

export { categoryRoutes }
