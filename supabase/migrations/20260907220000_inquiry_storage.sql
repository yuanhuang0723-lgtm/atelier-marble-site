-- Private storage for customer-provided inquiry files. No object policies are
-- created: signed upload/download URLs and the server service role are the
-- only access paths used by the application.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'inquiry-files',
  'inquiry-files',
  false,
  26214400,
  array[
    'application/pdf',
    'application/acad',
    'application/dxf',
    'application/octet-stream',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/jpeg',
    'image/png',
    'application/zip',
    'application/x-zip-compressed'
  ]::text[]
)
on conflict (id) do update set
  name = excluded.name,
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create table if not exists public.inquiry_idempotency (
  idempotency_key text primary key,
  request_hash text not null,
  status text not null check (status in ('processing', 'sent', 'pending', 'failed')),
  response_message text,
  created_at timestamptz not null default timezone('utc', now()),
  completed_at timestamptz
);

alter table public.inquiry_idempotency enable row level security;

revoke all on table public.inquiry_idempotency from anon, authenticated;
grant all on table public.inquiry_idempotency to service_role;

