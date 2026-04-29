"use client";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => {
    // Only create client on the client side
    if (typeof window === 'undefined') {
      return null;
    }

    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API,
      fetchOptions: {
        timeout: 30000,
      },
    });

    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            portfolios: {
              keyArgs: false,
              merge(_existing, incoming) {
                return incoming;
              },
            },
            newsArticles: {
              keyArgs: false,
              merge(_existing, incoming) {
                return incoming;
              },
            },
            events: {
              keyArgs: false,
              merge(_existing, incoming) {
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
      resultCaching: true,
      possibleTypes: {},
    });

    return new ApolloClient({
      link: httpLink,
      cache,
      queryDeduplication: true,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-first",
          errorPolicy: "all",
          nextFetchPolicy: "cache-first",
        },
        query: {
          fetchPolicy: "cache-first",
          errorPolicy: "all",
        },
        mutate: {
          errorPolicy: "all",
        },
      },
    });
  }, []);

  // During SSR, render children without Apollo Provider
  if (!client) {
    return <>{children}</>;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
