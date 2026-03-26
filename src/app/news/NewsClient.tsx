"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const STRAPI_URL = process.env.NEXT_PUBLIC_DATA;

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
};

const FeaturedNews = ({ article }: { article: any }) => (
  <section className="mx-auto mt-12 max-w-7xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative h-[300px] w-full md:h-[400px] md:w-1/2">
          {article.featuredImage?.url && (
            <Image
              src={getImageUrl(article.featuredImage.url)}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>
        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
          {/* Category Tag */}
          {article.category?.name && (
            <span className="mb-4 inline-block w-fit rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-600">
              {article.category.name}
            </span>
          )}
          <h2 className="mb-4 text-2xl font-bold leading-tight text-[#061C3D] md:text-3xl lg:text-4xl">
            {article.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
            {article.summary}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {article.publicationDate
                ? new Date(article.publicationDate).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                  )
                : ""}
            </span>
            <Link
              href={`/news/${article.slug}`}
              className="font-semibold text-orange-500 transition hover:text-orange-600"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const NewsGrid = ({ articles }: { articles: any[] }) => (
  <section className="mx-auto mt-12 max-w-7xl px-4">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: any, idx: number) => (
        <motion.div
          key={article.slug || idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
          className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
        >
          {/* Image with Date Overlay */}
          <div className="relative h-56 w-full overflow-hidden">
            {article.featuredImage?.url && (
              <Image
                src={getImageUrl(article.featuredImage.url)}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Date Badge Overlay */}
            {article.publicationDate && (
              <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">
                    {new Date(article.publicationDate).toLocaleDateString(
                      "en-US",
                      { month: "short" },
                    )}
                  </div>
                  <div className="text-2xl font-bold text-[#061C3D]">
                    {new Date(article.publicationDate).getDate()}
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    {new Date(article.publicationDate).getFullYear()}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            {/* Category Tag */}
            {article.category?.name && (
              <span className="mb-3 inline-block w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                {article.category.name}
              </span>
            )}
            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-[#061C3D] transition-colors group-hover:text-orange-500">
              {article.title}
            </h3>
            <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
              {article.summary}
            </p>
            <Link
              href={`/news/${article.slug}`}
              className="inline-flex items-center font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Read more
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

interface NewsClientProps {
  articles: any[];
}

export default function NewsClient({ articles }: NewsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically generate categories from articles
  const categoriesSet = new Set<string>();
  articles.forEach((article: any) => {
    if (article.category && article.category.name) {
      categoriesSet.add(article.category.name);
    }
  });
  const categories = ["All", ...Array.from(categoriesSet)];

  // Filter articles based on selected category
  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter(
          (n: any) => n.category && n.category.name === selectedCategory,
        );

  // Featured article logic: Latest article that is either:
  // 1. Marked as isFeatured, OR
  // 2. Has category "Announcements" or "Announcement"
  // If multiple match, show the latest one
  const featuredCandidates = filtered.filter(
    (article: any) =>
      article.isFeatured ||
      article.category?.name?.toLowerCase().includes("announcement"),
  );
  const featured =
    featuredCandidates.length > 0 ? featuredCandidates[0] : filtered[0];

  // Show all filtered articles in the grid
  const gridArticles = filtered;

  return (
    <>
      {featured && <FeaturedNews article={featured} />}

      {/* Category Filters */}
      <section className="mx-auto mt-16 max-w-7xl px-4">
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
      {gridArticles.length > 0 && (
        <div className="mb-20">
          <NewsGrid articles={gridArticles} />
        </div>
      )}
    </>
  );
}
