import { FastifyInstance } from 'fastify'
import { string, z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await knex('transactions').select()
    return { transactions }
  })

  app.get('/summary', async () => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()
    return summary
  })

  app.get('/:id', async (request) => {
    const getTransactionZeodSchema = z.object({
      id: string().uuid(),
    })
    const { id } = getTransactionZeodSchema.parse(request.params)

    const transaction = await knex('transactions')
      .where({
        id,
      })
      .first()
    return { transaction }
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return reply.status(201).send()
  })
}
