import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (host = 'database'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  const config =
    process.env.NODE_ENV === 'test'
      ? {
          host: 'localhost',
          database: 'rentalx_test',
        }
      : {
          host,
          database: defaultOptions.database,
        }

  return createConnection(Object.assign(defaultOptions, config))
}
