"use client";

import Image from "next/image";
import FinanceIcon from "@/assets/eafs/Key-themes/Finance.png";
import FintechIcon from "@/assets/eafs/Key-themes/Fintech.png";
import InsuranceIcon from "@/assets/eafs/Key-themes/Insurance.png";
import RegionalIcon from "@/assets/eafs/Key-themes/Regional.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_KEY_THEMES } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";

interface ThemeCardProps {
  icon: any;
  title: string;
  description: string;
  iconBgColor: string;
  index: number;
}

const ThemeCard = ({
  icon,
  title,
  description,
  iconBgColor,
  index,
}: ThemeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-5 flex items-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-lg ${iconBgColor} mr-4`}
        >
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0A244E]">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const KeyThemes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const { data, loading, error } = useQuery(GET_EAFS_KEY_THEMES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading key themes section.</div>;
  }

  const section = data?.eafsHome?.EAFSKeyThemes;
  const themes = section?.keyThemesCard || [];

  return (
    <section className="bg-gray-50 py-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          {section?.heading}
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {themes.map((theme: any, index: number) => (
            <ThemeCard
              key={index}
              icon={getStrapiImageUrl(theme.icon?.url)}
              title={theme.title}
              description={theme.description}
              iconBgColor="bg-blue-100"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyThemes;
