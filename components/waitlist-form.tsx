"use client"

import React from "react"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions/waitlist"
import { Loader2 } from "lucide-react"

interface WaitlistFormProps {
  onSuccess?: () => void
  redirectOnSuccess?: boolean
}

export function WaitlistForm({ onSuccess, redirectOnSuccess = true }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    startTransition(async () => {
      const result = await joinWaitlist(email)
      setMessage(result.message)
      setIsSuccess(result.success)
      if (result.success) {
        setEmail("")
        onSuccess?.()
        if (redirectOnSuccess) {
          router.push("/preview")
        }
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          required
          disabled={isPending}
        />
        <Button 
          type="submit" 
          className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isSuccess ? (
            "You're in!"
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>
      {message && (
        <p className={`text-sm ${isSuccess ? "text-primary" : "text-destructive"}`}>
          {message}
        </p>
      )}
    </div>
  )
}
