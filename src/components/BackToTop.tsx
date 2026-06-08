"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -10, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }
          }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "#f97316", // orange-500 to orange-600 equivalent
            boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 left-10 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061C3D] text-white shadow-[0_20px_50px_rgba(6,28,61,0.3)] backdrop-blur-md transition-colors focus:outline-none"
          aria-label="Back to top"
        >
          <div className="relative flex flex-col items-center">
            <FaArrowUp className="text-xl mb-0.5" />
            <span className="text-[8px] font-black uppercase tracking-tighter">Top</span>
          </div>
          
          {/* Animated rings */}
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border-2 border-orange-500"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
