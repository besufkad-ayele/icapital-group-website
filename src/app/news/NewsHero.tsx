"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NewsHero() {
  return (
    <section className="relative bg-gray-50 px-4 py-16 md:py-20">
      {/* Back to Home Button */}
      <div className="absolute left-4 top-4 md:left-8 md:top-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <FiArrowLeft className="text-lg" />
          Back to group
        </Link>
      </div>

      {/* Header Content */}
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* News & Updates Tag */}
          <div className="mb-6 flex justify-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-600">
              News & Updates
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-[#061C3D] md:text-5xl lg:text-6xl">
            Latest Insights, Announcements, and Stories from The i-Capital Africa
            Institute
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

