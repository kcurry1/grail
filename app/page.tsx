import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeeComparison } from "@/components/fee-comparison"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <FeeComparison />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="cta">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
