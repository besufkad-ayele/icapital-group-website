"use client";

import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface Logo {
  logo: Array<{
    url: string;
  }>;
  altText?: string;
}

interface SliderData {
  sectionTitle?: string;
  logos: Logo[];
}

const DEFAULT_SECTION_TITLE = "As Trusted by Top Companies";
const ANIMATION_DURATION = 40; // slowed down from 20 for a smoother, premium feel

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Define the props interface for Slider component
interface SliderProps {
  sliderData: any;
}

const Slider: React.FC<SliderProps> = ({ sliderData }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Handle case where sliderData is not available
  if (!sliderData?.home?.trustedCompaniesSlider) {
    return (
      <section className="bg-white py-12">
        <div className="text-center text-red-500">
          Slider data not available
        </div>
      </section>
    );
  }

  const data = sliderData.home.trustedCompaniesSlider;
  const sectionTitle = data?.sectionTitle || DEFAULT_SECTION_TITLE;
  const logos = data?.logos || [];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const getImageUrl = (url: string): string => {
    return url.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center text-3xl font-extrabold tracking-tight text-[#061C3D] md:text-5xl lg:text-6xl"
        >
          {sectionTitle}
        </motion.h2>

        <div className="relative w-full">
          {/* Edge Fades for Seamless Look */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: ANIMATION_DURATION,
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((item, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  initial="hidden"
                  animate={controls}
                  whileInView="visible"
                  viewport={{ once: false }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative flex h-20 w-40 flex-shrink-0 items-center justify-center grayscale-0 transition-all duration-500 md:h-24 md:w-56"
                >
                  <div className="absolute inset-0 rounded-2xl bg-[#061C3D]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  {item.logo?.[0]?.url && (
                    <div className="relative h-16 w-32 md:h-20 md:w-44 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={getImageUrl(item.logo[0].url)}
                        alt={item.altText || "Company Logo"}
                        fill
                        sizes="(max-width: 768px) 160px, 224px"
                        className="object-contain filter-none drop-shadow-sm"
                        priority={index < 8}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
