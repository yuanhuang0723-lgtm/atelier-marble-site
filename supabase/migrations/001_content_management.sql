create extension if not exists pgcrypto;

create table if not exists public.factory_journal_entries (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null check (category in ('Workshop', 'Material review', 'Fabrication', 'Quality review', 'Packing')),
  observed_at date not null,
  summary text not null,
  image_url text not null,
  image_alt text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists public.project_cases (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  project_type text not null,
  material text not null,
  scope text not null,
  description text not null,
  image_url text not null,
  image_alt text not null,
  is_reference boolean not null default true,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists public.site_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  locale text not null default 'en' check (locale in ('en', 'zh')),
  title text not null,
  seo_title text not null,
  seo_description text not null,
  summary text not null,
  blocks jsonb not null default '[]'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  unique (slug, locale)
);

alter table public.factory_journal_entries enable row level security;

create policy "published factory journal is public"
  on public.factory_journal_entries for select
  using (status = 'published');

create policy "authenticated users manage factory journal"
  on public.factory_journal_entries for all
  to authenticated using (true) with check (true);

alter table public.project_cases enable row level security;

create policy "published project cases are public"
  on public.project_cases for select
  using (status = 'published');

create policy "authenticated users manage project cases"
  on public.project_cases for all
  to authenticated using (true) with check (true);

alter table public.site_pages enable row level security;

create policy "published site pages are public"
  on public.site_pages for select
  using (status = 'published');

create policy "authenticated users manage site pages"
  on public.site_pages for all
  to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public)
values ('factory-media', 'factory-media', true)
on conflict (id) do nothing;

create policy "public reads factory media"
  on storage.objects for select
  using (bucket_id = 'factory-media');

create policy "authenticated uploads factory media"
  on storage.objects for insert
  to authenticated with check (bucket_id = 'factory-media');

create policy "authenticated updates factory media"
  on storage.objects for update
  to authenticated using (bucket_id = 'factory-media') with check (bucket_id = 'factory-media');

create policy "authenticated deletes factory media"
  on storage.objects for delete
  to authenticated using (bucket_id = 'factory-media');
