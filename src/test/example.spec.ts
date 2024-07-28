import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../app.ts'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 200.9,
      type: 'credit',
    })
    .expect(201)
})
