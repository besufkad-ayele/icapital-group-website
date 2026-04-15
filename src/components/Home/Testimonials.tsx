"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tag from "@/ui/Tag";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft2, ArrowRight2, Pause, Play, Previous, Next } from "iconsax-react";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define the props interface for Testimonials component
interface TestimonialsProps {
  testimonialsData: any;
}

const Testimonials = ({ testimonialsData }: TestimonialsProps) => {
  const swiperRef = useRef<any>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

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

  // Control functions
  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isAutoplayPaused) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
      setIsAutoplayPaused(!isAutoplayPaused);
    }
  };

  const goToSlide = (direction: 'prev' | 'next') => {
    if (swiperRef.current) {
      if (direction === 'prev') {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
      // Pause autoplay when manually navigating
      if (!isAutoplayPaused) {
        swiperRef.current.autoplay.stop();
        setIsAutoplayPaused(true);
        // Resume autoplay after 10 seconds
        setTimeout(() => {
          if (swiperRef.current && isAutoplayPaused) {
            swiperRef.current.autoplay.start();
            setIsAutoplayPaused(false);
          }
        }, 10000);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-20 md:py-32">
      {/* Dynamic Background Elements */}
      <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px] animate-pulse" />
      <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] animate-pulse" />

      <div className="container relative mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-[#061C3D] md:text-5xl lg:text-6xl"
            >
              {heading}
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSlide('prev')}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-gray-200 bg-white/80 text-[#061C3D] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:shadow-xl"
              title="Previous testimonial"
            >
              <Previous 
                size={24} 
                variant="Bold" 
                className="transition-transform duration-300 group-hover:scale-110" 
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAutoplay}
              className={`group flex h-14 w-14 items-center justify-center rounded-2xl border-2 shadow-lg backdrop-blur-sm transition-all duration-300 ${
                isAutoplayPaused 
                  ? 'border-[#FF6B00] bg-[#FF6B00] text-white hover:bg-[#FF8C33] hover:shadow-xl hover:scale-105' 
                  : 'border-gray-200 bg-white/80 text-[#061C3D] hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:shadow-xl'
              }`}
              title={isAutoplayPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isAutoplayPaused ? (
                <Play 
                  size={22} 
                  variant="Bold" 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              ) : (
                <Pause 
                  size={22} 
                  variant="Bold" 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSlide('next')}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-gray-200 bg-white/80 text-[#061C3D] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:shadow-xl"
              title="Next testimonial"
            >
              <Next 
                size={24} 
                variant="Bold" 
                className="transition-transform duration-300 group-hover:scale-110" 
              />
            </motion.button>
          </div>
        </div>

        <div className="relative group/swiper">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={testimonials.length > 2}
            speed={800} // Faster transition
            autoplay={{
              delay: 3000, // Faster auto-scroll - 3 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true, // Wait for transition to complete before next slide
              stopOnLastSlide: false, // Continue looping
            }}
            allowTouchMove={true} // Enable touch/swipe on mobile
            simulateTouch={true} // Simulate touch on desktop
            keyboard={{
              enabled: true, // Enable keyboard navigation
              onlyInViewport: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial: any, index: number) => {
              const imageUrl = testimonial.image?.url?.startsWith("http")
                ? testimonial.image.url
                : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") + (testimonial.image?.url || "");

              return (
                <SwiperSlide key={index} className="h-auto">
                  <motion.div
                    className="group relative flex h-full flex-col rounded-[3rem] bg-white p-10 border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-orange-200 hover:shadow-[0_30px_60px_-12px_rgba(247,128,25,0.12)]"
                  >
                    {/* Floating Quote Icon */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 opacity-60 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:opacity-100">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <p className="mb-10 flex-1 text-xl leading-relaxed text-gray-700 font-medium line-clamp-6">
                      "{testimonial.testimonialText}"
                    </p>

                    <div className="flex items-center gap-5 pt-8 border-t border-gray-100">
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl shadow-lg ring-4 ring-orange-50/50">
                        {testimonial.image?.url ? (
                          <Image
                            src={imageUrl}
                            alt={testimonial.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 font-bold text-xl">
                            {testimonial.name?.[0]}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#061C3D] group-hover:text-orange-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
