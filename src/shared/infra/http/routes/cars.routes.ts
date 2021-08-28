import { CreateCarController } from '@modules'
import { ensureAdmin, ensureAuthenticated } from '@shared'
import { Router } from 'express'

const carsRoutes = Router()

let createCarController = new CreateCarController()

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

export { carsRoutes }
