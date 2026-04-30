# TODO: Fix Apollo Provider Hook Error (Local Dev Only)

## Issue
Local development shows "Invalid hook call" error with Apollo Client, but **production builds work fine**.

## Error Message
```
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
TypeError: Cannot read properties of null (reading 'useContext')
```

## Root Cause
Multiple React instances in local node_modules despite pnpm overrides. This is a pnpm hoisting issue in development.

## Temporary Workaround
The error only affects local development. Production builds on Vercel work correctly because:
1. Vercel uses a clean install
2. The pnpm overrides are properly applied
3. No cached node_modules conflicts

## Permanent Fix (To Do Later)
Try one of these solutions:

### Option 1: Use .npmrc configuration
Create `.npmrc` file:
```
public-hoist-pattern[]=*react*
public-hoist-pattern[]=*@apollo*
shamefully-hoist=true
```

### Option 2: Clean reinstall locally
```bash
rm -rf node_modules .next
pnpm install --force
```

### Option 3: Use npm instead of pnpm
If the issue persists, consider switching to npm which has better React deduplication.

### Option 4: Update Apollo Client configuration
Ensure Apollo Client is using the same React instance by importing from a single source.

## Priority
**Low** - Does not affect production deployment. Can be fixed during next maintenance cycle.

## Verification
- ✅ Vercel builds successfully
- ✅ Production site works without errors
- ❌ Local dev has hook errors (non-blocking)

## Notes
- All other fixes (logo sizes, legacy Image props, missing files) are working correctly
- The Subscribe component functionality works in production
- This is a known issue with pnpm and peer dependencies in monorepo-style setups
