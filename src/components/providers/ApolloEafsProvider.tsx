"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const ApolloEafsProviderInner = dynamic(
  () => import("./ApolloEafsProviderInner"),
  { ssr: false }
);

export default function ApolloEafsProvider({ children }: { children: ReactNode }) {
  return <ApolloEafsProviderInner>{children}</ApolloEafsProviderInner>;
}
