import * as Redis from 'ioredis'
import fetch from 'node-fetch'

import { createTypeormConnection } from './createTypeormConnection'
import { createConfirmEmailLink } from './createConfirmEmailLink'
import { User } from '../entity/User'

let userId = ''
let redis = new Redis()

beforeAll(async () => {
  await createTypeormConnection()
  const user = await User.create({
    email: 'john5@doe.com',
    password: 'johndoe'
  }).save()
  userId = user.id
})

describe('Test createConfirmEmailLink', () => {
  test('Make sure it confirms user and clears key in redis', async () => {
    const url = await createConfirmEmailLink(
      process.env.TEST_HOST as string,
      userId,
      redis
    )

    const response = await fetch(url)
    const text = await response.text()

    expect(text).toEqual('ok')

    const user = await User.findOne({ where: { id: userId } })
    expect((user as User).confirmed).toBeTruthy()
    const chunks = url.split('/')
    const key = chunks[chunks.length - 1]
    const value = await redis.get(key)
    expect(value).toBeNull()
  })

  test('Sends invalid back if bad id sent', async () => {
    const response = await fetch(`${process.env.TEST_HOST}/confirm/12083`)
    const text = await response.text()
    expect(text).toEqual('invalid')
  })
})
