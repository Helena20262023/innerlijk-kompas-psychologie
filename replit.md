# Innerlijk Kompas Psychologie

## Overview
A professional website for "Innerlijk Kompas Psychologie", an online psychology practice based in the Netherlands. The site serves as a brochure and contact platform for clients (both Dutch residents and expats).

## Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + Framer Motion
- **Backend**: Express.js (Node/TypeScript)
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Routing**: wouter (v3.9.0 — renders `<a>` tags directly, do NOT nest `<a>` or use `asChild` with Link)

## Pages
- `/` — Home (hero, features, services overview, CTA)
- `/werkwijze` — Werkwijze/Services (treatment methods, pricing sidebar)
- `/about` — Over mij (therapist bio)
- `/ervaringen` — Ervaringen (testimonials)
- `/tarieven` — Tarieven (pricing)
- `/contact` — Contact form (connected to backend API)
- `/checklist` — Launch checklist

## Key Files
- `shared/schema.ts` — Drizzle schema (users, contactSubmissions)
- `server/routes.ts` — API routes (`POST /api/contact`, `GET /api/contact`)
- `server/storage.ts` — Database storage interface (DatabaseStorage)
- `server/db.ts` — Database connection (Neon serverless)
- `client/src/App.tsx` — Router and layout
- `client/src/components/layout/navbar.tsx` — Navigation
- `client/src/components/layout/footer.tsx` — Footer

## API Endpoints
- `POST /api/contact` — Submit contact form (name, email, phone, service, message, privacy)
- `GET /api/contact` — List all contact submissions

## Important Notes
- wouter v3 Link renders `<a>` directly — never wrap Link children in `<a>` tags or use Button `asChild` with Link
- Contact form uses TanStack Query mutations for submissions
- All static content (services, pricing, testimonials) is hardcoded in components
