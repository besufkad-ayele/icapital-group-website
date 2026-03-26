"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_REGISTER_NOW } from "@/graphql/eafs/eafsHome";

const RegistrationCTA = () => {
  const { data, loading, error } = useQuery(GET_EAFS_REGISTER_NOW);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading registration section.</div>;
  const section = data?.eafsHome?.EAFSRegisterNow;

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold text-[#0A244E] md:text-4xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {section?.heading}
          </motion.h2>
          <motion.p
            className="mb-8 text-center text-gray-700"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {section?.subHeading}
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover="hover"
          >
            <Link
              href={section?.buttonLink || "/eafs/registration"}
              className="rounded-full bg-[#F78019] px-8 py-3 font-medium text-white transition-all hover:bg-[#e67511] hover:shadow-md"
            >
              {section?.buttonText || "Register Now"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
