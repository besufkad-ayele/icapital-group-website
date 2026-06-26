"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";

import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag, FaSearch } from "react-icons/fa";

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return getStrapiImageUrl(url);
};

// Helper to calculate reading time
const getReadingTime = (content: any) => {
  const text = typeof content === 'string' ? content : JSON.stringify(content);
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
};

const FeaturedNews = ({ article }: { article: any }) => {
  const readingTime = getReadingTime(article.content);
  
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-2xl transition-all duration-500 hover:shadow-orange-100"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative w-full aspect-video lg:w-3/5 overflow-hidden">
            <Image
              src={getImageUrl(article.featuredImage?.url)}
              alt={article.title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105 bg-gray-100"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden" />
            
            {/* Floating Category Tag */}
            {article.category?.name && (
              <div className="absolute left-6 top-6 z-10">
                <span className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
                  <FaTag className="text-[10px]" />
                  {article.category.name}
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="relative flex flex-1 flex-col justify-center bg-white p-8 lg:p-12">
            {/* Meta Info */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-orange-500" />
                {article.publicationDate ? new Date(article.publicationDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-2">
                <FaClock className="text-orange-500" />
                {readingTime} min read
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#061C3D] md:text-4xl lg:text-5xl transition-colors group-hover:text-orange-500">
              {article.title}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-600 line-clamp-4">
              {article.summary}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-8">
              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-orange-50">
                  {article.author?.avatar?.url ? (
                    <Image 
                      src={getImageUrl(article.author.avatar.url)} 
                      alt={article.author.name} 
                      fill 
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-orange-500 font-bold">
                      {article.author?.name?.charAt(0) || "I"}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Written by</span>
                  <span className="text-sm font-bold text-[#061C3D]">{article.author?.name || "i-Capital"}</span>
                </div>
              </div>

              <Link
                href={`/news/${article.slug}`}
                className="group/btn flex items-center gap-3 rounded-full bg-[#061C3D] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-500 hover:shadow-lg active:scale-95"
              >
                Read Full Story
                <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const NewsGrid = ({ articles }: { articles: any[] }) => (
  <section className="mx-auto mt-16 max-w-7xl px-4">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: any, idx: number) => {
        const readingTime = getReadingTime(article.content);
        return (
          <motion.div
            key={article.slug || idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={getImageUrl(article.featuredImage?.url)}
                alt={article.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-110 bg-gray-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Glassmorphism Category Badge */}
              {article.category?.name && (
                <div className="absolute left-4 top-4 z-10">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md border border-white/30">
                    {article.category.name}
                  </span>
                </div>
              )}

              {/* Date Overlay (Improved) */}
              {article.publicationDate && (
                <div className="absolute right-4 top-4 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 px-3 py-2 text-center shadow-xl backdrop-blur-sm">
                  <span className="text-xl font-black leading-none text-orange-500">
                    {new Date(article.publicationDate).getDate()}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-gray-500">
                    {new Date(article.publicationDate).toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-8">
              {/* Meta Info */}
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-orange-500" />
                  {readingTime} min read
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1.5">
                  <FaUser className="text-orange-500" />
                  {article.author?.name?.split(' ')[0] || "i-Capital"}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight text-[#061C3D] transition-colors group-hover:text-orange-500 line-clamp-2">
                {article.title}
              </h3>

              <p className="mb-8 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
                {article.summary}
              </p>

              <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                <Link
                  href={`/news/${article.slug}`}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#061C3D] transition-all hover:gap-3 hover:text-orange-500"
                >
                  Explore Details
                  <FaArrowRight className="text-sm" />
                </Link>
                
                {/* Small indicator */}
                <div className="h-2 w-2 rounded-full bg-orange-100 group-hover:bg-orange-500 transition-colors" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

interface NewsClientProps {
  articles: any[];
}

export default function NewsClient({ articles = [] }: NewsClientProps) {
  // Filter out any potential null/undefined articles
  const validArticles = (articles || []).filter(Boolean);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamically generate categories from articles
  const categoriesSet = new Set<string>();
  validArticles.forEach((article: any) => {
    if (article && article.category && article.category.name) {
      categoriesSet.add(article.category.name);
    }
  });
  const categories = ["All", ...Array.from(categoriesSet)];

  // Filter articles based on selected category and search
  const filtered =
    selectedCategory === "All"
      ? validArticles
      : validArticles.filter(
          (n: any) => n.category && n.category.name === selectedCategory,
        );

  const searched = searchQuery.trim()
    ? filtered.filter((article: any) => {
        const q = searchQuery.toLowerCase();
        return (
          article.title?.toLowerCase().includes(q) ||
          article.summary?.toLowerCase().includes(q) ||
          article.category?.name?.toLowerCase().includes(q) ||
          article.author?.name?.toLowerCase().includes(q)
        );
      })
    : filtered;

  // Featured article logic: Latest article that is either:
  // 1. Marked as isFeatured, OR
  // 2. Has category "Announcements" or "Announcement"
  // If multiple match, show the latest one
  const featuredCandidates = searched.filter(
    (article: any) =>
      article.isFeatured ||
      article.category?.name?.toLowerCase().includes("announcement"),
  );
  const featured =
    featuredCandidates.length > 0 ? featuredCandidates[0] : searched[0];

  // Exclude featured from grid to avoid duplication
  const gridArticles = featured
    ? searched.filter((a: any) => a.slug !== featured.slug)
    : searched;

  const latestDate = validArticles.reduce((latest: string | null, article: any) => {
    if (!article.publicationDate) return latest;
    if (!latest || new Date(article.publicationDate) > new Date(latest)) {
      return article.publicationDate;
    }
    return latest;
  }, null);

  return (
    <>
      {/* Overview Section */}
      <section className="mx-auto -mt-8 max-w-7xl px-4 md:-mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-[#061C3D] md:text-3xl">
                Your Source for Institutional News
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                The i-Capital Africa Institute news hub brings together research
                publications, partnership announcements, event highlights, and
                sector analysis — all in one place. Whether you follow financial
                inclusion, public-sector reform, or development finance, our
                updates keep you connected to what matters.
              </p>
              <p className="leading-relaxed text-gray-500">
                Browse by category, search by keyword, or dive into our featured
                story for the latest headline from across the institute.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-orange-50 p-6">
                <div className="mb-1 text-3xl font-black text-orange-500">
                  {validArticles.length}
                </div>
                <div className="text-sm font-semibold text-[#061C3D]">
                  Total Articles
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Research, announcements, and stories
                </p>
              </div>
              <div className="rounded-2xl bg-[#061C3D]/5 p-6">
                <div className="mb-1 text-3xl font-black text-[#061C3D]">
                  {categoriesSet.size}
                </div>
                <div className="text-sm font-semibold text-[#061C3D]">
                  Categories
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Filter by topic area
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 sm:col-span-2">
                <div className="text-sm font-semibold text-[#061C3D]">
                  Most Recent Update
                </div>
                <p className="mt-1 text-lg font-bold text-orange-500">
                  {latestDate
                    ? new Date(latestDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Coming soon"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {featured && <FeaturedNews article={featured} />}

      {/* Search & Category Filters */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#061C3D] md:text-3xl">
            Browse All Articles
          </h2>
          <p className="mt-2 text-gray-500">
            {searched.length} article{searched.length !== 1 ? "s" : ""} found
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mx-auto mb-8 max-w-xl">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles by title, topic, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 text-sm shadow-sm transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md hover:bg-orange-600"
                  : "bg-white text-gray-700 shadow-sm hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      {gridArticles.length > 0 ? (
        <div className="mb-20">
          <NewsGrid articles={gridArticles} />
        </div>
      ) : (
        <div className="mx-auto mb-20 max-w-7xl px-4 text-center">
          <p className="text-lg text-gray-500">
            No articles match your search. Try a different keyword or category.
          </p>
        </div>
      )}
    </>
  );
}
