"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return getStrapiImageUrl(url);
};

const FeaturedNews = ({ article }: { article: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="group mb-12 overflow-hidden rounded-[2rem] bg-white shadow-2xl transition-shadow duration-500 hover:shadow-orange-100"
  >
    <Link href={`/news/${article.slug}`} className="flex flex-col lg:flex-row">
      <div className="relative aspect-video w-full overflow-hidden lg:w-3/5">
        <Image
          src={getImageUrl(article.featuredImage?.url)}
          alt={article.title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <span className="absolute left-6 top-6 rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
          Featured
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
        <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#061C3D] transition-colors group-hover:text-orange-500 md:text-3xl lg:text-4xl">
          {article.title}
        </h2>
        <p className="mb-8 line-clamp-4 text-base leading-relaxed text-gray-600 md:text-lg">
          {article.summary}
        </p>
        <span className="mt-auto flex w-fit items-center gap-2 rounded-full bg-[#061C3D] px-6 py-3 text-sm font-bold text-white transition-all group-hover:bg-orange-500">
          Read Full Story
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  </motion.div>
);

const NewsCard = ({ article, idx }: { article: any; idx: number }) => (
  <motion.article
    key={article.slug || idx}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
    className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    <Link href={`/news/${article.slug}`} className="flex h-full flex-col">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={getImageUrl(article.featuredImage?.url)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="mb-3 text-xl font-bold leading-tight text-[#061C3D] transition-colors group-hover:text-orange-500 line-clamp-2">
          {article.title}
        </h3>

        <p className="mb-6 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-600">
          {article.summary}
        </p>

        <span className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#061C3D] transition-all group-hover:gap-3 group-hover:text-orange-500">
          Read more
          <FaArrowRight className="text-sm" />
        </span>
      </div>
    </Link>
  </motion.article>
);

interface NewsClientProps {
  articles: any[];
}

export default function NewsClient({ articles = [] }: NewsClientProps) {
  const validArticles = (articles || []).filter(Boolean);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedArticles = useMemo(
    () =>
      [...validArticles].sort((a, b) => {
        const dateA = a.publicationDate ? new Date(a.publicationDate).getTime() : 0;
        const dateB = b.publicationDate ? new Date(b.publicationDate).getTime() : 0;
        return dateB - dateA;
      }),
    [validArticles],
  );

  const categoriesSet = new Set<string>();
  sortedArticles.forEach((article: any) => {
    if (article?.category?.name) categoriesSet.add(article.category.name);
  });
  const categories = ["All", ...Array.from(categoriesSet)];

  const filtered =
    selectedCategory === "All"
      ? sortedArticles
      : sortedArticles.filter(
          (n: any) => n.category && n.category.name === selectedCategory,
        );

  const displayedArticles = searchQuery.trim()
    ? filtered.filter((article: any) => {
        const q = searchQuery.toLowerCase();
        return (
          article.title?.toLowerCase().includes(q) ||
          article.summary?.toLowerCase().includes(q) ||
          article.category?.name?.toLowerCase().includes(q)
        );
      })
    : filtered;

  const featuredCandidates = sortedArticles.filter(
    (article: any) =>
      article.isFeatured ||
      article.category?.name?.toLowerCase().includes("announcement"),
  );
  const featured =
    featuredCandidates.length > 0 ? featuredCandidates[0] : sortedArticles[0];

  const gridArticles = featured
    ? displayedArticles.filter((a: any) => a.slug !== featured.slug)
    : displayedArticles;

  return (
    <section className="relative z-30 -mt-16 px-4 pb-20 md:-mt-20">
      <div className="mx-auto max-w-7xl">
        {featured && <FeaturedNews article={featured} />}

        {/* Search & filters */}
        <div className="relative mx-auto mb-8 max-w-xl">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 text-sm shadow-sm transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
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

        {/* Articles grid */}
        {gridArticles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridArticles.map((article: any, idx: number) => (
              <NewsCard key={article.slug || idx} article={article} idx={idx} />
            ))}
          </div>
        ) : !featured ? (
          <p className="text-center text-lg text-gray-500">
            No articles match your search. Try a different keyword or category.
          </p>
        ) : null}
      </div>
    </section>
  );
}
