"use client";

import Image from "next/image";
import Link from "next/link";
import AboutBanner from "@/assets/eafs/about-banner.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_ABOUT_SECTION } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const { data, loading, error } = useQuery(GET_EAFS_ABOUT_SECTION);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading about section.</div>;
  }

  const about = data?.eafsHome?.EAFSAboutSection;

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-3xl font-bold text-[#253E5E] md:text-4xl"
            >
              {about?.heading}
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <BlocksRenderer content={about?.description} />
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={about?.buttonLink}
                className="inline-block min-w-[200px] rounded-full bg-[#F78019] px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
              >
                {about?.buttonText}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
              <Image
                src={getStrapiImageUrl(about?.image?.url)}
                alt="East Africa Finance Summit"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
