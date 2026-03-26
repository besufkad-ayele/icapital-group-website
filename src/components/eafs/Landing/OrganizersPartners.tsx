"use client";

import Image from "next/image";
import { useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_EAFS_ORGANIZERS_PARTNERS } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { motion } from "framer-motion";

interface PartnerProps {
  name: string;
  logo: string;
  width?: number;
  index: number;
}

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
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

const PartnerLogo = ({ name, logo, width = 200, index }: PartnerProps) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      variants={logoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      <Image
        src={logo}
        alt={name}
        width={width}
        height={100}
        className="h-auto max-h-28 w-auto object-contain transition-all"
      />
    </motion.div>
  );
};

const OrganizersPartners = () => {
  const { data, loading, error } = useQuery(GET_EAFS_ORGANIZERS_PARTNERS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading organizers & partners section.</div>;
  const section = data?.eafsHome?.EAFSOrganizersPartners;
  const partners = section?.logosCard || [];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
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

        <div className="flex flex-wrap items-center justify-evenly gap-x-24 gap-y-16 px-4">
          {partners.map((partner: any, index: number) => (
            <PartnerLogo
              key={index}
              name={partner.companyName}
              logo={getStrapiImageUrl(partner.companyLogo?.url)}
              width={partner.companyLogo?.width || 200}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersPartners;
