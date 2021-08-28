import { Router } from 'express'

import { authenticateRoutes } from './authenticate.routes'
import { carsRoutes } from './cars.routes'
import { categoryRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/categories', categoryRoutes)
router.use('/cars', carsRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)
router.use(authenticateRoutes)

export { router }
