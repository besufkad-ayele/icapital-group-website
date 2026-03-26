"use client";

import Image from "next/image";
import NetworkingIcon from "@/assets/eafs/why-to-attend/blockchain-04.png";
import InsightsIcon from "@/assets/eafs/why-to-attend/idea-01.png";
import CollaborationIcon from "@/assets/eafs/why-to-attend/agreement-02.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_WHY_TO_ATTEND } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";

const WhyAttend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const { data, loading, error } = useQuery(GET_EAFS_WHY_TO_ATTEND);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading why attend section.</div>;
  }

  const section = data?.eafsHome?.EAFSWhyToAttend;
  const reasons = section?.reasonCard || [];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-gray-50 py-12 ">
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

        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center text-[#F78019]">
                <Image
                  src={getStrapiImageUrl(reason.icon?.url)}
                  alt={reason.title}
                  width={reason.icon?.width || 64}
                  height={reason.icon?.height || 64}
                  className="object-contain"
                  priority={index === 1}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A244E]">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
