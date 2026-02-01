import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function addToWaitlist(email: string, source?: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, source }])
    .select()

  if (error) {
    // Check if it's a duplicate email error
    if (error.code === '23505') {
      return { success: true, alreadyExists: true }
    }
    throw error
  }

  return { success: true, data }
}
