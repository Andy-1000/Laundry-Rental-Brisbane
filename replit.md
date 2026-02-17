# Laundry Rental Brisbane

## Overview
A modern, high-converting website for Laundry Rental Brisbane - a weekly appliance rental subscription service based in Brisbane, Australia. The primary goal is to maximise form submissions, with a secondary goal of ranking locally for laundry rental terms.

## Current State
MVP complete with all 6 pages: Home, Pricing, How It Works, FAQ, Contact, Terms & Conditions.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui components
- **Backend**: Express.js API
- **Database**: PostgreSQL (Drizzle ORM)
- **Routing**: wouter (client-side)

## Pages
- `/` - Home (hero, pricing preview, value props, how it works, trust, FAQ preview, CTA)
- `/pricing` - Full pricing comparison with cost vs buying table
- `/how-it-works` - Step-by-step process
- `/faq` - Categorised frequently asked questions
- `/contact` - Contact/enquiry form (persisted to database)
- `/terms` - Terms & Conditions (not in nav)

## API Endpoints
- `POST /api/contact` - Submit contact form (validated with Zod)

## Database Schema
- `contact_submissions` - Stores form submissions (name, email, phone, postcode, deliveryAddress, product, message)

## Brand Colors
- Primary/Pink: #ef24a0
- Accent/Cyan: #0abcdf
- Highlight/Yellow-Green: #e6f662

## Key Files
- `shared/schema.ts` - Data models and validation
- `server/routes.ts` - API endpoints
- `server/storage.ts` - Database operations
- `server/db.ts` - Database connection
- `client/src/components/layout.tsx` - Navbar + Footer
- `client/src/pages/` - All page components
