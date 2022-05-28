import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
    uri: process.env.DIRECTUS_API_URL,
    cache: new InMemoryCache(),
});
