"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { extractYouTubeId } from "@/utils/youtube";
import { BlocksRenderer } from "@/lib/blocks-renderer";

interface RecapRewindProps {
  summit: any;
}

const RecapRewind = ({ summit }: RecapRewindProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const videoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Get recapRewind fields from summit
  const recap = summit?.recapRewind || {};
  const recapTitle = recap.recapTitle || "Recap Rewind";
  const recapDescription =
    recap.recapDescription ||
    "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.";
  const videoId = extractYouTubeId(recap.youtubeURL || "");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row md:items-stretch md:gap-16 md:px-12 lg:px-24">
        {/* Video */}
        <motion.div
          ref={ref}
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full max-w-xl flex-shrink-0 md:w-1/2"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            {showVideo && videoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Recap Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              ></iframe>
            ) : (
              <div
                className="relative h-full w-full cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src={
                    videoId
                      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                      : "/images/placeholder.png"
                  }
                  alt="Recap Video Thumbnail"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110">
                    <FaYoutube size={36} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        {/* Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex w-full flex-col justify-center md:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#253E5E] md:text-4xl">
            {recapTitle}
          </h2>
          {Array.isArray(recapDescription) ? (
            <BlocksRenderer content={recapDescription} />
          ) : (
            <p className="text-base text-gray-700 md:text-lg">
              {recapDescription}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RecapRewind;
