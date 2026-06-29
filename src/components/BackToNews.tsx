"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function BackToNews() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
      }}
      className="fixed bottom-10 right-10 z-50"
    >
      <Link
        href="/news"
        aria-label="Back to News & Updates"
        className="group flex h-14 items-center gap-2 rounded-2xl bg-[#061C3D] px-5 text-white shadow-[0_20px_50px_rgba(6,28,61,0.3)] backdrop-blur-md transition-all hover:bg-orange-500 hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.5)] focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <FiArrowLeft className="text-xl transition-transform group-hover:-translate-x-0.5" />
        <span className="text-xs font-black uppercase tracking-tight">Back to News & Updates</span>
      </Link>
    </motion.div>
  );
}
