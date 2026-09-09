create extension if not exists pgcrypto;

-- Make this hand-run migration safe to retry after a partial execution.
do $$
declare
  policy_row record;
begin
  for policy_row in
    select schemaname, tablename, policyname
    from pg_policies
    where (schemaname = 'public' and tablename in ('factory_journal_entries', 'project_cases', 'site_pages', 'media_assets', 'content_audit_log'))
       or (schemaname = 'storage' and tablename = 'objects' and policyname like '%factory%')
  loop
    execute format('drop policy if exists %I on %I.%I', policy_row.policyname, policy_row.schemaname, policy_row.tablename);
  end loop;
end $$;

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

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null unique,
  public_url text not null,
  title text not null,
  alt_text text not null,
  category text not null check (category in ('Product', 'Factory', 'Project', 'Packing', 'Material')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_audit_log (
  id uuid primary key default gen_random_uuid(),
  table_name text not null,
  record_id uuid,
  action text not null check (action in ('create', 'update', 'publish', 'archive', 'delete')),
  changed_at timestamptz not null default now(),
  changed_by uuid references auth.users(id) on delete set null,
  details jsonb not null default '{}'::jsonb
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
alter table public.media_assets enable row level security;
alter table public.content_audit_log enable row level security;

create policy "published site pages are public"
  on public.site_pages for select
  using (status = 'published');

create policy "authenticated users manage site pages"
  on public.site_pages for all
  to authenticated using (true) with check (true);

create policy "public reads media metadata"
  on public.media_assets for select using (true);

create policy "authenticated users manage media metadata"
  on public.media_assets for all
  to authenticated using (true) with check (true);

create policy "authenticated users read audit log"
  on public.content_audit_log for select
  to authenticated using (true);

create policy "authenticated users write audit log"
  on public.content_audit_log for insert
  to authenticated with check (changed_by = auth.uid());

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

create or replace function public.set_content_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists factory_journal_updated_at on public.factory_journal_entries;
create trigger factory_journal_updated_at before update on public.factory_journal_entries for each row execute function public.set_content_updated_at();
drop trigger if exists project_cases_updated_at on public.project_cases;
create trigger project_cases_updated_at before update on public.project_cases for each row execute function public.set_content_updated_at();
drop trigger if exists site_pages_updated_at on public.site_pages;
create trigger site_pages_updated_at before update on public.site_pages for each row execute function public.set_content_updated_at();
drop trigger if exists media_assets_updated_at on public.media_assets;
create trigger media_assets_updated_at before update on public.media_assets for each row execute function public.set_content_updated_at();
