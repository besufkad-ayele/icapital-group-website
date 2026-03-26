"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/utils/apollo.client";

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
