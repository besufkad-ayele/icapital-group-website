"use client";
import Hero from "@/components/eafs/Landing/Hero";
import About from "@/components/eafs/Landing/About";
import WhyAttend from "@/components/eafs/Landing/WhyAttend";
import KeyThemes from "@/components/eafs/Landing/KeyThemes";
import WhoAttends from "@/components/eafs/Landing/WhoAttends";
import PreviousSpeeches from "@/components/eafs/Landing/PreviousSpeeches";
import Testimonials from "@/components/eafs/Landing/Testimonials";
import OrganizersPartners from "@/components/eafs/Landing/OrganizersPartners";
import NumbersStats from "@/components/eafs/Landing/NumbersStats";
import RegistrationCTA from "@/components/eafs/Landing/RegistrationCTA";
import ExplorePreviousSummits from "@/components/eafs/Landing/ExplorePreviousSummits";
import Footer from "@/components/Home/Footer";
import ApolloEafsProvider from "@/components/providers/ApolloEafsProvider";

const EAFS = () => {
  return (
    <ApolloEafsProvider> 
      <div>
        <Hero />
        <About />
        <WhyAttend />
        <KeyThemes />
        <ExplorePreviousSummits />
        <WhoAttends />
        <PreviousSpeeches />
        <Testimonials />
        <OrganizersPartners />
        <NumbersStats />
        <RegistrationCTA />
        <Footer />
      </div>
    </ApolloEafsProvider>
  );
};
export default EAFS;
