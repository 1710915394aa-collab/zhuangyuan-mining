create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('Antminer', 'Whatsminer')),
  model text not null,
  hashrate text,
  power_consumption text,
  efficiency text,
  weight text,
  noise text,
  cooling text,
  moq text,
  availability text not null default 'Available' check (availability in ('Available', 'Limited', 'Pre-order')),
  hosting_available boolean not null default true,
  shipping text,
  sort_order integer not null default 100,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_en text not null,
  title_zh text not null,
  excerpt_en text,
  excerpt_zh text,
  content_en text,
  content_zh text,
  keywords text[] not null default '{}',
  published_at timestamptz,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('quote', 'hosting', 'contact')),
  name text not null,
  country text,
  whatsapp text,
  email text,
  product text,
  machine_type text,
  quantity text,
  message text,
  locale text,
  source text not null default 'website',
  page_url text,
  user_agent text,
  referrer text,
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.inquiries add column if not exists page_url text;
alter table public.inquiries add column if not exists user_agent text;
alter table public.inquiries add column if not exists referrer text;

alter table public.products enable row level security;
alter table public.blog_posts enable row level security;
alter table public.inquiries enable row level security;

create policy "Public can read active products"
on public.products
for select
using (is_active = true);

create policy "Public can read published blog posts"
on public.blog_posts
for select
using (is_published = true);

create policy "Public can create inquiries"
on public.inquiries
for insert
with check (true);

create index if not exists products_active_sort_idx on public.products (is_active, sort_order);
create index if not exists blog_posts_published_idx on public.blog_posts (is_published, published_at desc);
create index if not exists inquiries_created_idx on public.inquiries (created_at desc);
