import { app } from '@app'
import { v4 as uuid } from 'uuid'
import req from 'supertest'

import createConnection from '@shared/infra/typeorm'
import { Connection } from 'typeorm'
import { hash } from 'bcrypt'

let connection: Connection

describe('ListCategoryController', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.runMigrations()

    const password = await hash('admin', 8)

    await connection.query(
      `
        INSERT INTO USERS(id,name,email,password,"isAdmin",created_at, driver_license)
        values('${uuid()}','admin','admin@rentalx.com','${password}',True,now(),'00000000')
        `
    )
  })

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able to list all categories', async () => {
    const resToken = await req(app)
      .post('/sessions')
      .send({ email: 'admin@rentalx.com', password: 'admin' })

    const { token } = resToken.body

    await req(app)
      .post('/categories')
      .send({
        name: 'test',
        description: 'test',
      })
      .set({
        Authorization: `Bearer ${token}`,
      })

    const res = await req(app).get('/categories')

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
  })
})
