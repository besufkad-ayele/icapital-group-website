"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import EAFSLogo from "@/assets/eafs/EAFS-black-Logo.png";
import Header from "../Header";
import HeroImg from "@/assets/hero-img.png";

interface HeroProps {
  summit: any;
}

const Hero = ({ summit }: HeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  if (!summit) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl text-gray-600">Summit not found</p>
      </div>
    );
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header
          logo={EAFSLogo}
          linkColor="#FFFFFF"
          linkActiveColor="#F78019"
          buttonBorderColor="#FFFFFF"
          buttonTextColor="#FFFFFF"
          mobileMenuBg="bg-[#253E5E]/90"
          headerBg="bg-[#253E5E]/90"
        />
      </div>
      {/* Background Image */}
      <Image
        src={HeroImg}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0"
        priority
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(89.66deg, rgba(37, 62, 94, 0.85) 0.29%, rgba(247, 128, 25, 0.85) 99.71%)",
        }}
      />
      {/* Content Section */}
      <div
        ref={ref}
        className="container relative z-20 mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl space-y-6"
        >
          <motion.span
            custom={0}
            variants={textVariants}
            className="inline-block rounded-full bg-[#F78019] bg-opacity-10 px-4 py-2 text-sm font-medium text-[#F78019]"
          >
            Previous Summit
          </motion.span>

          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {summit.summitTitle || summit.title}
          </motion.h1>

          {/* Subtitle/Quote */}
          {summit.subtitle && (
            <motion.p
              custom={2}
              variants={textVariants}
              className="mx-auto max-w-2xl text-lg font-medium text-white/90 md:text-xl lg:text-2xl"
            >
              {summit.summitDescription}
            </motion.p>
          )}

          {/* Details Row */}
          <motion.div
            custom={3}
            variants={textVariants}
            className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16"
          >
            {/* Date */}
            <div className="flex items-center gap-3">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="text-left">
                <div className="text-sm text-white/80">Date</div>
                <div className="text-base font-semibold text-white">
                  {summit.date}
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-3">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-left">
                <div className="text-sm text-white/80">Location</div>
                <div className="text-base font-semibold text-white">
                  {summit.location}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Scroll for more - moved to absolute bottom */}
        <motion.div
          custom={4}
          variants={textVariants}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
        >
          <span className="text-base text-white/80">Scroll for more</span>
          <svg
            className="mt-2 h-6 w-6 animate-bounce text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
