import { Router } from 'express'
import multer from 'multer'

import {
  CreateCategoryController,
  ImportCategoryController,
  ListCategoriesController,
} from '../modules/cars/useCases'

const categoryRoutes = Router()

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoryRoutes.post('/', createCategoryController.handle)

categoryRoutes.get('/', listCategoriesController.handle)

categoryRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
)

export { categoryRoutes }
