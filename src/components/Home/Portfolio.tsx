"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Tag from "@/ui/Tag";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
};

// Define the props interface for Portfolio component
interface PortfolioProps {
  portfolioData: any;
}

const Portfolio = ({ portfolioData }: PortfolioProps) => {
  const [showAll, setShowAll] = useState(false);

  // Handle case where portfolioData is not available
  if (!portfolioData?.home?.PortfolioSection) {
    return (
      <section className="bg-gray-50 px-6 py-16 text-center">
        <div className="text-red-500">Portfolio data not available</div>
      </section>
    );
  }

  const section = portfolioData.home.PortfolioSection;
  const portfolios = section?.portfolios || [];

  return (
    <section className="bg-gray-50 px-6 py-16 text-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Tag
            title={section?.sectionTitle || "Portfolio"}
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-3xl font-extrabold tracking-tight text-[#061C3D] md:text-5xl"
        >
          {section?.sectionHeading || "What We Have Achieved So Far"}
        </motion.h2>

        <motion.div
          animate="visible"
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {(portfolios || [])
            .slice(0, showAll ? portfolios.length : 3)
            .map((item: any, index: number) => (
              <motion.div
                key={`${item.slug}-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Link href={`/portfolios/${item.slug}`} className="block h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 transition-all duration-500 hover:border-orange-100 hover:shadow-[0_30px_60px_-15px_rgba(247,128,25,0.1)]">
                    {/* Image Area */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-50/50 p-8 flex items-center justify-center transition-colors duration-500 group-hover:bg-orange-50/30">
                      <div className="relative h-full w-full">
                        <Image
                          src={getStrapiMedia(item.cardImage?.url)}
                          alt={item.title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="text-xl font-bold leading-tight text-[#061C3D] transition-colors duration-300 group-hover:text-orange-500">
                        {item.title}
                      </h3>
                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500">
                          View Case Study
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </motion.div>

        {(portfolios || []).length > 3 && (
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
            >
              {showAll ? (
                <>
                  <span>See Less</span>
                  <FaChevronUp />
                </>
              ) : (
                <>
                  <span>See More</span>
                  <FaChevronDown />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
