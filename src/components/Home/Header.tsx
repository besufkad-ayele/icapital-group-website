"use client";

import Image from "next/image";
import IcapitalLogo from "@/assets/i-logo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
  iconColor?: string; // Optional prop for icon color (e.g., "text-black", "text-red-500")
};

const Header = ({ iconColor = "text-white" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const mainLinks = [
    { name: "Group Sectors", href: "/#sectors" },
    { name: "About Group", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "News and Updates", href: "/news" },
    { name: "Our Journey", href: "/#journey" },
    { name: "Portfolio", href: "/#portfolio" },
  ];
  const contactLink = { name: "Contact Us", href: "/#contact" };

  // Framer Motion variants for nav links
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" },
    }),
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-[100] w-full transition-all duration-500 px-6 py-4 md:px-12",
        scrolled 
          ? "bg-[#061C3D]/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5" 
          : "bg-transparent py-6"
      )}
    >
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="relative h-14 w-40 flex-shrink-0">
          <Link href="/">
            <Image
              src={IcapitalLogo}
              alt="Capital Institute Logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
        {/* Centered Nav Links with animation */}
        <nav
          className={twMerge(
            "hidden flex-1 items-center justify-center space-x-10 text-[15px] font-bold tracking-tight md:flex transition-colors duration-300",
            iconColor
          )}
        >
          {mainLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <Link
                href={link.href}
                className="group relative px-2 py-1 transition-colors duration-300 hover:text-orange-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>
        {/* Contact Us - right aligned with animation */}
        <div className="hidden flex-shrink-0 items-center justify-end md:flex">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={pulseAnimation}
            >
                <Link
                  href={contactLink.href}
                  className="ml-6 rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-3 text-sm font-black tracking-widest uppercase text-white shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105"
                >
                  {contactLink.name}
                </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Mobile menu button */}
        <button
          className="ml-auto p-2 text-white hover:bg-white/10 rounded-xl transition-colors md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col md:hidden"
          >
            {/* Dark blur overlay */}
            <div className="absolute inset-0 bg-[#061C3D]/95 backdrop-blur-2xl" />
            
            <div className="relative flex h-full flex-col p-6">
              <div className="flex items-center justify-between mb-12">
                <div className="relative h-12 w-40">
                  <Image
                    src={IcapitalLogo}
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="brightness-0 invert"
                  />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-3xl font-black tracking-tighter text-white hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pb-12"
              >
                <Link
                  href={contactLink.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-2xl bg-orange-500 py-5 text-center text-xl font-black text-white shadow-2xl shadow-orange-500/30"
                >
                  {contactLink.name}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
