import {
  CreateCarController,
  CreateCarSpecificationController,
  ListCarsController,
} from '@modules'
import { ensureAdmin, ensureAuthenticated } from '@shared'
import { Router } from 'express'

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listCarsController = new ListCarsController()
let createCarSpecificationController = new CreateCarSpecificationController()

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

export { carsRoutes }
