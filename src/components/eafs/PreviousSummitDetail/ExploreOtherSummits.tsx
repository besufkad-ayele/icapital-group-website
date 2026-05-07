"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_PREVIOUS_SUMMIT_PAGE } from "@/graphql/eafs/previousSummit";
import ModernLoader from "@/components/ui/ModernLoader";
import { BlocksRenderer } from "@/lib/blocks-renderer";

interface ExploreOtherSummitsProps {
  currentSummitSlug: string;
}

const ExploreOtherSummits = ({
  currentSummitSlug,
}: ExploreOtherSummitsProps) => {
  const { data, loading, error } = useQuery(GET_PREVIOUS_SUMMIT_PAGE);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading summits.</div>;

  const highlights =
    data?.previousSummitPage?.eafs_previous_summit_highlights || [];
  const otherSummits = highlights.filter(
    (s: any) => s.slug !== currentSummitSlug,
  );

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-2xl font-bold text-[#253E5E] md:text-3xl">
          Explore Other Summits
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherSummits.map((summit: any, i: number) => (
            <motion.div
              key={summit.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-3 text-xl font-bold text-[#253E5E]">
                {summit.title}
              </div>
              <div className="mb-8 line-clamp-4 text-base text-gray-600 md:text-lg">
                {Array.isArray(summit.highlight) ? (
                  <BlocksRenderer content={summit.highlight} />
                ) : (
                  summit.highlight
                )}
              </div>
              <Link
                href={`/eafs/previous-summit/${summit.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#F78019] px-6 py-2 font-semibold text-[#F78019] transition-all hover:bg-[#F78019]/10 hover:shadow-md"
              >
                Summit details <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherSummits;
