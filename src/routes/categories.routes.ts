import { Router } from 'express'

import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoryRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoryRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoryRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.json(categories)
})

export { categoryRoutes }
