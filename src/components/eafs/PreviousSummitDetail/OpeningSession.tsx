"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { extractYouTubeId } from "@/utils/youtube";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface OpeningSessionProps {
  summit: any;
}

const OpeningSession = ({ summit }: OpeningSessionProps) => {
  const session = summit?.openingSession || {};
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  if (!session) return null;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const title = session.title || "Opening Session";
  const description = session.description || "";
  const videoItems = session.videoItem || [];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6 text-center text-3xl font-bold text-[#253E5E] md:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={descVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mb-12 max-w-3xl text-center text-base text-gray-700 md:text-lg"
        >
          {Array.isArray(description) ? (
            <BlocksRenderer content={description} />
          ) : (
            <p>{description}</p>
          )}
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videoItems.map((video: any, i: number) => {
            const videoId = extractYouTubeId(video.youtubeURL);
            return (
              <motion.div
                key={video.youtubeURL + i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={i}
                className="flex flex-col items-center"
              >
                <div className="relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md">
                  {playingIndex === i ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={`Opening Session Video ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute left-0 top-0 h-full w-full"
                    ></iframe>
                  ) : (
                    <div
                      className="relative h-full w-full"
                      onClick={() => setPlayingIndex(i)}
                    >
                      <Image
                        src={
                          videoId
                            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                            : "/images/placeholder.png"
                        }
                        alt={`Opening Session Video ${i + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110">
                          <FaYoutube size={28} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center text-base text-gray-700 md:text-lg">
                  {video.caption}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpeningSession;
