import { env } from './env'
import { app } from './app.ts'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
