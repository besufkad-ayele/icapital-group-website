"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { extractYouTubeId } from "@/utils/youtube";

interface Testimonial {
  media?: {
    url: string;
    width: number;
    height: number;
  };
  videioUrl?: string;
  caption?: string;
  isVideo: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="bg-white px-6 py-16 text-center">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#061C3D] md:text-4xl">
            Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 md:text-lg">
            See how each project made an impact through stories, snapshots, and
            shared moments.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => {
            // Determine what to display - check if videioUrl exists OR isVideo is explicitly true
            const isVideoTestimonial =
              (testimonial.isVideo === true || testimonial.videioUrl) &&
              testimonial.videioUrl;
            const hasMedia = testimonial.media?.url;
            const videoId = isVideoTestimonial
              ? extractYouTubeId(testimonial.videioUrl!)
              : null;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {isVideoTestimonial ? (
                  // Video Testimonial
                  <div
                    onClick={() => setSelectedVideo(testimonial.videioUrl!)}
                    className="relative aspect-video cursor-pointer"
                  >
                    {/* YouTube Thumbnail */}
                    <Image
                      src={
                        hasMedia
                          ? getStrapiImageUrl(testimonial.media!.url)
                          : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                      }
                      alt={testimonial.caption || "Video testimonial"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      unoptimized
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/40">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay className="ml-1 text-2xl text-white" />
                      </div>
                    </div>
                    {testimonial.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-sm text-white">
                          {testimonial.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ) : hasMedia ? (
                  // Image Testimonial
                  <div className="relative aspect-video">
                    <Image
                      src={getStrapiImageUrl(testimonial.media!.url)}
                      alt={testimonial.caption || "Testimonial"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      unoptimized
                    />
                    {testimonial.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-sm text-white">
                          {testimonial.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Fallback if no media or video
                  <div className="relative flex aspect-video items-center justify-center bg-gray-200">
                    <p className="text-gray-500">No media available</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition hover:bg-gray-100"
              >
                ✕
              </button>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(selectedVideo)}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
