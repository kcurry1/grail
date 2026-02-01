import { WaitlistForm } from "@/components/waitlist-form"

export function FinalCTA() {
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

        <div className="mb-6">
          <WaitlistForm />
        </div>

        <p className="text-sm text-muted-foreground">
          Launching <span className="text-primary font-medium">Spring 2026</span>
        </p>
      </div>
    </section>
  )
}
