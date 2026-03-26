import { executeServerQuery } from "./serverApolloClient";
import {
  GET_HOME,
  GET_TRUSTED_COMPANIES_SLIDER,
  GET_ABOUT_US_SECTION,
  GET_FEATURES_SECTION,
  GET_UPCOMING_EVENTS,
  GET_JOURNEY_SECTION,
  GET_SUBSCRIBE_SECTION,
  GET_GET_STARTED_SECTION,
  GET_SECTORS_SECTION,
  GET_HOME_PORTFOLIO_SECTION,
  GET_TESTIMONIALS_SECTION,
} from "@/graphql/home/home";

// Define the types for our data structure
export interface HomePageData {
  hero: any;
  slider: any;
  aboutUs: any;
  features: any;
  upcomingEvents: any;
  journey: any;
  subscribe: any;
  getStarted: any;
  sectors: any;
  portfolio: any;
  testimonials: any;
}

// Main function to fetch all home page data
export async function getHomePageData(): Promise<HomePageData> {
  try {
    console.log("Starting server-side data fetching...");

    // Execute all queries in parallel for better performance
    const [
      heroData,
      sliderData,
      aboutUsData,
      featuresData,
      upcomingEventsData,
      journeyData,
      subscribeData,
      getStartedData,
      sectorsData,
      portfolioData,
      testimonialsData,
    ] = await Promise.all([
      executeServerQuery(GET_HOME),
      executeServerQuery(GET_TRUSTED_COMPANIES_SLIDER),
      executeServerQuery(GET_ABOUT_US_SECTION),
      executeServerQuery(GET_FEATURES_SECTION),
      executeServerQuery(GET_UPCOMING_EVENTS),
      executeServerQuery(GET_JOURNEY_SECTION),
      executeServerQuery(GET_SUBSCRIBE_SECTION),
      executeServerQuery(GET_GET_STARTED_SECTION),
      executeServerQuery(GET_SECTORS_SECTION),
      executeServerQuery(GET_HOME_PORTFOLIO_SECTION),
      executeServerQuery(GET_TESTIMONIALS_SECTION),
    ]);

    console.log("Sectors data:", sectorsData);

    return {
      hero: heroData,
      slider: sliderData,
      aboutUs: aboutUsData,
      features: featuresData,
      upcomingEvents: upcomingEventsData,
      journey: journeyData,
      subscribe: subscribeData,
      getStarted: getStartedData,
      sectors: sectorsData,
      portfolio: portfolioData,
      testimonials: testimonialsData,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    console.error("Error details:", error);

    // Return empty data structure to prevent crashes
    return {
      hero: null,
      slider: null,
      aboutUs: null,
      features: null,
      upcomingEvents: null,
      journey: null,
      subscribe: null,
      getStarted: null,
      sectors: null,
      portfolio: null,
      testimonials: null,
    };
  }
}
