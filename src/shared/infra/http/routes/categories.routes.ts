import { Router } from 'express'
import multer from 'multer'

import {
  CreateCategoryController,
  ImportCategoryController,
  ListCategoriesController,
} from '@modules'
import { ensureAdmin, ensureAuthenticated } from '@shared'

const categoryRoutes = Router()

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoryRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
)

categoryRoutes.get('/', listCategoriesController.handle)

categoryRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle
)

export { categoryRoutes }
