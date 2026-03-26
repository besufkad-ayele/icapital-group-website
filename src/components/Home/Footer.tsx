"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import IcapitalLogo from "@/assets/icapital-logo-img.png";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

interface QuickLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: <FaLinkedin size={18} />, href: "#" },
  { icon: <FaFacebook size={18} />, href: "#" },
  { icon: <FaTwitter size={18} />, href: "#" },
  { icon: <FaInstagram size={18} />, href: "#" },
  { icon: <FaTelegram size={18} />, href: "#" },
];

const quickLinks: QuickLink[] = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#061C3D] px-6 py-20 text-white md:px-12 lg:py-24">
      {/* Subtle Glow Element */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-orange-500/5 blur-[80px]" />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={IcapitalLogo}
                alt="iCapital Logo"
                width={140}
                height={70}
                className="brightness-0 invert object-contain transition-transform hover:scale-105"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-blue-100/60">
              To become a Go-to Partner for HR and Development partnership solutions in East Africa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)]"
                >
                  <span className="transition-transform group-hover:scale-110">{link.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8 text-xl font-bold tracking-tight">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-blue-100/60 transition-colors hover:text-white"
                  >
                    <span className="mr-0 h-[1px] w-0 bg-orange-500 transition-all duration-300 group-hover:mr-3 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expert Column */}
          <div>
            <h3 className="mb-8 text-xl font-bold tracking-tight">Expertise</h3>
            <ul className="space-y-4 text-blue-100/60 font-medium">
              {["Corporate Training", "HR Solutions", "Strategic Advisory", "Digital Transformation"].map((item) => (
                <li key={item} className="cursor-default hover:text-white transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-blue-100/60 hover:text-white transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <MdPhone className="text-xl text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/40">Phone</span>
                  <span className="font-bold">+251 1108080</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-blue-100/60 hover:text-white transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <MdEmail className="text-xl text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/40">Email</span>
                  <span className="font-bold break-all">contact@icapitalafrica.org</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <p className="text-sm font-medium text-blue-100/40">
              &copy; {new Date().getFullYear()} iCapital Africa Institute. All rights reserved.
            </p>
            <p className="text-xs text-blue-100/20">
              Excellence in Human Resource and Development partnership.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-blue-100/40">
              Powered by <span className="text-white">Frontier Technologies</span>
            </p>
            <button
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30"
              aria-label="Scroll to Top"
            >
              <IoIosArrowUp className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
