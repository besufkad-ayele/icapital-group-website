"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_EAFS_PREVIOUS_SPEECHES } from "@/graphql/eafs/eafsHome";
import { extractYouTubeId } from "@/utils/youtube";

interface SpeechProps {
  name: string;
  role: string;
  videoId: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const SpeechCard = ({
  name,
  role,
  videoId,
  index,
  summitNumber,
}: SpeechProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <motion.div
      className="flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg shadow-md">
        {showVideo ? (
          <iframe
            width="100%"
            height="194"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${name} Speech`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video"
          ></iframe>
        ) : (
          <div className="relative cursor-pointer" onClick={handlePlayClick}>
            {!imageError ? (
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`${name} Speech`}
                width={500}
                height={281}
                className="aspect-video h-auto w-full object-cover"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-gray-200">
                <FaYoutube size={48} className="text-gray-400" />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110">
                <FaYoutube size={28} />
              </div>
            </div>
          </div>
        )}
      </div>
      <h3 className="mb-1 text-xl font-bold text-[#0A244E]">
        {role} {name}
      </h3>
      <p className="text-sm text-gray-600">Speech from {summitNumber} Summit</p>
    </motion.div>
  );
};

const PreviousSpeeches = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const { data, loading, error } = useQuery(GET_EAFS_PREVIOUS_SPEECHES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading previous speeches section.</div>;
  }

  const section = data?.eafsHome?.EAFSPreviousSpeeches;
  const speeches = section?.previousSpeechesVideo || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {section?.heading}
          {section?.subHeading && (
            <>
              <br />
              {section.subHeading}
            </>
          )}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speeches.map((speech: any, index: number) => {
            const videoId = extractYouTubeId(speech.youtubeUrl);
            return (
              <SpeechCard
                key={index}
                name={speech.speakerName}
                role={speech.role}
                videoId={videoId}
                index={index}
                summitNumber={speech.summitNumber}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreviousSpeeches;
