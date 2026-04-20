const partners = [
  "MINESUP Cameroun",
  "Université de Douala",
  "IFPSCID",
  "Ministère de la Santé",
  "CHU de Douala",
];

export function PartnersSection() {
  // Duplicate for infinite scroll effect
  const items = [...partners, ...partners];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nos partenaires et tutelles</h2>
          <p className="mt-4 text-muted-foreground">
            L'ISSNA est sous tutelle académique et entretient des partenariats avec des institutions reconnues.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite]" style={{ width: "max-content" }}>
            {items.map((p, i) => (
              <div
                key={i}
                className="shrink-0 w-56 h-24 rounded-xl bg-surface-alt border border-border flex items-center justify-center text-center px-4 font-display font-semibold text-brand-blue"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
