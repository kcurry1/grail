export function FeeComparison() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">
          Keep more of what you earn
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          See how much more you could make selling on Grail
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* eBay Card */}
          <div className="relative p-8 rounded-2xl border border-destructive/30 bg-destructive/5">
            <div className="absolute top-4 right-4 text-xs font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full">
              Other platforms
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">eBay</h3>
            <div className="text-5xl font-bold text-destructive mb-4">20-35%</div>
            <p className="text-muted-foreground mb-6">Total fees including final value, payment processing, and promoted listings</p>
            <div className="p-4 bg-background/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Sell a $100 card</p>
              <p className="text-2xl font-bold text-foreground">Keep <span className="text-destructive">$65-80</span></p>
            </div>
          </div>

          {/* Grail Card */}
          <div className="relative p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <div className="absolute top-4 right-4 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Recommended
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Grail</h3>
            <div className="text-5xl font-bold text-primary mb-4">6-12%</div>
            <p className="text-muted-foreground mb-6">All-in pricing. No hidden fees, no surprises, no promoted listing games</p>
            <div className="p-4 bg-background/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Sell a $100 card</p>
              <p className="text-2xl font-bold text-foreground">Keep <span className="text-primary">$88-94</span></p>
            </div>
          </div>
        </div>

        <div className="text-center p-6 rounded-xl bg-card border border-border">
          <p className="text-lg text-foreground">
            On a <span className="font-bold">$1,000</span> sale, you could save up to{" "}
            <span className="text-primary font-bold text-2xl">$290</span> with Grail
          </p>
        </div>
      </div>
    </section>
  )
}
