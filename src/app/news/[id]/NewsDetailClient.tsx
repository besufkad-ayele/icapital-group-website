"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlocksRenderer } from "@/lib/blocks-renderer";
import { FiArrowLeft, FiClock, FiCalendar, FiTag, FiUser } from "react-icons/fi";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import BackToTop from "@/components/BackToTop";
import BackToNews from "@/components/BackToNews";

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return getStrapiImageUrl(url);
};

/** Prefer Strapi dimensions; fallback to 16:9 for cards/heroes */
const getAspectRatio = (image?: { width?: number; height?: number }) => {
  if (image?.width && image?.height) {
    return `${image.width} / ${image.height}`;
  }
  return "16 / 9";
};

// Helper to calculate reading time
const getReadingTime = (content: any) => {
  const text = typeof content === 'string' ? content : JSON.stringify(content);
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
};

interface NewsDetailClientProps {
  article: any;
  relatedArticles?: any[];
}

export default function NewsDetailClient({
  article,
  relatedArticles = [],
}: NewsDetailClientProps) {
  const readingTime = getReadingTime(article.content);

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
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-white"
              style={{ aspectRatio: getAspectRatio(article.featuredImage) }}
            >
              {article.featuredImage?.url && (
                <Image
                  src={getImageUrl(article.featuredImage.url)}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
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
                      <div className="relative aspect-video w-32 flex-shrink-0 overflow-hidden rounded-lg md:w-36">
                        {relatedArticle.featuredImage?.url && (
                          <Image
                            src={getImageUrl(relatedArticle.featuredImage.url)}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="144px"
                          />
                        )}
                      </div>
                      {/* Info */}
                      <div className="flex flex-col justify-center overflow-hidden">
                        <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-orange-500">
                          {relatedArticle.category?.name || "Updates"}
                        </span>
                        <h4 className="line-clamp-2 text-sm font-bold text-[#061C3D] group-hover:text-orange-500">
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

            {/* Article Meta */}
            <div className="mb-10 flex flex-wrap items-center gap-6 border-b border-gray-100 pb-10">
              {article.author && (
                <div className="flex items-center gap-4">
                  {article.author.avatar?.url ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gray-200 shadow-sm">
                      <Image
                        src={getImageUrl(article.author.avatar.url)}
                        alt={article.author.name || "Author"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold border-2 border-white shadow-sm">
                      <FiUser className="text-xl" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Author
                    </span>
                    <span className="text-sm font-bold text-[#061C3D]">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              )}

              <div className="hidden h-8 w-[1px] bg-gray-200 md:block"></div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Published on
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <FiCalendar className="text-orange-500" />
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
              </div>

              <div className="hidden h-8 w-[1px] bg-gray-200 md:block"></div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Reading Time
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <FiClock className="text-orange-500" />
                  {readingTime} min read
                </span>
              </div>

              {article.category?.name && (
                <>
                  <div className="hidden h-8 w-[1px] bg-gray-200 md:block"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Category
                    </span>
                    <span className="mt-1 flex items-center gap-2 w-fit rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-600 border border-orange-100">
                      <FiTag />
                      {article.category.name}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-[#061C3D] prose-p:text-gray-700 prose-a:text-orange-500 hover:prose-a:text-orange-600">
              {article.content && (
                <BlocksRenderer
                  content={
                    typeof article.content === "string"
                      ? JSON.parse(article.content)
                      : article.content
                  }
                />
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 border-t border-gray-100 pt-8">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Related Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: any) => (
                    <span
                      key={tag.slug}
                      className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-orange-50 hover:text-orange-600"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <BackToTop />
      <BackToNews />
    </div>
  );
}

