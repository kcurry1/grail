-- Create waitlist table for storing email signups
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for waitlist signups without auth)
CREATE POLICY "Allow anonymous inserts" ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow service role to read all entries (for admin purposes)
CREATE POLICY "Allow service role to read" ON public.waitlist
  FOR SELECT
  USING (true);
