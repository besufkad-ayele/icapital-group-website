"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlocksRenderer } from "@/lib/blocks-renderer";
import { FiArrowLeft } from "react-icons/fi";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return getStrapiImageUrl(url);
};

interface NewsDetailClientProps {
  article: any;
  relatedArticles?: any[];
}

export default function NewsDetailClient({
  article,
  relatedArticles = [],
}: NewsDetailClientProps) {
  return (
    <div className="bg-gray-50">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
        >
          <FiArrowLeft className="text-lg" />
          News & Updates
        </Link>
      </div>

      {/* Hero Section: Image + Latest News Side by Side */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Hero Image - Left Side (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[400px]">
              {article.featuredImage?.url && (
                <Image
                  src={getImageUrl(article.featuredImage.url)}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              {/* Date Badge Overlay */}
              {article.publicationDate && (
                <div className="absolute left-6 top-6 rounded-lg bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {new Date(article.publicationDate).toLocaleDateString(
                        "en-US",
                        { month: "long" }
                      )}
                    </div>
                    <div className="text-3xl font-bold text-[#061C3D]">
                      {new Date(article.publicationDate).getDate()}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {new Date(article.publicationDate).getFullYear()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sidebar - Latest News (1/3) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div>
              <h3 className="mb-6 text-xl font-bold text-[#061C3D]">
                Latest News & Updates
              </h3>
              <div className="space-y-6">
                {relatedArticles.slice(0, 3).map((relatedArticle: any) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/news/${relatedArticle.slug}`}
                    className="group block rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex gap-4">
                      {/* Thumbnail */}
                      <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg md:h-28 md:w-36">
                        {relatedArticle.featuredImage?.url && (
                          <Image
                            src={getImageUrl(relatedArticle.featuredImage.url)}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="144px"
                          />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        {relatedArticle.publicationDate && (
                          <p className="mb-1 text-xs text-gray-500">
                            {new Date(
                              relatedArticle.publicationDate
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        )}
                        {relatedArticle.category?.name && (
                          <span className="mb-2 inline-block w-fit rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-600">
                            {relatedArticle.category.name}
                          </span>
                        )}
                        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-[#061C3D] transition-colors group-hover:text-orange-500 md:text-base">
                          {relatedArticle.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Article Content - Same Width as Image */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Article Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-[#061C3D] md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            {/* Publication Info */}
            <div className="mb-8 flex items-center gap-4 border-b border-gray-200 pb-6">
              <span className="text-sm text-gray-600">
                Published on{" "}
                {article.publicationDate
                  ? new Date(article.publicationDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )
                  : ""}
              </span>
              {article.category?.name && (
                <>
                  <span className="text-gray-300">|</span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                    {article.category.name}
                  </span>
                </>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-[#061C3D] prose-p:text-gray-700 prose-a:text-orange-500 hover:prose-a:text-orange-600">
              {Array.isArray(article.content) && (
                <BlocksRenderer content={article.content} />
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

