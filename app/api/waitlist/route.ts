import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    if (!supabase) {
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() })

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "You're already on the list!" },
          { status: 200 }
        )
      }
      console.error("Error joining waitlist:", error)
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    // Send welcome email if Resend is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: "Grail <onboarding@resend.dev>",
          to: email.toLowerCase().trim(),
          subject: "Welcome to the Grail Waitlist!",
          html: `
            <h1>You're on the list!</h1>
            <p>Thanks for joining the Grail waitlist. We'll keep you updated on our progress and let you know when we launch.</p>
            <p>Stay tuned!</p>
            <p>- The Grail Team</p>
          `,
        })
      } catch (emailError) {
        console.error("Error sending welcome email:", emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { success: true, message: "You're in! We'll be in touch soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing waitlist request:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
