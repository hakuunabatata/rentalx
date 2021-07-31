import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoriesRepository'

const categoryRoutes = Router()
const categoriesRepository = new CategoryRepository()

categoryRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  categoriesRepository.create({ name, description })

  return res.status(201).send()
})

export { categoryRoutes }
