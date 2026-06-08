/**
 * Structured Data (JSON-LD) Utilities
 * Generates Schema.org markup for SEO and LLM optimization
 */

import { BUSINESS_INFO } from "@/constants/seo";

type WithContext<T> = T & {
  "@context": "https://schema.org";
};

/**
 * Organization Schema - Defines the company entity
 * Use on: Root layout (all pages)
 */
export function generateOrganizationSchema() {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.alternateName,
    url: BUSINESS_INFO.url,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS_INFO.logo,
      width: "512",
      height: "512",
    },
    description: BUSINESS_INFO.description,
    foundingDate: BUSINESS_INFO.foundingDate,
    email: BUSINESS_INFO.email,

    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    sameAs: [
      BUSINESS_INFO.socialMedia.linkedin,
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.twitter,
      BUSINESS_INFO.socialMedia.youtube,
    ],
  };

  return schema;
}

/**
 * LocalBusiness Schema - Critical for "near me" searches
 * Use on: Homepage and location pages
 */
export function generateLocalBusinessSchema() {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BUSINESS_INFO.url}/#localbusiness`,

    name: BUSINESS_INFO.name,
    image: BUSINESS_INFO.logo,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      "@type": "Country",
      name: area,
    })),
    priceRange: "$$$", // Update based on your pricing
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return schema;
}

/**
 * Article Schema - For news/blog posts
 * Use on: Individual news article pages
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
    },
    publisher: {

      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS_INFO.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };

  return schema;
}

/**
 * Breadcrumb Schema - Navigation hierarchy
 * Use on: All pages with breadcrumb navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return schema;
}

/**
 * FAQ Schema - Question and answer pairs

 * Use on: FAQ pages and pages with Q&A sections
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return schema;
}

/**
 * Service Schema - Individual services offered
 * Use on: Service pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
}) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,

    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      "@type": "Organization",
      name: service.provider || BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
    },
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      "@type": "Country",
      name: area,
    })),
  };

  return schema;
}

/**
 * WebPage Schema - Generic webpage
 * Use on: Generic pages
 */
export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    datePublished: page.datePublished,
    dateModified: page.dateModified,

    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.url}/#website`,
    },
  };

  return schema;
}

/**
 * Portfolio/CreativeWork Schema - Case studies and portfolios
 * Use on: Portfolio detail pages
 */
export function generatePortfolioSchema(portfolio: {
  title: string;
  description: string;
  image: string;
  url: string;
  client?: string;
  datePublished?: string;
}) {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: portfolio.title,
    description: portfolio.description,
    image: portfolio.image,
    url: portfolio.url,
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
    },
    datePublished: portfolio.datePublished,
    ...(portfolio.client && {
      about: {
        "@type": "Organization",
        name: portfolio.client,

      },
    }),
  };

  return schema;
}

/**
 * WebSite Schema - Search box and site information
 * Use on: Homepage
 */
export function generateWebSiteSchema() {
  const schema: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.url}/#website`,
    url: BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    publisher: {
      "@id": `${BUSINESS_INFO.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS_INFO.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return schema;
}
