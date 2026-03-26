"use client";

import Image from "next/image";
import BankIcon from "@/assets/eafs/who-attends/bank.png";
import BriefcaseIcon from "@/assets/eafs/who-attends/briefcase.png";
import RocketIcon from "@/assets/eafs/who-attends/rocket.png";
import MortarboardIcon from "@/assets/eafs/who-attends/mortarboard.png";
import EarthIcon from "@/assets/eafs/who-attends/earth.png";
import BuildingIcon from "@/assets/eafs/who-attends/building.png";
import LaptopIcon from "@/assets/eafs/who-attends/laptop.png";
import CityIcon from "@/assets/eafs/who-attends/city.png";
import { useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_EAFS_WHO_ATTENDS } from "@/graphql/eafs/eafsHome";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { motion } from "framer-motion";

interface AttendeeCardProps {
  icon: any;
  title: string;
  iconColor: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AttendeeCard = ({
  icon,
  title,
  iconColor,
  index,
}: AttendeeCardProps & { index: number }) => {
  return (
    <motion.div
      className="flex flex-col items-start rounded-xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
      style={{ boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.10)" }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center text-${iconColor}`}
      >
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="mb-3 text-left text-xl font-bold text-[#0A244E]">
        {title}
      </h3>
    </motion.div>
  );
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const subheadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhoAttends = () => {
  const ref = useRef(null);

  const { data, loading, error } = useQuery(GET_EAFS_WHO_ATTENDS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading who attends section.</div>;
  }

  const section = data?.eafsHome?.EAFSWhoAttends;
  const attendees = section?.whoAttendsCard || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="mb-6 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {section?.heading}
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-gray-700"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {section?.subHeading}
        </motion.p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attendees.map((attendee: any, index: number) => (
            <AttendeeCard
              key={index}
              icon={getStrapiImageUrl(attendee.icon?.url)}
              title={attendee.Name}
              iconColor="cyan-500"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAttends;
