"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
};

export default function OtherProjects({ projects }: { projects: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-xl font-bold"
      >
        Other Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            className="h-full"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            <Link href={`/portfolios/${project.slug}`} passHref>
              <div className="group mx-auto flex h-full max-w-[480px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl">
                <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[rgba(247,128,25,0.1)] p-6">
                  <Image
                    src={getStrapiMedia(project.cardImage?.url)}
                    alt={project.title}
                    width={220}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-left text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="mt-6 inline-block self-end text-orange-500">
                    View Project →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
