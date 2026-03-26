"use client";

import Image from "next/image";
import JourneyImg from "@/assets/journey-img.jpeg";
import Step1 from "@/assets/step1.png";
import Step2 from "@/assets/step2.png";
import Step3 from "@/assets/step3.png";
import Step4 from "@/assets/step4.png";
import Tag from "@/ui/Tag";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const staticIcons = [Step1, Step2, Step3, Step4];

// Define the props interface for Journey component
interface JourneyProps {
  journeyData: any;
}

const Journey = ({ journeyData }: JourneyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Line drawing animation
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      }
    );

    // Milestones reveal
    milestonesRef.current.forEach((milestone, index) => {
      if (milestone) {
        gsap.fromTo(
          milestone,
          { opacity: 0, x: 50, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: milestone,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [journeyData]);

  // Handle case where journeyData is not available
  if (!journeyData?.home?.journeySection) {
    return (
      <section className="flex flex-col items-center px-6 py-16">
        <div className="text-center text-red-500">
          Journey data not available
        </div>
      </section>
    );
  }

  const journey = journeyData.home.journeySection;
  const tagTitle = journey.tagTitle || "Our Journey";
  const heading = journey.heading || "Moving Through Years with Success";
  const image = journey.image?.url
    ? journey.image.url.startsWith("http")
      ? journey.image.url
      : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") +
        journey.image.url
    : JourneyImg;
  const milestones = journey.milestones || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="flex flex-col items-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
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
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-3xl font-bold text-gray-900"
        >
          {heading}
        </motion.h2>
      </motion.div>

      {/* Content Wrapper */}
      <motion.div
        ref={containerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 flex w-full max-w-7xl flex-col items-center gap-16 md:flex-row md:items-start md:gap-24"
      >
        {/* Image - Styled for more depth */}
        <motion.div
          variants={imageVariants}
          className="relative w-full md:w-[45%]"
        >
          <div className="absolute -inset-4 rounded-[4rem] border-2 border-orange-100/50 blur-sm" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:aspect-[3/4]">
            <Image
              src={image}
              alt="Our Journey"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* Floating decorative elements for depth */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-3xl bg-orange-500/10 blur-2xl" />
        </motion.div>

        {/* Timeline Content */}
        <div className="relative flex w-full flex-col gap-12 md:w-[55%] pt-10">
          {/* Background Line (Static) */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-100 md:left-10" />
          
          {/* Animated Line (GSAP) */}
          <div 
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 origin-top md:left-10"
          />

          {milestones.map((milestone: any, index: number) => {
            const size = 60; // Consistent, larger icon container
            return (
              <div
                key={index}
                ref={(el) => {
                  milestonesRef.current[index] = el;
                }}
                className="relative flex items-center pl-16 md:pl-24"
              >
                {/* Timeline Marker */}
                <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl md:h-20 md:w-20 md:rounded-[2rem] border border-gray-50">
                  <div className="relative h-6 w-6 md:h-10 md:w-10">
                    <Image
                      src={staticIcons[index % staticIcons.length]}
                      alt={milestone.year}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Milestone Detail Card */}
                <div className="group relative rounded-3xl bg-white p-6 shadow-lg border border-gray-50 transition-all duration-300 hover:shadow-2xl hover:border-orange-100 md:p-8">
                  <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                    {milestone.year}
                  </span>
                  {/* <h3 className="mt-2 text-2xl font-extrabold text-[#061C3D]">
                    {milestone.text.split(':')[0]}
                  </h3> */}
                  <p className="mt-3 text-lg leading-relaxed text-gray-500">
                    {milestone.text.includes(':') ? milestone.text.split(':')[1] : milestone.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;
