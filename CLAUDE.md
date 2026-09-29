# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About this project

This is a Next.js 16 (App Router) application, currently at the unmodified `create-next-app` starter state — a single homepage (`app/page.tsx`) and root layout (`app/layout.tsx`), no custom routes, components, API handlers, or tests yet.

**Before writing code, read the relevant guide under `node_modules/next/dist/docs/`** (per `AGENTS.md`, imported above) — this Next.js version may diverge from training-data assumptions. Notably, `app/layout.tsx` already uses the newer typed props convention (`LayoutProps<"/">` from `next/font`-adjacent generated types) rather than a hand-written `{ children: React.ReactNode }` prop — follow that pattern for new layouts/pages rather than the older manual typing.

## Commands

Package manager is **pnpm** (`packageManager: pnpm@12.5.1` in `package.json`).

- `pnpm dev` — start the dev server (Turbopack via `next dev`)
- `pnpm build` — production build (`next build`)
- `pnpm start` — run a production build (`next start`)
- `pnpm lint` — run ESLint (`eslint`, flat config in `eslint.config.mjs`)

There is no test setup in this repo yet (no test runner configured, no test scripts in `package.json`).

## Working with libraries and frameworks

Always check Context7 for up-to-date documentation whenever implementing new frameworks, libraries, or features using them — training data may not reflect recent API changes.

## Architecture notes

- **App Router only** — routes live under `app/`. There is no `pages/` directory.
- **Styling**: Tailwind CSS v4, configured via the `@tailwindcss/postcss` plugin in `postcss.config.mjs` (no separate `tailwind.config.*` file — v4 is CSS-driven from `app/globals.css`).
- **Fonts**: Geist Sans/Mono are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`).
- **TypeScript**: `strict: true`; `moduleResolution: bundler`.
