-- InitDev SMS lead-qualification agent — core schema
-- Run in the Supabase SQL editor (or via the Supabase CLI: `supabase db push`).

-- ─── Leads ───────────────────────────────────────────────────
create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  name            text,
  email           text,
  company         text,
  phone           text,
  project_type    text,
  budget          text,
  timeline        text,
  message         text,
  referral_source text,
  -- TCPA: only text leads who explicitly opted in
  sms_consent     boolean not null default false,
  -- new | contacted | qualifying | qualified | disqualified | booked
  status          text not null default 'new',
  -- LLM-extracted read: { budget_ok, timeline_ok, collaborative, excluded, notes }
  qualification   jsonb,
  source_page     text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  last_contacted_at timestamptz
);

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_phone_idx on public.leads (phone);
create index if not exists leads_last_contacted_idx on public.leads (last_contacted_at);

-- ─── Messages (SMS conversation log) ─────────────────────────
create table if not exists public.messages (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid not null references public.leads(id) on delete cascade,
  direction   text not null check (direction in ('inbound', 'outbound')),
  body        text not null,
  twilio_sid  text,
  created_at  timestamptz not null default now()
);

create index if not exists messages_lead_id_idx on public.messages (lead_id, created_at);

-- ─── updated_at trigger ──────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ─── Row Level Security ──────────────────────────────────────
-- Server-side routes use the service-role key, which bypasses RLS.
-- Enable RLS so nothing is readable/writable with the public anon key.
alter table public.leads enable row level security;
alter table public.messages enable row level security;
