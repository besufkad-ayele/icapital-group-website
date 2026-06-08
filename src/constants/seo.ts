/**
 * Centralized SEO Configuration
 * Single source of truth for all SEO-related constants
 */

export const BUSINESS_INFO = {
  name: "i-Capital Africa Group",
  legalName: "i-Capital Africa Group",
  alternateName: "iCapital Africa",
  url: "https://icapital.com",
  logo: "https://icapital.com/images/i-logo.png",
  description:
    "Leading business and technology consulting firm in Ethiopia. i-Capital Africa Group provides strategic consulting, capital markets solutions, financial services, and digital transformation across East Africa.",
  foundingDate: "2010", // Update with actual date
  
  // Contact Information
  email: "info@icapital.com", // Update with actual email
  phone: "+251-11-XXX-XXXX", // Update with actual phone
  
  // Address
  address: {
    streetAddress: "Bole Road", // Update with actual address
    addressLocality: "Addis Ababa",
    addressRegion: "Addis Ababa",
    postalCode: "1000", // Update if available
    addressCountry: "ET",
  },
  
  // Geographic Coordinates (Addis Ababa)

  geo: {
    latitude: "9.005401",
    longitude: "38.763611",
  },
  
  // Social Media
  socialMedia: {
    twitter: "@icapital_africa", // Update with actual handle
    linkedin: "https://www.linkedin.com/company/icapital-africa",
    facebook: "https://www.facebook.com/icapitalafrica",
    youtube: "https://www.youtube.com/@icapitalafrica",
  },
  
  // Service Areas
  areaServed: [
    "Ethiopia",
    "East Africa",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Rwanda",
    "Horn of Africa",
  ],
};

export const KEYWORDS = {
  // Location-based keywords
  location: [
    "consulting Ethiopia",
    "business consulting Ethiopia",
    "Addis Ababa consulting",
    "East Africa consulting",
    "Ethiopia business solutions",
    "Horn of Africa consulting",
  ],
  
  // Service-based with location
  services: [

    "technology consulting Ethiopia",
    "financial consulting Ethiopia",
    "capital markets Ethiopia",
    "digital transformation Ethiopia",
    "business strategy Ethiopia",
    "management consulting East Africa",
  ],
  
  // Industry-specific
  industry: [
    "fintech Ethiopia",
    "financial services Ethiopia",
    "investment banking Ethiopia",
    "corporate finance Ethiopia",
    "business development Ethiopia",
  ],
  
  // Core services (existing)
  core: [
    "technology",
    "consulting",
    "capital",
    "AI",
    "business",
    "market",
    "solution",
    "training and development",
    "bond",
    "development",
    "leadership",
    "registration",
    "application software",
    "strategy",
    "financial",
    "system",
    "organization",
    "economic",
  ],
  
  // LLM-friendly conversational keywords
  conversational: [
    "how to start a business in Ethiopia",

    "best consulting firms Ethiopia",
    "financial advisory services East Africa",
    "business transformation Africa",
  ],
};

// Combine all keywords into single array
export const ALL_KEYWORDS = [
  ...KEYWORDS.location,
  ...KEYWORDS.services,
  ...KEYWORDS.industry,
  ...KEYWORDS.core,
  ...KEYWORDS.conversational,
];

export const SEO_DEFAULTS = {
  titleTemplate: "%s | i-Capital Africa Group - Ethiopia",
  defaultTitle:
    "i-Capital Africa Group | Business & Technology Consulting in Ethiopia",
  description:
    "Leading business and technology consulting firm in Ethiopia. i-Capital Africa Group provides strategic consulting, capital markets solutions, financial services, and digital transformation across East Africa. Based in Addis Ababa.",
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "i-Capital Africa Group",
  },
};
