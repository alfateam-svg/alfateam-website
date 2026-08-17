-- Alfa Team Invest — Supabase schema
-- Run this in Supabase SQL Editor (Project > SQL Editor > New query)

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  status text default 'active', -- active | archived
  category text not null,        -- industrial | commercial | land | office
  title_en text not null,
  title_ro text not null,
  description_en text,
  description_ro text,
  city text,
  country text,
  lat double precision,
  lng double precision,
  size_sqm numeric,
  price_eur numeric,
  price_on_request boolean default false,
  ref_code text,                 -- e.g. AT-0042, spec-sheet style callout
  cover_image text,
  images text[] default '{}',
  featured boolean default false
);

-- Public can read active listings only
alter table listings enable row level security;

create policy "Public read active listings"
  on listings for select
  using (status = 'active');

-- Only authenticated users (you, the admin) can insert/update/delete
create policy "Admin full access"
  on listings for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket for listing images (create via Dashboard > Storage > New bucket, name: listing-images, public)
