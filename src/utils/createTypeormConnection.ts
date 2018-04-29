import { getConnectionOptions, createConnection } from 'typeorm'

export const createTypeormConnection = async () => {
  const connectionOption = await getConnectionOptions(process.env.NODE_ENV)
  return createConnection({ ...connectionOption, name: 'default' })
}
