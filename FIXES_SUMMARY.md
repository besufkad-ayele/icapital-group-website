# Fixes Summary - iCapital Website

## Issues Fixed

### ✅ 1. Invalid Hook Call Error (Apollo Provider)
**Problem:** The `Subscribe` component was throwing "Invalid hook call" error because Apollo Context was null.

**Root Cause:** The `ApolloClientProvider` had a `mounted` state check that returned children without the Apollo Provider wrapper during initial renders.

**Fix:** Removed the `mounted` state check in `src/components/providers/ApolloProvider.tsx` so Apollo Provider always wraps children from the start.

**Files Changed:**
- `src/components/providers/ApolloProvider.tsx`

---

### ✅ 2. Legacy Next.js Image Props
**Problem:** Using deprecated Next.js 12 Image API props (`layout="fill"`, `objectFit="cover"`) causing warnings.

**Fix:** Updated all Image components to use Next.js 13+ API:
- `layout="fill"` → `fill` prop
- `objectFit="cover"` → `style={{ objectFit: 'cover' }}`

**Files Changed:**
- `src/components/Home/Hero.tsx`
- `src/components/eafs/Landing/Hero.tsx`
- `src/components/eafs/PreviousSummitDetail/Hero.tsx`
- `src/components/Common/ErrorUI.tsx`

---

### ✅ 3. Missing Logo Files
**Problem:** 
- `/images/logo.png` referenced in manifest.json but doesn't exist
- `/images/eafs-logo.png` referenced in EAFS Header but doesn't exist

**Fix:**
- Removed duplicate/missing logo reference from `public/manifest.json`
- Copied EAFS logo from `src/assets/eafs/EAFS-Logo.png` to `public/images/eafs-logo.png`

**Files Changed:**
- `public/manifest.json`
- `public/images/eafs-logo.png` (new file)

---

### ✅ 4. Logo Size Too Small
**Problem:** Logos in header and footer were too small and hard to see.

**Fix:** Increased logo sizes:

**Header:**
- Desktop: `h-14 w-40` → `h-16 w-48 md:h-20 md:w-56`
- Mobile menu: `h-12 w-40` → `h-14 w-44 md:h-16 md:w-48`

**Footer:**
- `width={140} height={70}` → `width={180} height={90}`

**Files Changed:**
- `src/components/Home/Header.tsx`
- `src/components/Home/Footer.tsx`

---

### ✅ 5. React Version Conflicts
**Problem:** Multiple React instances in node_modules causing hook errors.

**Fix:** Added pnpm overrides and peer dependency rules in `package.json`:
```json
"pnpm": {
  "overrides": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "peerDependencyRules": {
    "allowedVersions": {
      "react": "18.3.1",
      "react-dom": "18.3.1"
    }
  }
}
```

**Files Changed:**
- `package.json`
- `pnpm-lock.yaml`

---

### ✅ 6. Vercel Build Failure
**Problem:** Vercel build failing due to lockfile mismatch with package.json.

**Fix:** Updated `pnpm-lock.yaml` to match the Apollo Client version in package.json and pushed to GitHub.

**Files Changed:**
- `pnpm-lock.yaml`

---

## Testing

To verify all fixes:

1. **Start dev server:**
   ```bash
   pnpm dev
   ```

2. **Check for errors:**
   - ✅ No "Invalid hook call" errors
   - ✅ No legacy Image prop warnings
   - ✅ No 404 errors for logo files
   - ✅ Logos are properly sized and visible

3. **Test pages:**
   - Home page (`/`)
   - News page (`/news`)
   - Portfolio pages (`/portfolios/*`)
   - EAFS pages (if applicable)

---

## Deployment

All changes have been committed and pushed to the `master` branch. Vercel should automatically rebuild and deploy the fixes.

**Commit:** `bc43016` - "fix: update pnpm lockfile for Apollo Client 3.13.8"

---

## Notes

- The Apollo Provider error may still appear if there are cached builds. Clear `.next` folder and restart dev server if needed.
- All image optimizations are now using the modern Next.js 13+ Image API.
- Logo sizes are now responsive and scale appropriately on different screen sizes.
