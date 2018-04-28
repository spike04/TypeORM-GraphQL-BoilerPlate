import 'reflect-metadata'

import { importSchema } from 'graphql-import'
import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'

const typeDefs = importSchema('schema.graphql')

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server running on http://localhost:4000'))
