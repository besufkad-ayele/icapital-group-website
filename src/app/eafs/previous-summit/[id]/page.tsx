"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_SUMMIT_DETAIL_BY_SLUG } from "@/graphql/eafs/previousSummit";
import ModernLoader from "@/components/ui/ModernLoader";
import Hero from "@/components/eafs/PreviousSummitDetail/Hero";
import RecapRewind from "@/components/eafs/PreviousSummitDetail/RecapRewind";
import OpeningRemark from "@/components/eafs/PreviousSummitDetail/OpeningRemark";
import OpeningSession from "@/components/eafs/PreviousSummitDetail/OpeningSession";
import OrganizersPartners from "@/components/eafs/PreviousSummitDetail/OrganizersPartners";
import StrategicPartners from "@/components/eafs/PreviousSummitDetail/StrategicPartners";
import ExploreOtherSummits from "@/components/eafs/PreviousSummitDetail/ExploreOtherSummits";
import Footer from "@/components/Home/Footer";
import SessionBlock from "@/components/eafs/PreviousSummitDetail/SessionBlock";
import PlatiniumSponsors from "@/components/eafs/PreviousSummitDetail/PlatiniumSponsors";

const PreviousSummitDetail = () => {
  const params = useParams();
  const summitSlug = params.id as string;
  console.log(summitSlug);
  const { data, loading, error } = useQuery(GET_SUMMIT_DETAIL_BY_SLUG, {
    variables: { slug: summitSlug },
  });

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading summit detail.</div>;

  const summit = data?.eafsPreviousSummitDetails?.[0];
  const sessionBlocks = summit?.sessionBlock || [];


  return (
    <main className="min-h-screen bg-white">
      <Hero summit={summit} />
      <RecapRewind summit={summit} />
      <OpeningRemark summit={summit} />
      <OpeningSession summit={summit} />

      {sessionBlocks.map((session: any, idx: number) => (
        <SessionBlock key={idx} session={session} />
      ))}

      <OrganizersPartners organizersPartners={summit?.organizersPartners} />
      <StrategicPartners strategicPartners={summit?.strategicPartners} />
      <PlatiniumSponsors platiniumSponsors={summit?.platinuimSponsors} />
      <ExploreOtherSummits currentSummitSlug={summitSlug} />
      <Footer />
    </main>
  );
};

export default PreviousSummitDetail;
