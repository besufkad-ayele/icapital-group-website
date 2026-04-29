"use client";

import Hero from "@/components/eafs/PreviousSummit/Hero";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import OrganizersPartners from "@/components/eafs/Landing/OrganizersPartners";
import RegistrationCTA from "@/components/eafs/Landing/RegistrationCTA";
import Footer from "@/components/Home/Footer";
import ApolloEafsProvider from "@/components/providers/ApolloEafsProvider";
import SummitListSection from "@/components/eafs/PreviousSummit/SummitListSection";
import { useQuery } from "@apollo/client";
import { GET_UPCOMING_EVENTS } from "@/graphql/home/home";

export default function PreviousSummitPage() {
  // Fetch upcoming events data on client side
  const { data: upcomingEventsData } = useQuery(GET_UPCOMING_EVENTS);

  return (
    <ApolloEafsProvider>
      <main className="bg-white">
        <Hero />
        <SummitListSection />
        <UpcomingEvents upcomingEventsData={upcomingEventsData} />
        <OrganizersPartners />
        <RegistrationCTA />
        <Footer />
      </main>
    </ApolloEafsProvider>
  );
}
