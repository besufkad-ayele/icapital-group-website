import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import GetStarted from "@/components/Home/GetStarted";
import {
  GET_PORTFOLIO_BY_SLUG,
  GET_ALL_PORTFOLIOS,
} from "@/graphql/portfolio/portfolio";
import { GET_GET_STARTED_SECTION } from "@/graphql/home/home";
import ChallengeSolutionAnimated from "./ChallengeSolutionAnimated";
import ClientCard from "./ClientCard";
import OtherProjects from "./OtherProjects";
import Testimonials from "./Testimonials";
import React from "react";
import { executeServerQuery } from "@/lib/serverApolloClient";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
};

interface PortfolioDetailProps {
  params: {
    slug: string;
  };
}

// Generate static params for all portfolios at build time
export async function generateStaticParams() {
  try {
    const allPortfoliosData: any = await executeServerQuery(GET_ALL_PORTFOLIOS);
    const portfolios = allPortfoliosData?.portfolios || [];

    return portfolios.map((portfolio: any) => ({
      slug: portfolio.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PortfolioDetailProps): Promise<Metadata> {
  const { slug } = await params;

  const portfolioData: any = await executeServerQuery(GET_PORTFOLIO_BY_SLUG, {
    slug,
  });

  if (!portfolioData?.portfolios?.length) {
    return {
      title: "Portfolio Not Found",
    };
  }

  const portfolio = portfolioData.portfolios[0];

  return {
    title: `${portfolio.title} | i-Capital Africa Institute`,
    description:
      portfolio.clientDescription ||
      `Portfolio project for ${portfolio.clientName}`,
    openGraph: {
      title: portfolio.title,
      description: portfolio.clientDescription,
      images: portfolio.cardImage?.url
        ? [getStrapiMedia(portfolio.cardImage.url)]
        : [],
    },
  };
}

const PortfolioDetail = async ({ params }: PortfolioDetailProps) => {
  // Await params for Next.js 15+
  const { slug } = await params;

  // Fetch portfolio data and all portfolios in parallel
  const [portfolioData, allPortfoliosData, getStartedData]: any[] =
    await Promise.all([
      executeServerQuery(GET_PORTFOLIO_BY_SLUG, { slug }),
      executeServerQuery(GET_ALL_PORTFOLIOS),
      executeServerQuery(GET_GET_STARTED_SECTION),
    ]);

  console.log("Portfolio Data:", portfolioData);
  console.log("Slug:", slug);

  // Check if portfolio exists
  if (!portfolioData?.portfolios?.length) {
    console.log("No portfolio found for slug:", slug);
    notFound();
  }

  const portfolio = portfolioData.portfolios[0];
  console.log("Portfolio loaded:", portfolio.title);

  // Get up to 3 other projects, excluding the current one
  const allPortfolios = allPortfoliosData?.portfolios || [];
  const otherProjects = allPortfolios
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header iconColor="text-black" />
      <div className="container mx-auto px-6 py-24 lg:px-16">
        {/* Client Section - Modernized with Animation and Project Title */}
        <ClientCard
          client={{
            name: portfolio.clientName,
            description: portfolio.clientDescription,
            website: portfolio.clientWebsite,
          }}
          logoImg={
            portfolio.logoImage && getStrapiMedia(portfolio.logoImage.url)
          }
          projectTitle={portfolio.title}
        />

        {/* Challenge & Solution Section */}
        <ChallengeSolutionAnimated
          problem={portfolio.problem}
          problemPoints={portfolio.problemPoint?.map((p: any) => p.point) || []}
          solution={portfolio.solution}
          solutionPoints={
            portfolio.solutionPoint?.map((p: any) => p.point) || []
          }
        />
      </div>

      {/* Testimonials Section */}
      {portfolio.testimonials && portfolio.testimonials.length > 0 && (
        <Testimonials testimonials={portfolio.testimonials} />
      )}

      <div className="container mx-auto px-6 lg:px-16">
        {/* Other Projects Section - Now dynamic */}
        <OtherProjects projects={otherProjects} />
      </div>

      <GetStarted getStartedData={getStartedData} />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
