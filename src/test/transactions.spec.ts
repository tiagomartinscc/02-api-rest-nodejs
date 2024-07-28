import { it, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.ts'

describe('transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 200.9,
        type: 'credit',
      })
      .expect(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 200.9,
        type: 'credit',
      })
    const cookie = createTransactionResponse.get('Set-Cookie')
    const listTransactionsList = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookie)
      .expect(200)
    expect(listTransactionsList.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 200.9,
      }),
    ])
  })
})
