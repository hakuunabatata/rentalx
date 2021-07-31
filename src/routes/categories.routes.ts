import { Router } from 'express'
import { v4 as uuid } from 'uuid'

import { Category } from '../model/Category'

const categoryRoutes = Router()

const categories: Category[] = []

categoryRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = new Category({
    name,
    description,
  })

  categories.push(category)

  return res.status(201).send()
})

export { categoryRoutes }
