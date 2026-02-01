import { ScanLine, ShieldCheck, Zap } from "lucide-react"

const steps = [
  {
    icon: ScanLine,
    step: "01",
    title: "List in seconds",
    description: "Scan or upload your card. Our AI fills in the details automatically.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Sell with confidence",
    description: "Secure payments and seller protection on every transaction.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Get paid fast",
    description: "Low fees and quick payouts. Keep more of what you earn.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">
          How it works
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Start selling in three simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary/5 border border-primary/20" />
                  <div className="absolute inset-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
