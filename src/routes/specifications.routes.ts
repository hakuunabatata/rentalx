import { Router } from 'express'

import { CreateSpecificationController } from '@modules'
import { ensureAuthenticated } from '@middlewares'

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes }
