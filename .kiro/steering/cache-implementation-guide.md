---
inclusion: manual
---

# Cache Implementation Guide

## Quick Reference

### Revalidation Intervals Used

```typescript
// Home page - moderate updates
export const revalidate = 1800; // 30 minutes

// Portfolio pages - stable content
export const revalidate = 3600; // 1 hour

// News pages - frequent updates
export const revalidate = 900; // 15 minutes

// API routes that need real-time data
export const dynamic = "force-dynamic";
```

## How ISR Works

### 1. Build Time
- Next.js pre-renders all static pages
- Dynamic routes use `generateStaticParams()` to pre-render all variants
- Pages are stored in `.next/server/pages`

### 2. Request Time
- User requests page
- If cached and not expired: serve from cache (instant)
- If expired: serve stale version while regenerating in background
- After regeneration: new version is cached

### 3. Revalidation
- Happens in background after `revalidate` interval expires
- User gets stale content while regeneration happens
- New content is cached for next requests

## Implementation Examples

### Adding Revalidation to a New Page

```typescript
import { Metadata } from "next";

// Enable ISR with 30-minute revalidation
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "My Page",
};

export default async function MyPage() {
  // Fetch data server-side
  const data = await fetchData();
  
  return <div>{/* content */}</div>;
}
```

### Pre-rendering Dynamic Routes

```typescript
import { notFound } from "next/navigation";

// Pre-render all variants at build time
export async function generateStaticParams() {
  const items = await fetchAllItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

// Enable ISR for updates
export const revalidate = 3600;

export default async function ItemPage({ params }) {
  const { slug } = await params;
  const item = await fetchItem(slug);
  
  if (!item) notFound();
  
  return <div>{/* content */}</div>;
}
```

### On-Demand Revalidation

```typescript
// In a server action or API route
import { revalidatePath, revalidateTag } from "next/cache";

export async function updatePortfolio(id: string) {
  // Update database
  await db.portfolio.update(id, data);
  
  // Revalidate specific path
  revalidatePath("/portfolios");
  revalidatePath(`/portfolios/${id}`);
  
  // Or revalidate by tag
  revalidateTag("portfolios");
}
```

### Using Cache Tags

```typescript
// In data fetching
async function getPortfolios() {
  const res = await fetch("https://api.example.com/portfolios", {
    next: { tags: ["portfolios"] },
  });
  return res.json();
}

// In server action - revalidate all pages using this tag
import { revalidateTag } from "next/cache";

export async function updatePortfolios() {
  await updateDatabase();
  revalidateTag("portfolios");
}
```

## Cache Headers Explained

### Static Assets (1 year, immutable)
```
Cache-Control: public, max-age=31536000, immutable
```
- Browser caches for 1 year
- CDN caches for 1 year
- Never revalidates (immutable)
- Use for versioned assets (hash in filename)

### API Routes (5 minutes)
```
Cache-Control: public, max-age=300, s-maxage=300
```
- Browser caches for 5 minutes
- CDN caches for 5 minutes
- Good for frequently changing data

### HTML Pages (1 hour + stale-while-revalidate)
```
Cache-Control: public, max-age=0, s-maxage=3600, stale-while-revalidate=86400
```
- Browser: Always revalidate (max-age=0)
- CDN: Cache for 1 hour (s-maxage=3600)
- Stale-while-revalidate: Serve stale for 24 hours while regenerating
- Ensures users always get fresh content while maintaining performance

## Middleware Cache Logic

```typescript
// Static assets - immutable
if (pathname.match(/\.(js|css|woff2|woff|ttf|eot|svg|png|jpg|jpeg|gif|webp)$/)) {
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
}

// API routes - short-lived
else if (pathname.startsWith('/api/')) {
  response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300')
}

// HTML pages - ISR with stale-while-revalidate
else {
  response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400')
}
```

## Debugging Cache Issues

### Check if Page is Static

```bash
# After build, check .next/server/pages-manifest.json
cat .next/server/pages-manifest.json | grep "your-page"

# Should show: "your-page": "pages/your-page.html"
# If missing, page is dynamic
```

### Verify Cache Headers

```bash
# Check response headers
curl -I https://your-site.com/page

# Look for:
# Cache-Control: public, max-age=0, s-maxage=3600, stale-while-revalidate=86400
# X-Vercel-Cache: HIT (on Vercel)
```

### Monitor Revalidation

```typescript
// Add logging to track revalidation
export const revalidate = 1800;

export default async function Page() {
  console.log(`Page rendered at ${new Date().toISOString()}`);
  // ...
}
```

## Performance Tips

### 1. Choose Right Revalidation Interval
- **Static content** (portfolios): 1 hour or more
- **Moderate content** (home page): 30 minutes
- **Frequently updated** (news): 5-15 minutes
- **Real-time** (forms, user data): `force-dynamic`

### 2. Use generateStaticParams Wisely
- Pre-render high-traffic pages
- Skip low-traffic pages (use fallback)
- Limit to reasonable number (100-1000)

### 3. Optimize Data Fetching
```typescript
// Good - parallel requests
const [data1, data2] = await Promise.all([
  fetch1(),
  fetch2(),
]);

// Bad - sequential requests
const data1 = await fetch1();
const data2 = await fetch2();
```

### 4. Use Incremental Static Regeneration
- Don't use `force-dynamic` for everything
- Use ISR for better performance
- Only use `force-dynamic` when necessary

### 5. Monitor Cache Hit Ratio
- Target: 85-95% cache hit ratio
- Use CDN analytics
- Adjust revalidation intervals based on metrics

## Troubleshooting

### Page Not Caching
1. Check if `revalidate` is exported
2. Verify page is not using `force-dynamic`
3. Check middleware cache headers
4. Verify CDN is configured

### Stale Content
1. Increase revalidation frequency
2. Use on-demand revalidation
3. Check if data source is cached
4. Verify ISR is working

### High Server Load
1. Increase revalidation intervals
2. Reduce number of dynamic routes
3. Implement database query caching
4. Use CDN for static assets

## Best Practices

✅ DO:
- Use ISR for most pages
- Pre-render high-traffic pages
- Monitor cache metrics
- Use on-demand revalidation for CMS updates
- Implement proper error handling

❌ DON'T:
- Use `force-dynamic` for everything
- Set revalidation too low (< 60 seconds)
- Forget to handle errors in data fetching
- Ignore cache hit ratios
- Pre-render too many dynamic routes

## Resources

- [Next.js ISR Documentation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [Next.js Caching Documentation](https://nextjs.org/docs/app-router/building-your-application/caching)
- [HTTP Caching Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [Web Vitals Guide](https://web.dev/vitals/)
