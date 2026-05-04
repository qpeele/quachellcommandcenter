# Quachell Command Center

Standalone Next.js + Supabase private dashboard for Quachell.

## Setup
1. Install dependencies: `npm install`
2. Copy `.env.local.example` to `.env.local` and set Supabase keys.
3. Run `npm run dev`.
4. Apply `supabase/schema.sql` in Supabase SQL editor.

## Features
- Dashboard, books, tasks, businesses, money, launches, notes.
- Mobile responsive sidebar navigation.
- Seeded starter data in local app storage and SQL scaffold.
- RLS policies restricting data access per authenticated user.

## Deploy
- Connect repo to Netlify.
- Build command: `npm run build`
- Publish directory handled by Next.js plugin.
- Configure custom domain: `command.quachelliswrite.com` in Netlify domain settings.
