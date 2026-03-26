"use client";

import Image from "next/image";
import HeroImg from "@/assets/hero-img.png";
import Header from "../Header";
import Link from "next/link";
import EAFSLogo from "@/assets/eafs/EAFS-Logo.png";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_HERO_SECTION } from "@/graphql/eafs/eafsHome";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const { data, loading, error } = useQuery(GET_EAFS_HERO_SECTION);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading hero section.</div>;
  }

  const hero = data?.eafsHome?.EAFSHeroSection;



  return (
    <motion.div
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header - only visible within Hero section */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header
          logo={EAFSLogo}
          linkColor="#FFFFFF"
          linkActiveColor="#F78019"
          buttonBorderColor="#FFFFFF"
          buttonTextColor="#FFFFFF"
          mobileMenuBg="bg-[#253E5E]/90" // or bg-black/80, etc.
        />
      </div>

      <div className="relative h-full w-full">
        {/* Background Image */}
        <Image
          src={HeroImg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(89.66deg, rgba(37, 62, 94, 0.85) 0.29%, rgba(247, 128, 25, 0.85) 99.71%)",
          }}
        />

        {/* Hero Content */}
        <div
          ref={ref}
          className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 pt-20 text-white md:px-12 lg:px-24"
        >
          {/* Content Wrapper */}
          <div className="w-full max-w-4xl space-y-6 md:space-y-8">
            {/* Event Badge */}

            {hero?.tagTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block rounded-full bg-white bg-opacity-20 px-4 py-2 text-base tracking-wide text-white backdrop-blur-sm lg:text-base"
              >
                {hero?.tagTitle}
              </motion.span>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-bold leading-[50px] sm:text-5xl lg:text-6xl lg:leading-[80px]"
            >
              {hero?.heading ||
                "Register for the 10th East Africa Finance Summit"}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-lg leading-normal text-gray-200 md:text-xl lg:text-[24px] lg:leading-[48px]"
            >
              {hero?.description ||
                "Join industry leaders, innovators, and policymakers at the region's premier summit to explore emerging trends, forge strategic partnerships, and drive impactful financial transformation."}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start space-y-4 md:flex-row md:space-x-6 md:space-y-0"
            >
              <motion.a
                href={hero?.buttonLink || "/register-now"}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-fit min-w-[180px] rounded-full bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
              >
                {hero?.buttonText || "Register Now"}
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/news-and-blogs">
                  <button className="w-fit min-w-[180px] rounded-full border border-white px-8 py-3 text-center text-sm text-white transition duration-300 hover:bg-white hover:text-gray-900 lg:text-base">
                    More News →
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/">
                  <button className="group relative w-fit min-w-[180px] overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-8 py-3 text-center text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] lg:text-base">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-lg">←</span>
                      <span className="font-medium tracking-wide">
                        Go Back to Group
                      </span>
                    </span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F78019]/20 to-[#F78019]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
