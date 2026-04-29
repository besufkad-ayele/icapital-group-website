"use client";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react";

export default function ApolloEafsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: "http://localhost:1337/graphql",
      fetchOptions: {
        timeout: 30000,
      },
    });

    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            summits: {
              keyArgs: false,
              merge(_existing, incoming) {
                return incoming;
              },
            },
            testimonials: {
              keyArgs: false,
              merge(_existing, incoming) {
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
