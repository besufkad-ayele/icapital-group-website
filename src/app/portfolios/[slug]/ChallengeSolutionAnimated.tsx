"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const circleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, type: "spring" },
  },
};
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export default function ChallengeSolutionAnimated({
  problem,
  problemPoints,
  solution,
  solutionPoints,
}) {
  return (
    <div className="mb-20 grid gap-8 md:grid-cols-2">
      {/* Problem Section */}
      <motion.div
        className="relative overflow-visible rounded-2xl bg-white p-8 shadow-sm"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative z-10 flex items-center">
          <motion.span
            className="absolute left-0 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10"
            variants={circleVariants}
          />
          <motion.h2
            className="relative z-10 pl-6 text-2xl font-bold text-gray-900"
            variants={titleVariants}
          >
            The Challenge
          </motion.h2>
        </div>
        <p className="mt-4 text-gray-600">{problem}</p>
        <ul className="mt-6 space-y-4">
          {problemPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl bg-gray-50 p-4"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
                {index + 1}
              </span>
              <span className="text-gray-600">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        className="relative overflow-visible rounded-2xl bg-white p-8 shadow-sm"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative z-10 flex items-center justify-end">
          <motion.span
            className="absolute right-0 top-1/2 z-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-500/10"
            variants={circleVariants}
          />
          <motion.h2
            className="relative z-10 pr-6 text-2xl font-bold text-gray-900"
            variants={titleVariants}
          >
            Our Solution
          </motion.h2>
        </div>
        <p className="mt-4 text-gray-600">{solution}</p>
        <ul className="mt-6 space-y-4">
          {solutionPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-xl bg-gray-50 p-4"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
                {index + 1}
              </span>
              <span className="text-gray-600">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
