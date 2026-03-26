"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EAFSLogo from "@/assets/eafs/EAFS-black-Logo.png";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/eafs/previous-summit", label: "Previous Summits" },
  { href: "/eafs/upcoming-summits", label: "Upcoming Summits" },
  { href: "/eafs/summit-documents", label: "Summit Documents" },
];

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-0 z-50 w-full bg-[rgba(37,62,94,0.7)] backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/eafs" className="flex items-center">
          <Image
            src={EAFSLogo}
            alt="East African Finance Summit Logo"
            width={120}
            height={60}
            className="h-auto w-auto"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white transition-colors duration-200 hover:text-[#F78019]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Desktop Contact Us Button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#F78019] px-6 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#e67511] md:block"
        >
          Contact Us
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-[#F78019] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
          ></span>
          <span
            className={`my-1 block h-0.5 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          ></span>
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed right-0 top-0 z-50 flex h-full w-4/5 max-w-xs flex-col bg-[rgba(37,62,94,0.97)] shadow-xl backdrop-blur-lg md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <Link
                  href="/eafs"
                  className="flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image src={EAFSLogo} alt="Logo" width={100} height={50} />
                </Link>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="absolute block h-0.5 w-6 rotate-45 rounded bg-white"></span>
                  <span className="block h-0.5 w-6 -rotate-45 rounded bg-white"></span>
                </button>
              </div>
              <nav className="flex flex-col gap-6 px-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white transition-colors duration-200 hover:text-[#F78019]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 rounded-full bg-[#F78019] px-6 py-2 text-center font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#e67511]"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
