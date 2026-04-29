"use client";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo, useState, useEffect } from "react";

export default function ApolloEafsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Only render ApolloProvider on the client side
  if (!mounted) {
    return <>{children}</>;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
