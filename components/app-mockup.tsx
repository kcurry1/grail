import { Search, Heart, Home, User, ShoppingBag } from "lucide-react"

export function AppMockup() {
  const cards = [
    { name: "LeBron James", year: "2003 Topps Chrome", price: "$12,500", grade: "PSA 10" },
    { name: "Michael Jordan", year: "1986 Fleer", price: "$45,000", grade: "BGS 9.5" },
    { name: "Shohei Ohtani", year: "2018 Topps Chrome", price: "$2,800", grade: "PSA 10" },
  ]

  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      {/* iPhone Frame */}
      <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl z-10" />
        
        {/* Screen */}
        <div className="relative bg-background rounded-[2.5rem] overflow-hidden" style={{ height: 560 }}>
          {/* Status Bar */}
          <div className="flex items-center justify-between px-8 pt-4 pb-2">
            <span className="text-xs font-medium text-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-foreground rounded-sm" />
              <div className="w-4 h-2 bg-foreground rounded-sm" />
              <div className="w-6 h-3 bg-foreground rounded-sm" />
            </div>
          </div>

          {/* App Header */}
          <div className="px-4 pt-2 pb-3">
            <h2 className="text-lg font-bold text-foreground">Grail</h2>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-xl border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Search cards...</span>
            </div>
          </div>

          {/* Featured Section */}
          <div className="px-4 pb-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Trending</h3>
          </div>

          {/* Card List */}
          <div className="px-4 space-y-2">
            {cards.map((card, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <div className="w-12 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-10 bg-primary/30 rounded" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{card.name}</p>
                  <p className="text-xs text-muted-foreground">{card.year}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-primary">{card.price}</span>
                    <span className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded">{card.grade}</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-card rounded-full">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-6 py-4 bg-card border-t border-border">
            <Home className="w-5 h-5 text-primary" />
            <Search className="w-5 h-5 text-muted-foreground" />
            <ShoppingBag className="w-5 h-5 text-muted-foreground" />
            <Heart className="w-5 h-5 text-muted-foreground" />
            <User className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </div>
  )
}
