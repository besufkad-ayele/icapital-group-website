"use client";

import Hero from "@/components/eafs/PreviousSummit/Hero";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import OrganizersPartners from "@/components/eafs/Landing/OrganizersPartners";
import RegistrationCTA from "@/components/eafs/Landing/RegistrationCTA";
import Footer from "@/components/Home/Footer";
import ApolloEafsProvider from "@/components/providers/ApolloEafsProvider";
import SummitListSection from "@/components/eafs/PreviousSummit/SummitListSection";

export default function PreviousSummitPage() {
  return (
    <ApolloEafsProvider>
      <main className="bg-white">
        <Hero />
        <SummitListSection  />
        <UpcomingEvents />
        <OrganizersPartners />
        <RegistrationCTA />
        <Footer />
      </main>
    </ApolloEafsProvider>
  );
}
