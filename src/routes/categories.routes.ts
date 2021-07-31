import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoryRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoryRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoryRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.json(categories)
})

export { categoryRoutes }
