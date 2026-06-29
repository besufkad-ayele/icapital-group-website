"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NewsHero() {
  return (
    <section className="relative z-0 min-h-[55vh] overflow-hidden md:min-h-[60vh]">
      {/* <Image
        src="/image.png"
        alt="i-Capital Africa Institute"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      /> */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#061C3D]/95 via-[#061C3D]/85 to-[#061C3D]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061C3D]/90 via-[#061C3D]/40 to-[#061C3D]/50" />

      <div className="absolute left-4 top-6 z-20 md:left-8 md:top-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <FiArrowLeft className="text-lg" />
          Back to group
        </Link>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[60vh] md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mb-6 inline-block rounded-full bg-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-300 backdrop-blur-sm border border-orange-400/30">
            News & Updates
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Insights, Announcements & Stories from The i-Capital Africa Institute
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-50/90 md:text-xl">
            Stay informed on our latest research, sector developments, partnership
            announcements, and thought leadership across Africa&apos;s financial and
            development landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
