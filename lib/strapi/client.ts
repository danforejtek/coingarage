import { GraphQLClient } from "graphql-request"

const endpoint = process.env.STRAPI_GRAPHQL_URL
export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
})
