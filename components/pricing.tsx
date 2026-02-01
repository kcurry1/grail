"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    commission: "12%",
    features: ["50 active listings/month", "Basic seller tools", "Email support", "Standard payouts"],
    popular: false,
  },
  {
    name: "Plus",
    price: "$39",
    period: "/month",
    commission: "9%",
    features: ["Up to 200 active listings", "AI-powered pricing", "Priority support", "Faster payouts"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    commission: "7%",
    features: ["Up to 1,000 active listings", "Advanced analytics", "24/7 support", "Instant payouts"],
    popular: true,
  },
  {
    name: "Shop",
    price: "$149",
    period: "/month",
    commission: "6%",
    features: ["Unlimited listings", "Custom storefront", "Dedicated account manager", "Volume discounts"],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-16 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">
          Plans for every seller
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Start free, upgrade as you grow
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border ${
                plan.popular
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              } transition-all duration-300 hover:border-primary/50`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-primary-foreground bg-primary px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <div className="text-primary font-semibold mb-6">{plan.commission} commission</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Join Waitlist
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Join the waitlist for <span className="text-primary font-medium">early access pricing</span> and exclusive launch offers
        </p>
      </div>
    </section>
  )
}
