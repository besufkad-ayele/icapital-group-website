"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the props interface for GetStarted component
interface GetStartedProps {
  getStartedData: any;
}

const GetStarted = ({ getStartedData }: GetStartedProps) => {
  // Handle case where getStartedData is not available
  if (!getStartedData?.home?.getStartedSection) {
    return (
      <section className="bg-white px-6 py-16 text-center">
        <div className="text-red-500">Get Started data not available</div>
      </section>
    );
  }

  const section = getStartedData.home.getStartedSection;
  const heading =
    section.heading ||
    "Empower Your Business—Transform, Innovate, and Lead Today!";
  const description =
    section.description ||
    "Join us in shaping the future of business excellence.";
  const buttonText = section.buttonText || "Get Started";
  const buttonLink = section.buttonLink || "/contact";
  const services = section.services || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />
      <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-screen-2xl px-4 text-center"
      >
        <div className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-[#061C3D] via-[#082B5B] to-[#061C3D] p-10 md:px-12 md:py-20 shadow-[0_50px_100px_-20px_rgba(6,28,61,0.3)]">
          {/* Internal Decorative Blobs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-[80px]" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-400/20 blur-[80px]" />

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white md:text-7xl leading-[1.05]"
            >
              {heading.split('—').map((part, i) => (
                <span key={i} className="block last:text-orange-400">
                  {part}
                  {i === 0 && <span className="hidden md:inline"> —</span>}
                </span>
              ))}
            </motion.h2>
    
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-blue-100/70 md:text-2xl"
            >
              {description}
            </motion.p>
    
            {/* Services List - Premium Glass Badges */}
            <motion.div
              variants={containerVariants}
              className="mt-16 flex flex-wrap justify-center gap-4"
            >
              {services.map((service: any, index: number) => {
                const content = (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                        delay: 0.1 + index * 0.05,
                      }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-500/40 text-[12px] text-white"
                    >
                      ✓
                    </motion.span>
                    <span className="text-white/90 group-hover:text-white transition-colors">{service.name}</span>
                  </>
                );
  
                return (
                  <motion.div
                    key={service.name}
                    custom={index}
                    variants={serviceVariants}
                  >
                    {service.link.startsWith("/") ? (
                      <Link
                        href={service.link}
                        className="group flex items-center gap-3 rounded-[2rem] bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-orange-500/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-[2rem] bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-orange-500/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                      >
                        {content}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
    
            {/* CTA Button - High Contrast */}
            <motion.div variants={itemVariants} className="mt-20 flex justify-center">
              {buttonLink.startsWith("/") ? (
                <Link
                  href={buttonLink}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white px-12 py-6 text-xl font-black text-[#061C3D] shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_20px_50px_rgba(249,115,22,0.4)]"
                >
                  <span className="relative z-10">{buttonText}</span>
                  <motion.div
                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </Link>
              ) : (
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white px-12 py-6 text-xl font-black text-[#061C3D] shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_20px_50px_rgba(249,115,22,0.4)]"
                >
                  <span className="relative z-10">{buttonText}</span>
                  <motion.div
                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
