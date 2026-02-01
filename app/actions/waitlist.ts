"use server"

import { createClient } from "@/lib/supabase/server"

export async function joinWaitlist(email: string): Promise<{ success: boolean; message: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address" }
  }

  try {
    const supabase = await createClient()

    if (!supabase) {
      console.error("Supabase not configured")
      return { success: false, message: "Something went wrong. Please try again." }
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() })

    if (error) {
      if (error.code === "23505") {
        return { success: true, message: "You're already on the list!" }
      }
      console.error("Error joining waitlist:", error)
      return { success: false, message: "Something went wrong. Please try again." }
    }

    return { success: true, message: "You're in! We'll be in touch soon." }
  } catch (error) {
    console.error("Error connecting to database:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = await createClient()

    if (!supabase) {
      return 2847 // Return base count if Supabase not configured
    }
    
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })

    if (error) {
      console.error("Error fetching waitlist count:", error)
      return 2847 // Return base count on error
    }

    return (count ?? 0) + 2847 // Adding base count for social proof
  } catch (error) {
    console.error("Error connecting to database:", error)
    return 2847 // Return base count on connection error
  }
}
