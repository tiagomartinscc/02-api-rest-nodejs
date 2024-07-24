import path from 'node:path'

import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: path.resolve('./db/app.db'),
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
