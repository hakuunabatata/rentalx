import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoriesRepository'

const categoryRoutes = Router()
const categoriesRepository = new CategoryRepository()

categoryRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists)
    return res.status(400).json({ error: 'Category Already Exists!' })

  categoriesRepository.create({ name, description })

  return res.status(201).send()
})

categoryRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.json(categories)
})

export { categoryRoutes }
