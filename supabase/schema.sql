-- =============================================================================
-- Airport Energy — Supabase schema
-- =============================================================================
-- Run this once in your Supabase project (SQL Editor → New query → Run).
-- It creates the tables, Row-Level-Security policies and the
-- `update_fuel_price` RPC the admin panel uses.
-- Safe to re-run: every statement is idempotent / guarded.
-- =============================================================================

-- ---- 1. Live fuel prices (single row per fuel type) ------------------------
create table if not exists public.fuel_prices (
  fuel_type      text primary key,
  price          numeric(10, 3) not null check (price > 0),
  previous_price numeric(10, 3),
  updated_at     timestamptz not null default now(),
  updated_by     uuid references auth.users(id)
);

-- Seed the two rows the public site reads. ON CONFLICT keeps existing values
-- so re-running the migration won't reset prices you've already edited.
insert into public.fuel_prices (fuel_type, price, previous_price)
values
  ('petrol', 1.739, 1.759),
  ('diesel', 1.689, 1.679)
on conflict (fuel_type) do nothing;

-- ---- 2. Audit log of every price change ------------------------------------
create table if not exists public.price_changes (
  id               bigserial primary key,
  fuel_type        text not null,
  old_price        numeric(10, 3),
  new_price        numeric(10, 3) not null,
  changed_at       timestamptz not null default now(),
  changed_by       uuid references auth.users(id),
  changed_by_email text
);

create index if not exists price_changes_changed_at_idx
  on public.price_changes (changed_at desc);

-- ---- 3. Row-Level Security --------------------------------------------------
alter table public.fuel_prices    enable row level security;
alter table public.price_changes  enable row level security;

-- Anyone (including anonymous visitors) can READ the live prices.
drop policy if exists "Public can read fuel prices" on public.fuel_prices;
create policy "Public can read fuel prices"
  on public.fuel_prices for select
  using (true);

-- Only signed-in staff can read the audit log.
drop policy if exists "Authenticated can read audit log" on public.price_changes;
create policy "Authenticated can read audit log"
  on public.price_changes for select
  to authenticated
  using (true);

-- Notice we do NOT add UPDATE/INSERT/DELETE policies on either table.
-- All writes must go through the security-definer function below, so we
-- can audit every change and validate inputs centrally.

-- ---- 4. The single RPC the admin panel calls -------------------------------
-- Updates a fuel price + appends an audit row in one transaction.
create or replace function public.update_fuel_price(
  p_fuel_type text,
  p_new_price numeric
)
returns public.fuel_prices
language plpgsql
security definer
set search_path = public
as $$
declare
  current_row public.fuel_prices;
  new_row     public.fuel_prices;
begin
  -- Auth gate
  if auth.uid() is null then
    raise exception 'Not authenticated' using errcode = '42501';
  end if;

  -- Validate
  if p_new_price is null or p_new_price <= 0 then
    raise exception 'Price must be a positive number';
  end if;

  if round(p_new_price::numeric, 3) <> p_new_price then
    raise exception 'Price supports up to 3 decimal places';
  end if;

  if p_fuel_type not in ('petrol', 'diesel') then
    raise exception 'Unknown fuel type: %', p_fuel_type;
  end if;

  -- Snapshot current value
  select * into current_row from public.fuel_prices where fuel_type = p_fuel_type;

  if not found then
    raise exception 'Fuel type % not seeded', p_fuel_type;
  end if;

  -- Idempotent no-op if the price is unchanged
  if current_row.price = p_new_price then
    return current_row;
  end if;

  -- Apply update
  update public.fuel_prices
     set previous_price = current_row.price,
         price          = p_new_price,
         updated_at     = now(),
         updated_by     = auth.uid()
   where fuel_type = p_fuel_type
   returning * into new_row;

  -- Append audit
  insert into public.price_changes
    (fuel_type, old_price, new_price, changed_by, changed_by_email)
  values
    (p_fuel_type, current_row.price, p_new_price, auth.uid(), auth.email());

  return new_row;
end;
$$;

-- Only authenticated users can call the function. Anonymous visitors cannot.
revoke all on function public.update_fuel_price(text, numeric) from public;
grant execute on function public.update_fuel_price(text, numeric) to authenticated;

-- =============================================================================
-- Setup (do this once in Supabase Dashboard after running this script)
-- =============================================================================
--  1. Authentication → Providers → Email: enable, DISABLE public sign-ups
--     (Settings → Authentication → "Allow new users to sign up" = off)
--  2. Authentication → Users → Add user → invite each staff member by email.
--     Confirm the address yourself so they can sign in immediately.
--  3. (Optional) Authentication → Email templates → customise the password
--     reset email with Airport Energy branding.
-- =============================================================================
