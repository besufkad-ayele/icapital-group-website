import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API,
  // Add fetch options with timeout
  fetchOptions: {
    timeout: 30000, // 30 seconds timeout
  },
});

// Configure Apollo cache with proper type policies
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Cache portfolios with merge strategy
        portfolios: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        // Cache news articles
        newsArticles: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        // Cache events
        events: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
    Portfolio: {
      keyFields: ["id"],
    },
    NewsArticle: {
      keyFields: ["id"],
    },
    Event: {
      keyFields: ["id"],
    },
  },
  // Enable result caching
  resultCaching: true,
  // Add cache persistence options
  possibleTypes: {},
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  // Enable query deduplication
  queryDeduplication: true,
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
});

export default apolloClient;
