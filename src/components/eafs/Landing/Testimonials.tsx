"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { FiUser } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_SUMMIT_TESTIMONIAL } from "@/graphql/eafs/eafsHome";
import { BlocksRenderer } from "@/lib/blocks-renderer";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";

interface TestimonialProps {
  quote: any; // blocks
  name: string;
  summit: string;
  imageUrl?: string | null;
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

const TestimonialCard = ({
  quote,
  name,
  summit,
  imageUrl,
  index,
}: TestimonialProps) => {
  return (
    <motion.div
      className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
      style={{ boxShadow: "0px 3.11px 77.76px 0px rgba(0, 0, 0, 0.03)" }}
        variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      <div className="mb-6 flex-grow text-gray-700">
        <BlocksRenderer content={quote} />
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={40}
              height={40}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <FiUser size={20} className="text-gray-500" />
          )}
        </div>
        <div>
          <h4 className="font-bold text-[#0A244E]">{name}</h4>
          <p className="text-sm text-gray-600">{summit} Summit Attendant</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const { data, loading, error } = useQuery(GET_EAFS_SUMMIT_TESTIMONIAL);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading testimonials section.</div>;
  const section = data?.eafsHome?.EAFSSummitTestimonial;
  const testimonials = section?.summitTestimonialCard || [];

  return (
    <section className="bg-gray-50 py-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {section?.heading}
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial: any, index: number) => (
            <TestimonialCard
              key={index}
              quote={testimonial.testimonialQuote}
              name={testimonial.attendeeName}
              summit={testimonial.summitNumber}
              imageUrl={
                testimonial.avatar?.url
                  ? getStrapiImageUrl(testimonial.avatar.url)
                  : null
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
