import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri:'htpp://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient;