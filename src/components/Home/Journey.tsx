"use client";

import Image from "next/image";
import Tag from "@/ui/Tag";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const staticImages = [
  "/images/opengraph-image.png", 
  "/images/opengraph-image.png", 
  "/images/opengraph-image.png", 
];

interface JourneyProps {
  journeyData: any;
}

const Journey = ({ journeyData }: JourneyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Progress tracking for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!journeyData?.home?.journeySection) return null;

  const journey = journeyData.home.journeySection;
  const milestones = journey.milestones || [];

  return (
    <section ref={containerRef} className="relative bg-white px-6 py-24 lg:py-40 overflow-hidden">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-orange-50/50 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-[120px]" />
      </div>

      {/* --- HEADER --- */}
      <div className="mb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Tag title={journey.tagTitle} titleColor="text-[#F78019]" bgColor="bg-[#F7801915]" />
          <h2 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-[#061C3D] md:text-7xl">
            {journey.heading}
          </h2>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* --- CENTRAL LINE SYSTEM --- */}
        {/* Static Track */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-slate-100 md:left-1/2 md:-translate-x-1/2" />
        
        {/* Animated Glowing Progress Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-6 top-0 z-10 h-full w-[3px] origin-top bg-gradient-to-b from-orange-400 via-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)] md:left-1/2 md:-translate-x-1/2"
        />

        {/* --- MILESTONES --- */}
        <div className="flex flex-col gap-32 md:gap-56">
          {milestones.map((milestone: any, index: number) => {
            const isEven = index % 2 === 0;
            const displayImage = staticImages[index % staticImages.length];

            return (
              <div key={index} className="relative flex flex-col items-center md:flex-row">
                
                {/* Marker Node (Central Hub) */}
                <div className="absolute left-6 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#061C3D] shadow-xl md:left-1/2 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-125">
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                </div>

                {/* Grid Wrapper */}
                <div className={`flex w-full flex-col md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* IMAGE SIDE: Opens to the outside */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -120 : 120, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: isEven ? -120 : 120, filter: "blur(15px)" }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full pl-16 md:w-1/2 md:px-12 lg:px-20"
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-black/5">
                      <Image
                        src={displayImage}
                        alt={`Journey ${milestone.year}`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061C3D]/60 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Step Number */}
                      <div className="absolute bottom-8 left-8 text-6xl font-black text-white/20">
                        0{index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* SPACER (Occupied by the line) */}
                  <div className="hidden md:block md:w-0" />

                  {/* TEXT CARD SIDE: Opens to the opposite outside */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 120 : -120, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: isEven ? 120 : -120, filter: "blur(15px)" }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 w-full pl-16 md:mt-0 md:w-1/2 md:px-12 lg:px-20"
                  >
                    <div className="group relative flex h-full flex-col justify-between rounded-[3rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:border-orange-100 lg:p-14">
                      {/* Animated accent bar */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-1/2 rounded-b-full" />
                      
                      {/* Top content - Justified text */}
                      <div className="flex-1">
                          {/* Bottom content - Strategic Milestone */}
                      <h3 className="mt-6 text-3xl font-black text-[#061C3D] lg:text-4xl leading-tight">
                        {milestone.year.includes(':') ? milestone.year : "Strategic Milestone"}
                      </h3>
                        
                        <p className="mt-6 text-lg leading-relaxed text-slate-500 lg:text-xl text-justify   ">
                          {milestone.text.includes(':') ? milestone.text.split(':')[1] : milestone.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;