"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Home/Header";
import Footer from "../Home/Footer";

interface ErrorUIProps {
  errorCode: string;
  title: string;
  description: string;
  imageSrc: string;
  showDetails?: boolean;
}

const ErrorUI = ({
  errorCode,
  title,
  description,
  imageSrc,
  showDetails = true,
}: ErrorUIProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const companyDetails = [
    { label: "Call Us", value: "+251911629011", icon: "📞" },
    { label: "Email", value: "info@icapitalafrica.org", icon: "📧" },
  ]; 

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#253E5E] text-white">
      {/* Background Shapes */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-orange-500/5 blur-[100px]" />

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between"
        >
          {/* Left Side: Illustration */}
          <motion.div variants={itemVariants} className="relative aspect-square w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 animate-pulse rounded-full bg-orange-500/10 blur-3xl" />
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex w-full flex-col items-start lg:w-1/2">
            <motion.span
              variants={itemVariants}
              className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-400"
            >
              Error {errorCode}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-8 text-xl text-gray-300"
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/20"
              >
                Go Back Home
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Contact Support
              </Link>
            </motion.div>

            {showDetails && (
              <motion.div
                variants={itemVariants}
                className="mt-12 grid w-full grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3"
              >
                {companyDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                      {detail.label}
                    </span>
                    <p className="flex items-center gap-2 text-sm font-medium text-white">
                      <span>{detail.icon}</span>
                      {detail.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
 <Footer />
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 h-24 w-full rounded-tr-[100px] bg-orange-500/5 lg:h-32" />
    </div>
  );
};

export default ErrorUI;
