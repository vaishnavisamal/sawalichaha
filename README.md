# Sawali Chaha (सावली चहा)

Tea & snacks franchise website — built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Development

You'll need Node.js and npm (or bun).

```sh
npm install
npm run dev
```

The app runs at http://localhost:8080 by default.

## Build

```sh
npm run build
```

This produces a client bundle plus a server bundle in `.output/`, deployable to any Node-compatible host or (with the default Nitro preset) Cloudflare Workers. To target a different platform, change the `preset` passed to `nitro()` in `vite.config.ts`.

## Stack

- TanStack Start (SSR router)
- React 19 + TypeScript
- Tailwind CSS v4
- Radix UI primitives (via shadcn-style components in `src/components/ui`)
