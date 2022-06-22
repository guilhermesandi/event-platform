import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0c0681qio01w7bz1ach9r/master',
  cache: new InMemoryCache()
})