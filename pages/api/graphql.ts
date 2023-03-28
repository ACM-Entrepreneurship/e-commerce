import { createYoga } from 'graphql-yoga'
import  { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'

export default createYoga<{
  req: NextApiRequest,
  res: NextApiResponse
}>({
  schema,
  context: createContext, // added for authentication
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}