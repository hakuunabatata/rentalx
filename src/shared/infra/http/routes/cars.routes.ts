import { CreateCarController, ListCarsController } from '@modules'
import { ensureAdmin, ensureAuthenticated } from '@shared'
import { Router } from 'express'

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listCarsController = new ListCarsController()

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

carsRoutes.get('/available', listCarsController.handle)

export { carsRoutes }
