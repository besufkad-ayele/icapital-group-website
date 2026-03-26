"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tag from "@/ui/Tag";

// Define the props interface for Testimonials component
interface TestimonialsProps {
  testimonialsData: any;
}

const Testimonials = ({ testimonialsData }: TestimonialsProps) => {
  // Handle case where testimonialsData is not available
  if (!testimonialsData?.home?.testimonialsSection) {
    return (
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-red-50 p-12 text-center text-red-500 border border-red-100">
          Testimonials data not available
        </div>
      </section>
    );
  }

  const section = testimonialsData.home.testimonialsSection;
  const tagTitle = section.tagTitle || "Testimonials";
  const heading = section.heading || "What Our Partners Say about Us";
  const testimonials = section.testimonials || [];
  // Duplicate testimonials for seamless infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-orange-500/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mb-16 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Tag
            title={tagTitle}
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-[#061C3D] md:text-5xl"
        >
          {heading}
        </motion.h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial: any, index: number) => {
            const imageUrl = testimonial.image?.url?.startsWith("http")
              ? testimonial.image.url
              : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") + (testimonial.image?.url || "");

            return (
              <div
                key={index}
                className="group relative flex w-[350px] flex-shrink-0 flex-col rounded-[2.5rem] bg-white p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-orange-100 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] md:w-[450px]"
              >
                {/* Quote Icon */}
                <div className="mb-6 h-10 w-10 text-orange-400 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-600 italic">
                  "{testimonial.testimonialText}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl shadow-inner">
                    {testimonial.image?.url ? (
                      <Image
                        src={imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                        {testimonial.name?.[0]}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#061C3D]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-medium text-orange-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
