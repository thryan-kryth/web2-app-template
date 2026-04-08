# Web2 Frontend

| Field | Value |
|-------|-------|
| Type | `web2-frontend-scaffold` |
| ID | `c11d4402` |
| Category | app |
| Tags | frontend, nextjs, react, web2, scaffold, app |
| Description | Next.js scaffold without Web3 dependencies |

## Configuration

| Setting | Value |
|---------|-------|
| Framework | nextjs |
| Styling | tailwind |
| State Management | tanstack-query |
| Auth Provider | none |
| App Name | API Workflow App |

## Scripts

| Name | Command |
|------|---------|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |

## Documentation

### Getting Started

# API Workflow App

A Next.js application scaffold.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Stack
- **Framework**: Next.js (App Router)
- **Styling**: tailwind
- **State**: tanstack-query
- **Auth**: None (add your own)

## Project Structure

```
src/app/
  layout.tsx        # Root layout with providers
  page.tsx          # Home page
  globals.css       # Global styles
src/components/
  providers.tsx     # Client-side providers
```


## File Structure

This component would generate the following files:

- `apps/web/package.json`
- `apps/web/next.config.mjs`
- `apps/web/tsconfig.json`
- `apps/web/tailwind.config.ts`
- `apps/web/postcss.config.mjs`
- `apps/web/src/app/layout.tsx`
- `apps/web/src/app/page.tsx`
- `apps/web/src/app/globals.css`
- `apps/web/src/components/providers.tsx`
- `apps/web/src/types/env.d.ts`

## Integration Points

**Provides to:**
- Http-api (`7618fbd0`)

