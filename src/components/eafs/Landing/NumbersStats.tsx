"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaMicrophone,
  FaBuilding,
  FaUsers,
  FaGlobeAfrica,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_NUMBERS } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import Image from "next/image";

interface StatItemProps {
  icon: { url?: string; width?: number; height?: number } | null;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const StatItem = ({
  icon,
  value,
  suffix = "",
  label,
  duration = 2,
  index,
}: StatItemProps) => {
  const iconObj = Array.isArray(icon) ? icon[0] : icon;

  return (
    <motion.div
      className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center">
        {iconObj?.url && (
          <Image
            src={getStrapiImageUrl(iconObj.url)}
            alt={label}
            width={iconObj.width || 56}
            height={iconObj.height || 56}
            className="h-14 w-14 object-contain"
          />
        )}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#0A244E]">
          <CountUp
            start={0}
            end={value}
            duration={duration}
            separator=","
            suffix={suffix}
          />
        </div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </motion.div>
  );
};

const NumbersStats = () => {
  const { data, loading, error } = useQuery(GET_EAFS_NUMBERS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading numbers section.</div>;
  const section = data?.eafsHome?.EAFSInNumbers;
  const stats = section?.numbersCard || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {section?.heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat: any, index: number) => (
            <StatItem
              key={index}
              icon={stat.icon || null}
              value={stat.endNumber}
              label={stat.Name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersStats;
