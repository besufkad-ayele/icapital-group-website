"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Tag from "@/ui/Tag";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA}${url}`;
};

// Define types for our data
interface ImageData {
  url: string;
  width: number;
  height: number;
}

interface Card {
  title: string;
  description: string;
  link: string;
  originalWebsiteBgColor: string;
  isGradient: boolean;
  image: ImageData;
  logo: ImageData;
}

interface SectorsData {
  tagTitle: string;
  heading: string;
  description: string;
  cards: Card[];
}

// Define the props interface for Sectors component
interface SectorsProps {
  sectorsData: SectorsData | null;
}

const Sectors = ({ sectorsData }: SectorsProps) => {
  const pathname = usePathname();

  // Helper function to determine if a color is dark based on its hex value
  const isColorDark = (hexColor: string): boolean => {
    if (hexColor?.includes("gradient")) {
      return true;
    }
    const hex = hexColor?.replace("#", "");
    const r = parseInt(hex?.substring(0, 2), 16);
    const g = parseInt(hex?.substring(2, 4), 16);
    const b = parseInt(hex?.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const getElementColor = (card: Card): string => {
    if (card.isGradient) {
      if (card.originalWebsiteBgColor.includes("#F78019")) {
        return "#F78019";
      }
      return "#19A2F7";
    }
    return card.originalWebsiteBgColor;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Handle case where sectorsData is not available
  if (!sectorsData?.home?.SectorsSection) {
    return (
      <section className="bg-[#F8F8F8] px-6 py-16 md:px-12">
        <div className="text-center text-red-500">
          Sectors data not available
        </div>
      </section>
    );
  }

  const sectorsSection = sectorsData.home.SectorsSection;

  return (
    <section key={pathname} className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 md:px-12 md:py-32">
      {/* Decorative Background Blobs */}
      <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Tag
              title={sectorsSection.tagTitle}
              titleColor="text-orange-500"
              bgColor="bg-orange-500/10"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="my-6 text-4xl font-extrabold tracking-tight text-[#061C3D] md:text-6xl"
          >
            {sectorsSection.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 md:text-xl leading-relaxed font-medium"
          >
            {sectorsSection.description}
          </motion.p>
        </motion.div>

      {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {(sectorsSection.cards || []).map((card: Card, index: number) => (
            <motion.div
              key={`sector-card-${index}`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
              onClick={() => {
                if ([1, 2, 3, 5].includes(index)) {
                  window.open(card.link, "_blank");
                } else {
                  window.location.href = card.link;
                }
              }}
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 md:aspect-video">
                <Image
                  src={getStrapiMedia(card.image.url)}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent" />
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between p-8 pb-10">
                <h3 className="text-2xl font-black tracking-tight text-[#061C3D] leading-tight group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h3>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <span className="text-2xl text-[#061C3D] group-hover:text-white group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>

              {/* Advanced Glass Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                whileHover={{ opacity: 1, backdropFilter: "blur(12px)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center p-10 text-center opacity-0 group-hover:opacity-100"
                style={{
                  background: (() => {
                    const color = card.originalWebsiteBgColor;
                    if (!color || !color.startsWith("#")) return color;
                    let hex = color.replace("#", "");
                    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
                    return `#${hex}EE`; // 93% opacity for rich color
                  })(),
                }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex flex-col items-center gap-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-4 ring-white/20 transition-transform duration-500 group-hover:rotate-6">
                      <Image
                        src={getStrapiMedia(card.logo.url)}
                        alt={`${card.title} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2
                      className="text-3xl font-black tracking-tight"
                      style={{
                        color: isColorDark(card.originalWebsiteBgColor) ? "white" : "#061C3D",
                      }}
                    >
                      {card.title}
                    </h2>
                  </motion.div>
                  <p
                    className="text-lg leading-relaxed font-medium"
                    style={{
                      color: isColorDark(card.originalWebsiteBgColor)
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(0, 0, 0, 0.75)",
                    }}
                  >
                    {card.description}
                  </p>
                  
                  <motion.div
                    className="pt-4 flex justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl ring-4 ring-white/10">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: getElementColor(card) }}
                      >
                        →
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
