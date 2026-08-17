# Alfa Team Invest — Website

Bilingual (EN/RO) commercial & industrial real estate site, with an admin panel backed by Supabase — same pattern as Rawport (Vercel + Supabase).

## 1. Create the Supabase project
1. Go to supabase.com → New project.
2. Once created: **SQL Editor → New query** → paste the contents of `supabase-schema.sql` → Run.
3. **Storage → New bucket** → name it `listing-images`, mark it public (for property photos).
4. **Authentication → Users → Add user** → create yourself an admin login (email + password). This is the only account that can log into `/admin`.

## 2. Connect the site to Supabase
Open `js/supabase-client.js` and replace:
```js
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";
```
Both values are in **Project Settings → API**.

## 3. Contact form (optional)
The contact form writes to an `inquiries` table. To enable it, run this in SQL Editor:
```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text, email text, message text
);
alter table inquiries enable row level security;
create policy "Anyone can submit" on inquiries for insert with check (true);
```
Or simpler: swap the form's submit handler for a `mailto:` link or Formspree if you don't want another table to manage.

## 4. Deploy
Push this folder to a GitHub repo, connect it to Vercel (static site, no build step needed) — same as your `rawport.online` setup. Point `alfateaminvest.ro` at the Vercel deployment.

## 5. Using the admin panel
Go to `yourdomain.ro/admin`, log in with the Supabase user you created, and add listings. Each listing needs:
- Title + description in both languages
- Category (industrial / commercial / office / land)
- Reference code (e.g. `AT-0001`) — shown as the spec-sheet tag on listing cards
- Cover image URL (upload to the `listing-images` Storage bucket, copy the public URL)
- Mark "Featured" to show it on the homepage

## Structure
```
index.html          → homepage
listings.html        → full listings grid with category filters
listing.html          → single listing detail (?id=...)
about.html, contact.html
admin/index.html      → login + CRUD panel
css/style.css          → design system
js/lang.js              → EN/RO dictionary + toggle
js/listings.js           → Supabase queries + rendering
js/chrome.js              → shared header/footer
js/supabase-client.js      → your project keys go here
```

## Adding a blog or agent bios later
Not built yet to keep the first version shippable. When ready: add an `agents` table (name, bio, photo, email) and a `posts` table (title/body per language, slug, published_at) — same CRUD pattern as listings, and I can build those pages/admin sections on request.
