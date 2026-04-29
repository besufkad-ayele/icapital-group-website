import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:1337/graphql", // Local Strapi
  fetchOptions: {
    timeout: 30000, // 30 seconds timeout
  },
});

// Configure cache with type policies for EAFS
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        summits: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        testimonials: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
    Summit: {
      keyFields: ["id"],
    },
    Testimonial: {
      keyFields: ["id"],
    },
  },
  resultCaching: true,
});

const apolloClientEafs = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first", // Changed to cache-first for better performance
      errorPolicy: "all",
      nextFetchPolicy: "cache-first",
    },
    query: {
      fetchPolicy: "cache-first", // Changed to cache-first for better performance
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
  queryDeduplication: true,
});

export default apolloClientEafs;
