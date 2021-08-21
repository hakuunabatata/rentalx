import 'reflect-metadata'
import './database'
import './shared/container'

import express from 'express'
import swaggerUiExpress from 'swagger-ui-express'

import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

console.log('🚀 Starting server ...')

app.use(express.json())

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile))

app.use('/', router)

app.listen(3333, () => console.log('🔥 Server is running!'))
