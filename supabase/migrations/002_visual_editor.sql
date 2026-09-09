create table if not exists public.admin_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('owner', 'editor')),
  created_at timestamptz not null default now()
);

create or replace function public.is_content_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admin_members where user_id = auth.uid());
$$;

create or replace function public.claim_first_admin()
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.admin_members) then
    insert into public.admin_members (user_id, role) values (auth.uid(), 'owner') on conflict do nothing;
  end if;
  return public.is_content_admin();
end;
$$;
grant execute on function public.claim_first_admin() to authenticated;

create table if not exists public.site_page_documents (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  locale text not null default 'en' check (locale in ('en', 'zh')),
  template text not null check (template in ('home', 'factory', 'project', 'article')),
  draft_blocks jsonb not null default '[]'::jsonb,
  published_blocks jsonb,
  revision integer not null default 1,
  published_revision integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  unique (path, locale)
);

create table if not exists public.site_page_revisions (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.site_page_documents(id) on delete cascade,
  revision integer not null,
  blocks jsonb not null,
  action text not null check (action in ('draft_saved', 'published', 'restored')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (document_id, revision)
);

create table if not exists public.media_usage (
  media_id uuid not null references public.media_assets(id) on delete cascade,
  document_id uuid not null references public.site_page_documents(id) on delete cascade,
  block_id text not null,
  created_at timestamptz not null default now(),
  primary key (media_id, document_id, block_id)
);

alter table public.admin_members enable row level security;
alter table public.site_page_documents enable row level security;
alter table public.site_page_revisions enable row level security;
alter table public.media_usage enable row level security;

create policy "admins can read their membership" on public.admin_members for select to authenticated using (user_id = auth.uid());
create policy "published documents are public" on public.site_page_documents for select using (published_blocks is not null);
create policy "admins manage documents" on public.site_page_documents for all to authenticated using (public.is_content_admin()) with check (public.is_content_admin());
create policy "admins read revisions" on public.site_page_revisions for select to authenticated using (public.is_content_admin());
create policy "admins create revisions" on public.site_page_revisions for insert to authenticated with check (public.is_content_admin() and created_by = auth.uid());
create policy "admins manage media usage" on public.media_usage for all to authenticated using (public.is_content_admin()) with check (public.is_content_admin());

drop trigger if exists site_page_documents_updated_at on public.site_page_documents;
create trigger site_page_documents_updated_at before update on public.site_page_documents for each row execute function public.set_content_updated_at();
