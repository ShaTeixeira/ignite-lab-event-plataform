import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pv6l7i29vc01xxbzog71uk/master',
    cache: new InMemoryCache()
})