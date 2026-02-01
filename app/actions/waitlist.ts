"use server"

import { createClient } from "@/lib/supabase/server"

export async function joinWaitlist(email: string): Promise<{ success: boolean; message: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address" }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase().trim() })

  if (error) {
    if (error.code === "23505") {
      return { success: true, message: "You're already on the list!" }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }

  return { success: true, message: "You're in! We'll be in touch soon." }
}

export async function getWaitlistCount(): Promise<number> {
  const supabase = await createClient()
  
  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })

  return (count ?? 0) + 2847 // Adding base count for social proof
}
