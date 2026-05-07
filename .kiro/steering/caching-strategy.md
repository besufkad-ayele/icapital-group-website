---
inclusion: manual
---

# Caching Strategy & Performance Optimization

## Overview

This document outlines the caching strategy implemented across the i-Capital Africa Group website to maximize performance and scalability while maintaining fresh content.

## Key Changes Made

### 1. Removed `force-dynamic` from Root Layout
- **Before**: Every request was server-rendered, killing performance
- **After**: Static generation with selective revalidation enabled
- **Impact**: Dramatically improved Time to First Byte (TTFB) and reduced server load

### 2. Static Generation with Revalidation (ISR)

#### Home Page (`src/app/page.tsx`)
- **Revalidation**: 30 minutes (1800 seconds)
- **Strategy**: Pre-renders at build time, revalidates every 30 minutes
- **Content**: Hero, sectors, features, news, portfolio, testimonials

#### Portfolios Page (`src/app/portfolios/page.tsx`)
- **Revalidation**: 30 minutes (1800 seconds)
- **Strategy**: Static generation with ISR
- **Content**: Portfolio grid and listings

#### Portfolio Detail Pages (`src/app/portfolios/[slug]/page.tsx`)
- **Revalidation**: 1 hour (3600 seconds)
- **Strategy**: `generateStaticParams()` pre-generates all portfolio pages at build time
- **Content**: Individual portfolio details, challenges, solutions

#### News Page (`src/app/news/page.tsx`)
- **Revalidation**: 15 minutes (900 seconds)
- **Strategy**: More frequent updates for news content
- **Content**: Article listings and summaries

#### News Detail Pages (`src/app/news/[id]/page.tsx`)
- **Revalidation**: 15 minutes (900 seconds)
- **Strategy**: `generateStaticParams()` pre-generates all article pages
- **Content**: Full article content with related articles

#### Sitemap (`src/app/sitemap.ts`)
- **Revalidation**: 1 hour (3600 seconds)
- **Strategy**: Cached for SEO optimization

### 3. API Route Caching

#### Contact Form API (`src/app/api/contact/route.ts`)
- **Strategy**: `force-dynamic` (intentional)
- **Reason**: Form submissions must always be fresh and dynamic
- **Rate Limiting**: 5 requests per 15 minutes per IP

### 4. Middleware Caching Headers (`middleware.ts`)

```
Static Assets (.js, .css, fonts, images):
- Cache-Control: public, max-age=31536000, immutable
- Duration: 1 year (immutable)

API Routes:
- Cache-Control: public, max-age=300, s-maxage=300
- Duration: 5 minutes

HTML Pages:
- Cache-Control: public, max-age=0, s-maxage=3600, stale-while-revalidate=86400
- Browser: No cache (always revalidate)
- CDN: 1 hour
- Stale-while-revalidate: 24 hours
```

### 5. Next.js Configuration Optimizations (`next.config.js`)

#### Image Optimization
- **Formats**: WebP and AVIF for modern browsers
- **Cache TTL**: 30 days for remote images
- **Optimization**: Automatic format conversion and compression

#### Bundle Optimization
- **Output**: Standalone (optimized for deployment)
- **Splitting**: Vendor code separated for better caching
- **Compression**: gzip enabled

#### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

#### Performance Features
- Powered-by header removed
- Console logs removed in production
- Styled-components compiler enabled

## Revalidation Strategy

### Revalidation Intervals

| Page | Interval | Reason |
|------|----------|--------|
| Home | 30 min | Main content updates moderately |
| Portfolios | 30 min | Portfolio listings change occasionally |
| Portfolio Detail | 1 hour | Individual projects rarely change |
| News | 15 min | News updates frequently |
| News Detail | 15 min | Articles may be updated |
| Sitemap | 1 hour | SEO optimization |

### On-Demand Revalidation

For immediate updates without waiting for revalidation:

```typescript
// In your API route or server action
import { revalidatePath } from 'next/cache';

// Revalidate specific path
revalidatePath('/portfolios');

// Revalidate all portfolios
revalidatePath('/portfolios/[slug]', 'page');
```

## Cache Hierarchy

```
1. Browser Cache (max-age=0 for HTML, 1 year for assets)
   ↓
2. CDN Cache (s-maxage=3600 for HTML, immutable for assets)
   ↓
3. Next.js ISR Cache (revalidate intervals)
   ↓
4. Server (regenerates on revalidation)
```

## Performance Metrics

### Expected Improvements

- **TTFB**: 50-70% reduction (static pages served from cache)
- **FCP**: 40-60% improvement (pre-rendered content)
- **Server Load**: 60-80% reduction (fewer server-side renders)
- **Bandwidth**: 30-40% savings (image optimization + compression)

## Deployment Considerations

### Vercel Deployment
- ISR works out of the box
- Automatic CDN caching
- On-demand revalidation via webhook

### Self-Hosted Deployment
- Use `output: 'standalone'` in next.config.js
- Configure reverse proxy (nginx/Apache) for cache headers
- Consider Redis for distributed caching

## Monitoring

### Key Metrics to Track
- Cache hit ratio
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Server response time

### Tools
- Next.js Analytics
- Web Vitals
- CDN analytics
- Server logs

## Future Optimizations

1. **Partial Pre-rendering (PPR)**: Enable when stable
2. **Redis Cache**: For distributed caching in production
3. **Webhook Revalidation**: Trigger updates from CMS
4. **Edge Functions**: Move logic closer to users
5. **Database Query Caching**: Cache GraphQL responses

## Troubleshooting

### Stale Content
- Check revalidation interval
- Verify ISR is enabled
- Check CDN cache headers

### Cache Not Working
- Verify middleware is applied
- Check browser DevTools Network tab
- Ensure `revalidate` export is present

### High Server Load
- Increase revalidation intervals
- Enable PPR for dynamic sections
- Implement database query caching
