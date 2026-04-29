# Caching Configuration

## Overview
This document describes the caching strategy implemented for the iCapital website to improve performance and reduce server load.

## Apollo Client Cache Configuration

### Client-Side Cache (`src/utils/apollo.client.ts`)
- **Fetch Policy**: Changed from `network-only` to `cache-first` for better performance
- **Type Policies**: Configured for portfolios, news articles, and events
- **Query Deduplication**: Enabled to prevent duplicate requests
- **Result Caching**: Enabled for better performance

### Server-Side Cache (`src/lib/serverApolloClient.ts`)
- **Fetch Policy**: `no-cache` (always fetch fresh data on server)
- **Type Policies**: Same as client-side for consistency
- **Revalidation**: Set to 3600 seconds (1 hour) for server requests
- **Cache Headers**: Added `Cache-Control` headers to server requests

### EAFS Cache (`src/lib/apolloClientEafs.ts`)
- **Fetch Policy**: Changed to `cache-first`
- **Type Policies**: Configured for summits and testimonials
- **Query Deduplication**: Enabled

## Middleware Caching Headers

### Static Assets
- **JS/CSS/Fonts**: `public, max-age=31536000, immutable` (1 year)
- **Images**: `public, max-age=31536000, immutable` (1 year)

### API Routes
- **Cache-Control**: `public, max-age=300, s-maxage=600, stale-while-revalidate=3600`
- **CDN Cache**: 10 minutes
- **Stale While Revalidate**: 1 hour

### Dynamic Pages (Portfolios, News)
- **Cache-Control**: `public, max-age=0, s-maxage=3600, stale-while-revalidate=86400`
- **CDN Cache**: 1 hour
- **Stale While Revalidate**: 24 hours

### Static Pages (Home, EAFS)
- **Cache-Control**: `public, max-age=0, s-maxage=3600, stale-while-revalidate=86400`
- **CDN Cache**: 1 hour
- **Stale While Revalidate**: 24 hours

### Default Pages
- **Cache-Control**: `public, max-age=0, s-maxage=1800, stale-while-revalidate=3600`
- **CDN Cache**: 30 minutes
- **Stale While Revalidate**: 1 hour

## Next.js Configuration Headers

### Static Assets
- `/images/*`: 1 year immutable cache
- `/fonts/*`: 1 year immutable cache
- `/_next/static/*`: 1 year immutable cache
- `/_next/image/*`: 1 year immutable cache

### Manifest and Robots
- `manifest.json`, `robots.txt`: 1 day cache with 7-day stale-while-revalidate

## Benefits

1. **Reduced Server Load**: Cached responses reduce the number of requests to the GraphQL server
2. **Faster Page Loads**: Cache-first strategy serves cached data immediately
3. **Better User Experience**: Stale-while-revalidate ensures users see content quickly
4. **CDN Optimization**: Proper cache headers enable CDN caching
5. **Query Deduplication**: Prevents duplicate GraphQL queries

## Monitoring

Monitor the following metrics to ensure caching is working effectively:
- Cache hit rate in Apollo Client
- CDN cache hit rate
- Time to First Byte (TTFB)
- Largest Contentful Paint (LCP)
- GraphQL query response times

## Future Improvements

1. Implement cache warming for critical pages
2. Add cache invalidation strategy for content updates
3. Consider implementing service worker for offline support
4. Add cache analytics and monitoring
