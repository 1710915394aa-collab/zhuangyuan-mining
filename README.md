# Zhongyuan Technology

Production-ready independent website for **Zhongyuan Technology**, a professional ASIC miner supplier and mining hosting service.

## Stack

- Next.js App Router with SSR and SEO metadata
- Tailwind CSS black and gold premium UI
- Framer Motion page animations
- Lucide React icons
- CN/EN locale routes: `/en` and `/zh`
- Supabase-ready inquiry storage
- Vercel deployment ready

## Pages

- Home
- Products
- Hosting
- Mining Calculator
- About Us
- Blog
- Contact

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://www.zhongyuan-tech.shop
NEXT_PUBLIC_WHATSAPP_NUMBER=8613674067667
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_key
```

`SUPABASE_SERVICE_ROLE_KEY` must only be configured in Vercel environment variables or a secure local `.env.local` file. It is used by `/api/inquiries` on the server side.

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor. It creates:

- `products`
- `blog_posts`
- `inquiries`

The current frontend uses local structured content for speed and SEO. The schema is ready for a future admin system to manage products, inventory status, blog posts and inquiries.

## Deploy To Vercel

1. Push this project to GitHub.
2. Import it in Vercel.
3. Add the environment variables above.
4. Deploy.

The project includes `robots.ts`, `sitemap.ts`, Open Graph metadata and locale alternates for SEO.
