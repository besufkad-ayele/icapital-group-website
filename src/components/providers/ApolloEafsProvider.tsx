"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClientEafs from "@/lib/apolloClientEafs";

export default function ApolloEafsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClientEafs}>{children}</ApolloProvider>;
}
