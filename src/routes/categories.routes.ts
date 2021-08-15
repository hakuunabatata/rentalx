import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoryRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoryRoutes.post('/', (req, res) =>
  createCategoryController.handle(req, res)
)

categoryRoutes.get('/', (req, res) => listCategoriesController.handle(req, res))

categoryRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoryRoutes }
