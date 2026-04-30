"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamically import the actual Apollo provider with ssr:false so
// @apollo/client's useContext call never runs during server-side rendering
// or static prerendering (which would crash with "null useContext").
const ApolloProviderInner = dynamic(
  () => import("./ApolloProviderInner"),
  { ssr: false }
);

export default function ApolloClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ApolloProviderInner>{children}</ApolloProviderInner>;
}
