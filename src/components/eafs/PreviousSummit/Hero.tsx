"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import eafsLogo from "@/assets/eafs/EAFS-black-Logo.png";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_PREVIOUS_SUMMIT_PAGE } from "@/graphql/eafs/previousSummit";
import ModernLoader from "@/components/ui/ModernLoader";
import Header from "../Header";

const Hero = () => {
  const { data, loading, error } = useQuery(GET_PREVIOUS_SUMMIT_PAGE);

  if (loading) return <ModernLoader />;
  if (error)
    return (
      <div className="py-12 text-center text-red-500">
        Error loading hero section.
      </div>
    );

  const heroTitle = data?.previousSummitPage?.heroTitle || "Previous Summits";
  const heroSubTitle =
    data?.previousSummitPage?.heroSubTitle || "Explore our past events";

  const scrollToContent = () => {
    // Scroll to the content section
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[rgba(247,128,25,0.05)]">
      {/* Shared Header */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header
          logo={eafsLogo}
          linkColor="#1A365D"
          linkActiveColor="#F78019"
          buttonBorderColor="#F78019"
          buttonTextColor="#F78019"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
        <div className="flex w-full max-w-6xl flex-col items-center">
          <Link
            href="/eafs"
            className="group mb-8 mt-24 inline-flex items-center gap-3 rounded-full border border-[#F78019] px-6 py-3 text-[#F78019] transition-all hover:bg-[#F78019] hover:text-white"
          >
            <span className="text-xl font-medium transition-transform group-hover:-translate-x-1">
              ←
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Go Back to Home
            </span>
          </Link>

          <motion.h1
            className="font-heading text-4xl font-bold leading-relaxed tracking-wide text-[#1A365D] md:text-5xl md:leading-relaxed md:tracking-wider lg:text-6xl lg:leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-4xl text-base font-light leading-loose tracking-wide text-[#2D3748] md:text-lg md:leading-loose md:tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroSubTitle}
          </motion.p>
        </div>
      </div>

      {/* Arrow Section - Separated to position at bottom */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToContent}
          className="flex animate-bounce items-center justify-center rounded-full border-none bg-transparent p-0 text-[#F78019] outline-none"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 45.8C13.54 45.8 4.2 36.46 4.2 25C4.2 13.54 13.54 4.2 25 4.2C36.46 4.2 45.8 13.54 45.8 25C45.8 36.46 36.46 45.8 25 45.8Z"
              fill="#F78019"
            />
            <path
              d="M25 29.1667L14.5833 18.75L17.5 15.8333L25 23.3333L32.5 15.8333L35.4167 18.75L25 29.1667Z"
              fill="#F78019"
            />
            <path
              d="M25 37.5L14.5833 27.0833L17.5 24.1667L25 31.6667L32.5 24.1667L35.4167 27.0833L25 37.5Z"
              fill="#F78019"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
