"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaYoutube, FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { extractYouTubeId } from "@/utils/youtube";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface OpeningRemarkProps {
  summit: any;
}

const OpeningRemark = ({ summit }: OpeningRemarkProps) => {
  const remark = summit?.openingRemark || {};
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  if (!remark) return null;

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const videoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const remarkTitle = remark.remarkTitle || "Opening Remark";
  const remarkDescription =
    remark.remarkDescription || "No description available.";
  const speaker = remark.speaker || remark.speakerName || "";
  const speakerRole = remark.speakerRole || "";
  const youtubeURL = remark.youtubeURL || "";
  const videoId = extractYouTubeId(youtubeURL);
  const downloadFile = remark.downloadFile?.url || remark.downloadUrl || "";
  const downloadFileName = remark.downloadFile?.name || "Download full speech";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-6 md:flex-row md:items-stretch md:gap-16 md:px-12 lg:px-24">
        {/* Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex w-full flex-col justify-center md:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#253E5E] md:text-4xl">
            {remarkTitle}
          </h2>
          {Array.isArray(remarkDescription) ? (
            <div className="mb-6 text-base italic text-gray-700 md:text-lg">
              <BlocksRenderer content={remarkDescription} />
            </div>
          ) : (
            <p className="mb-6 text-base italic text-gray-700 md:text-lg">
              “{remarkDescription}”
            </p>
          )}
          {speaker && (
            <div className="mb-2 text-lg font-bold text-[#0A244E]">
              {speaker}
            </div>
          )}
          {speakerRole && (
            <div className="mb-6 text-base text-gray-600">{speakerRole}</div>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {downloadFile && (
              <Link
                href={downloadFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-[#F78019] bg-white px-6 py-2 font-semibold text-[#F78019] transition-all hover:bg-[#F78019]/10 hover:shadow-md"
                download
              >
                <FaDownload className="text-[#F78019]" />
                {downloadFileName}
              </Link>
            )}
            {videoId && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center justify-center gap-2 rounded-full border border-[#F78019] bg-[#F78019] px-6 py-2 font-semibold text-white transition-all hover:bg-[#e67511] hover:shadow-md"
              >
                Watch video <FaYoutube className="text-white" />
              </button>
            )}
          </div>
        </motion.div>
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
                title="Opening Remark Video"
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
                  alt="Opening Remark Video Thumbnail"
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
      </div>
    </section>
  );
};

export default OpeningRemark;
