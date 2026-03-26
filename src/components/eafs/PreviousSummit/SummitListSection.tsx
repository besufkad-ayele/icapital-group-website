import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_PREVIOUS_SUMMIT_PAGE } from "@/graphql/eafs/previousSummit";
import ModernLoader from "@/components/ui/ModernLoader";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { motion } from "framer-motion";

type Summit = {
  title: string;
  year: number;
  banner: { url: string; width?: number; height?: number };
  highlight: any;
  slug: string;
};

export default function SummitListSection() {
  const { data, loading, error } = useQuery(GET_PREVIOUS_SUMMIT_PAGE);

  if (loading) return <ModernLoader />;
  if (error)
    return (
      <div className="py-12 text-center text-red-500">
        Error loading summit highlights.
      </div>
    );

  const highlights: Summit[] =
    data?.previousSummitPage?.eafs_previous_summit_highlights || [];

  return (
    <section className="w-full px-8 py-12">
      {highlights.map((summit, idx) => (
        <motion.div
          key={summit.slug}
          className={`
            flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
            mb-24
            w-full
            items-center
            ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            gap-12
            py-12
          `}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image */}
          <motion.div
            className="flex justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={getStrapiImageUrl(summit.banner.url)}
              alt={summit.title}
              width={summit.banner.width || 600}
              height={summit.banner.height || 320}
              className="h-[320px] w-full max-w-[600px] rounded-lg object-cover shadow-lg"
            />
          </motion.div>
          {/* Description */}
          <motion.div
            className="px-4 md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-4 text-3xl font-bold">{summit.title}</h2>
            <div className="mb-6">
              {Array.isArray(summit.highlight) ? (
                <BlocksRenderer content={summit.highlight} />
              ) : (
                <p>{summit.highlight}</p>
              )}
            </div>
            <Link
              href={`/eafs/previous-summit/${summit.slug}`}
              className="inline-block rounded-full border border-orange-500 px-6 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              View details &rarr;
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
