"use client";

import { useEffect } from "react";
import ErrorUI from "@/components/Common/ErrorUI";
import { motion } from "framer-motion";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error for observability
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="relative">
      <ErrorUI
        errorCode="500"
        title="Internal Error"
        description="Something went wrong on our end. We've been notified and are working hard to fix it. Please try reloading the page."
        imageSrc="/error/error-3d.png"
      />
      
      {/* Reset Button Overlay for Error Recovery */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-32 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-4 text-center lg:left-[calc(50%+150px)] lg:transform-none lg:items-start"
      >
        <button
          onClick={() => reset()}
          className="group flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-6 py-3 font-semibold text-orange-400 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white"
        >
          <svg
            className="h-5 w-5 animate-spin-slow group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
