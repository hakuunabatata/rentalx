import { Router } from 'express'

import { CreateSpecificationController } from '@modules'
import { ensureAuthenticated } from '@shared/infra/http/middlewares'

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes }
