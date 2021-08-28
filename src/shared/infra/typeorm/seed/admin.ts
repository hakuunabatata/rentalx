import { hash } from 'bcrypt'
import { v4 as uuid } from 'uuid'

import createConnection from '..'

async function create() {
  const connection = await createConnection('localhost')

  const id = uuid()
  const password = await hash('admin', 8)

  await connection.query(
    `
        INSERT INTO USERS(id,name,email,password,"isAdmin",created_at, driver_license)
        values('${id}','admin','admin@rentalx.com','${password}',True,now(),'00000000')
        `
  )
}

create().then(() => console.log('🕵️‍♀️  User admin created!'))
