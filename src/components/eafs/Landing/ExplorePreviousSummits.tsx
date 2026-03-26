"use client";

import Image from "next/image";
import Link from "next/link";
import ExploreBanner from "@/assets/eafs/Explore-previous-summits/explore-previous-summits-banner.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_EXPLORE_PREVIOUS_SUMMITS } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ExplorePreviousSummits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const { data, loading, error } = useQuery(GET_EAFS_EXPLORE_PREVIOUS_SUMMITS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading explore previous summits section.</div>;
  }

  const section = data?.eafsHome?.EAFSExplorePreviousSummits;

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#F78019] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]"
          >
            <Image
              src={getStrapiImageUrl(section?.image?.url)}
              alt={section?.heading}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-white"
          >
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              {section?.heading}
            </motion.h2>
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="space-y-4"
            >
              <BlocksRenderer content={section?.description} />
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              whileHover="hover"
              className="mt-8"
            >
              <Link
                href={section?.buttonLink}
                className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#F78019] md:min-w-[200px] lg:text-base"
              >
                {section?.buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePreviousSummits;
