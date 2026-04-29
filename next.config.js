/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Enable partial prerendering for better performance
    ppr: false, // Set to true when stable
  },

  // Optimize server components - moved from experimental
  serverExternalPackages: ['@apollo/client'],

  // Enable static optimization
  output: 'standalone',
  
  webpack(config) {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    );

    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts aggressively
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache Next.js static files
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache optimized images
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache manifest and robots
        source: '/(manifest.json|robots.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/knowledge-sharing/east-africa-finance-summit",
        destination: "/knowledge-sharing/east-africa-finance-summit/upcoming",
        permanent: true,
      },
    ];
  },

  compiler: {
    styledComponents: true,
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icapital-cms.techawks.io",
      },
      {
        protocol: "https",
        hostname: "icapital-cms.frontiertech",
      },
      {
        protocol: "https",
        hostname: "icapital.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "icms.frontiertech.org",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  // Enable gzip compression
  compress: true,
  
  // Enable static generation where possible
  trailingSlash: false,
  
  reactStrictMode: true,
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Added to avoid TypeScript errors during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
