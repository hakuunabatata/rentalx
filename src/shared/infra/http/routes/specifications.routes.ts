import { Router } from 'express'

import { CreateSpecificationController } from '@modules'
import { ensureAuthenticated, ensureAdmin } from '@shared'

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
)

export { specificationsRoutes }
