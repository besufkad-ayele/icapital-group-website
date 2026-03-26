import "@/styles/globals.css";

import { polyfill } from "interweave-ssr";
import { Mulish, Nunito, Urbanist, Questrial } from "next/font/google";

import { Theme } from "@/styles/theme";
import { Metadata } from "next";
import { ReactNode } from "react";
import ApolloClientProvider from "@/components/providers/ApolloProvider";
import { Toaster } from "react-hot-toast";

export const dynamic = "force-dynamic";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-century-gothic",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: " i-Capital Africa Group: A Business And technology group",
  description: "i-Capital Africa Group helps institutions grow, transform, and compete through a connected set of services that bridge people, strategy, capital markets, and technology with a strong focus on measurable execution.",
  keywords: ["technology", "Consulting", "capital", "AI", "business", "Market", "Solution", "training and development", "Bond", "Development", "Leadership", "registration", "application software", "strategy", "Financial", "system", "organization", "ECONOMIC"],
  authors: [{ name: "i-Capital Africa Group" }],
  publisher: "i-Capital Africa Group",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
    siteName: "i-Capital Africa Group",
    title: "i-Capital Africa Group: A Business And Technology Group",
    description: "i-Capital Africa Group helps institutions grow, transform, and compete through a connected set of services that bridge people, strategy, capital markets, and technology.",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/images/i-logo.png`,
        width: 1200,
        height: 630,
        alt: "i-Capital Africa Group",
      },
  ],
  },
verification: {
  google: "",
  yandex: "",
},
icons: {
  icon: [
    {
      url: "/images/i-logo.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/images/i-logo.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/images/i-logo.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  apple: [
    {
      url: "/images/i-logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
  shortcut: "/images/i-logo.png",
},
manifest: "/manifest.json",

};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`custom-scrollbar ${mulish.variable} ${questrial.variable} ${urbanist.variable}`}
    >
      <body>
        <Toaster position="top-right" />
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
