import { executeServerQuery } from "./serverApolloClient";
import { GET_HOME_PAGE_DATA } from "@/graphql/home/home";

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

// Main function to fetch all home page data using a single optimized query
export async function getHomePageData(): Promise<HomePageData> {
  try {
    // Execute single optimized query instead of 11 parallel queries
    const data = await executeServerQuery(GET_HOME_PAGE_DATA);

    if (!data?.home) {
      console.warn("No home data returned from GraphQL");
      return {
        hero: { home: null },
        slider: { home: null },
        aboutUs: { home: null },
        features: { home: null },
        upcomingEvents: { home: null },
        journey: { home: null },
        subscribe: { home: null },
        getStarted: { home: null },
        sectors: { home: null },
        portfolio: { home: null },
        testimonials: { home: null },
      };
    }

    const homeData = data.home;

    return {
      hero: { home: homeData },
      slider: { home: homeData },
      aboutUs: { home: homeData },
      features: { home: homeData },
      upcomingEvents: { home: homeData },
      journey: { home: homeData },
      subscribe: { home: homeData },
      getStarted: { home: homeData },
      sectors: { home: homeData },
      portfolio: { home: homeData },
      testimonials: { home: homeData },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);

    return {
      hero: { home: null },
      slider: { home: null },
      aboutUs: { home: null },
      features: { home: null },
      upcomingEvents: { home: null },
      journey: { home: null },
      subscribe: { home: null },
      getStarted: { home: null },
      sectors: { home: null },
      portfolio: { home: null },
      testimonials: { home: null },
    };
  }
}
