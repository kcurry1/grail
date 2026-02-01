import { WaitlistForm } from "@/components/waitlist-form"
import { RotatingText } from "@/components/rotating-text"
import { getWaitlistCount } from "@/app/actions/waitlist"

export async function Hero() {
  const count = await getWaitlistCount()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Find your <RotatingText />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          The sports card marketplace that puts sellers first. Lower fees. Better tools. Support that actually helps.
        </p>

        <div className="mb-6">
          <WaitlistForm />
        </div>

        <p className="text-sm text-muted-foreground">
          Join <span className="text-primary font-medium">{count.toLocaleString()}</span> collectors already waiting
        </p>
      </div>
    </section>
  )
}
