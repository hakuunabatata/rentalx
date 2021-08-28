import { CreateCarController } from '@modules'
import { Router } from 'express'

const carsRoutes = Router()

let createCarController = new CreateCarController()

carsRoutes.post('/', createCarController.handle)

export { carsRoutes }
