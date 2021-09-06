import {
  CreateCarController,
  CreateCarSpecificationController,
  ListCarsController,
  UploadCarImageController,
} from '@modules'
import { ensureAdmin, ensureAuthenticated, upload } from '@shared'

import { Router } from 'express'
import multer from 'multer'

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listCarsController = new ListCarsController()
let createCarSpecificationController = new CreateCarSpecificationController()
let uploadCarImageController = new UploadCarImageController()

const uploadImage = multer(upload('./tmp/cars'))

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

carsRoutes.get('/available', listCarsController.handle)

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
)

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  uploadImage.array('images'),
  uploadCarImageController.handle
)

export { carsRoutes }
