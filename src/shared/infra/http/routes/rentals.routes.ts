import { CreateRentalController } from '@modules'
import { ensureAuthenticated } from '@shared'
import { Router } from 'express'

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)

export { rentalRoutes }
