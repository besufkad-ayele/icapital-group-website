"use client";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useMemo, ReactNode } from "react";

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API,
    fetchOptions: { timeout: 30000 },
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          portfolios: {
            keyArgs: false,
            merge(_existing, incoming) { return incoming; },
          },
          newsArticles: {
            keyArgs: false,
            merge(_existing, incoming) { return incoming; },
          },
          events: {
            keyArgs: false,
            merge(_existing, incoming) { return incoming; },
          },
        },
      },
      Portfolio:   { keyFields: ["id"] },
      NewsArticle: { keyFields: ["id"] },
      Event:       { keyFields: ["id"] },
    },
    resultCaching: true,
    possibleTypes: {},
  });

  return new ApolloClient({
    link: httpLink,
    cache,
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: { fetchPolicy: "cache-first", errorPolicy: "all", nextFetchPolicy: "cache-first" },
      query:       { fetchPolicy: "cache-first", errorPolicy: "all" },
      mutate:      { errorPolicy: "all" },
    },
  });
}

// One client instance for the lifetime of the browser session
let clientSingleton: ApolloClient<any> | null = null;

function getClient() {
  if (!clientSingleton) clientSingleton = makeClient();
  return clientSingleton;
}

export default function ApolloProviderInner({ children }: { children: ReactNode }) {
  const client = useMemo(() => getClient(), []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
