# AI Life Management PWA

This repository contains the initial scaffold for **LifeAI**, an offline-first Progressive Web Application built with Next.js 14 and shadcn/ui. The goal is to deliver an AI-powered life management experience that captures multi-format notes, synchronises with Google services, and provides insights across eight pillars of human well-being.

## Project Highlights

- **Next.js App Router + TypeScript** foundation ready for incremental feature development.
- **Tailwind CSS** design system with shadcn/ui-compatible tokens and helper utilities.
- **Dashboard scaffolding** for notes, calendar, tasks, AI assistant, and pillar analytics.
- **Firebase & Google integrations** stubbed for future authentication, storage, and AI workflows.
- **PWA essentials** including manifest, service worker registration, and offline Dexie database layer.

## Getting Started

> The project dependencies reference private registries that may not be available in this offline environment. Run the following commands locally after cloning:

```bash
npm install
npm run dev
```

The development server defaults to [http://localhost:3000](http://localhost:3000).

## Directory Structure

```
src/
  app/
    (auth)/             # Login and signup routes
    (dashboard)/        # Protected dashboard sections
    api/                # Future route handlers for AI, Google, and sync operations
  components/
    ai/                 # AI assistant previews
    calendar/           # Calendar timeline previews
    layout/             # Shared layout components
    notes/              # Note capture previews
    pillars/            # 8-pillar insights
    search/             # Search filters and hero
    tasks/              # Task insights and kanban board
  lib/
    ai/                 # Gemini helper (mock)
    db/                 # Offline Dexie helpers
    firebase/           # Firebase client initialization
    google-apis/        # Google API helpers
    sync/               # Service worker utilities
    utils/              # Shared utilities
  styles/               # Tailwind configuration and CSS tokens
public/
  manifest.json         # PWA manifest
  sw.js                 # Placeholder service worker
```

## Next Steps

- Integrate Firebase Auth and Firestore using the stubs in `src/lib/firebase`.
- Replace mock UI data with live data sources and state management (e.g. Zustand).
- Connect Gemini and Google APIs for conversational AI, scheduling, and search.
- Implement offline-first note capture and background sync workflows.
- Add automated tests, accessibility refinements, and deployment scripts.

## License

This project is released under the MIT license. Feel free to adapt and extend it for your own AI productivity experiences.
