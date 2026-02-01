"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addToWaitlist } from "@/lib/supabase"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      await addToWaitlist(email, "footer-cta")
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          Ready to sell smarter?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join the waitlist and be the first to know when we launch.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            required
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Joining..." : isSubmitted ? "You're in!" : "Join the Waitlist"}
          </Button>
        </form>

        {error && (
          <p className="text-sm text-red-500 mb-2">{error}</p>
        )}

        <p className="text-sm text-muted-foreground">
          Launching <span className="text-primary font-medium">Spring 2026</span>
        </p>
      </div>
    </section>
  )
}
