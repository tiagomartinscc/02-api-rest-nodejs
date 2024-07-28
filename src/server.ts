import fastify from 'fastify'
import type { FastifyCookieOptions } from '@fastify/cookie'

import cookie from '@fastify/cookie'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()
app.register(cookie, {
  secret: 'my-secret', // for cookies signature
  parseOptions: {}, // options for parsing cookies
} as FastifyCookieOptions)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
