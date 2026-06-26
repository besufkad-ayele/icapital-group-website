"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBookOpen, FiLayers, FiTrendingUp } from "react-icons/fi";

interface NewsHeroProps {
  articleCount?: number;
  categoryCount?: number;
}

export default function NewsHero({
  articleCount = 0,
  categoryCount = 0,
}: NewsHeroProps) {
  const stats = [
    {
      icon: FiBookOpen,
      value: articleCount,
      label: "Published Articles",
    },
    {
      icon: FiLayers,
      value: categoryCount,
      label: "Topic Categories",
    },
    {
      icon: FiTrendingUp,
      value: "Weekly",
      label: "Fresh Updates",
    },
  ];

  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[75vh]">
      {/* Background Image */}
      <Image
        src="/image.png"
        alt="i-Capital Africa Institute"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center scale-110"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061C3D]/90 via-[#061C3D]/70 to-[#061C3D]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061C3D]/80 via-transparent to-[#061C3D]/30" />

      {/* Back to Home */}
      <div className="absolute left-4 top-6 z-20 md:left-8 md:top-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <FiArrowLeft className="text-lg" />
          Back to group
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-24 md:min-h-[75vh] md:px-8 md:py-28">
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

          <p className="mb-4 max-w-3xl text-lg leading-relaxed text-blue-50/90 md:text-xl">
            Stay informed on our latest research, sector developments, partnership
            announcements, and thought leadership across Africa&apos;s financial and
            development landscape.
          </p>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-blue-100/70">
            From policy briefs and event recaps to institutional milestones and
            expert commentary — explore curated coverage that connects local
            priorities with global best practices.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md"
              >
                <stat.icon className="text-2xl text-orange-400" />
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-100/60">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
