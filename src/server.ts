import express, { NextFunction, Request, Response } from 'express'
import swaggerUiExpress from 'swagger-ui-express'

import 'express-async-errors'
import 'reflect-metadata'

import '@shared/container'
import createConnection from '@shared/infra/typeorm'

import { router } from '@shared/infra/http/routes'
import { AppError } from '@shared'

import swaggerFile from './swagger.json'

createConnection()

const app = express()

console.log('🚀 Starting server ...')

app.use(express.json())

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile))

app.use('/', router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    console.log(`❌  ${err.message}`)
    return res.status(err.statusCode).json({ error: err.message })
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

app.listen(3333, () => console.log('🔥 Server is running!'))
