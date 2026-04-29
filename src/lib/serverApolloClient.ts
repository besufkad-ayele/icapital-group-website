import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create HTTP link for server-side requests
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API || "http://localhost:1337/graphql",
  fetchOptions: {
    timeout: 30000, // 30 seconds timeout
    // Add cache control for server requests
    next: { revalidate: 3600 }, // Revalidate every hour
  },
});

// Add any necessary headers for server-side requests
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Add any authentication headers if needed
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  };
});

// Configure cache for server-side with type policies
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        portfolios: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        newsArticles: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return incoming;
          },
        },
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
});

// Create Apollo Client for server-side use
export const serverApolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  ssrMode: true, // Enable SSR mode
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache", // Always fetch fresh data on server
      errorPolicy: "all",
    },
  },
});

// Helper function to execute queries on the server
export async function executeServerQuery<T>(
  query: any,
  variables?: any,
): Promise<T> {
  try {
    // console.log(
    //   "Executing query:",
    //   query.definitions[0]?.name?.value || "Unknown",
    // );
    // console.log(
    //   "GraphQL URI:",
    //   process.env.NEXT_PUBLIC_API || "http://localhost:1337/graphql",
    // );

    const { data } = await serverApolloClient.query({
      query,
      variables,
      fetchPolicy: "no-cache",
    });

    // console.log("Query result:", data);
    return data;
  } catch (error: any) {
    console.error("Server-side GraphQL query error:", error);
    console.error("Error details:", error);
    
    // Log GraphQL errors if they exist
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      console.error("GraphQL Errors:", JSON.stringify(error.graphQLErrors, null, 2));
    }
    
    // Log network error details if they exist
    if (error.networkError) {
      console.error("Network Error:", error.networkError);
      if (error.networkError.result) {
        console.error("Network Error Result:", JSON.stringify(error.networkError.result, null, 2));
      }
    }
    
    // Return null instead of throwing to prevent crashes
    return null as T;
  }
}
