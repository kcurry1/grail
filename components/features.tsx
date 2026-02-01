import { Percent, MessageCircle, Layers } from "lucide-react"

const features = [
  {
    icon: Percent,
    title: "Lowest Fees",
    description: "Simple, all-in pricing. No hidden costs. No promoted listing games.",
  },
  {
    icon: MessageCircle,
    title: "Instant Support",
    description: "24/7 AI-powered text support. Real answers in seconds, not days.",
  },
  {
    icon: Layers,
    title: "Built for Cards",
    description: "Scan to list. Smart pricing. Made by collectors, for collectors.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">
          Why sellers choose Grail
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Everything you need to sell smarter, not harder
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
