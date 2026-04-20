import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Ngo B.",
    initials: "MN",
    color: "bg-brand-blue",
    filiere: "Sciences Infirmières",
    text: "Grâce à l'ISSNA j'ai pu intégrer le CHU de Douala après mon HND. L'encadrement était vraiment sérieux.",
  },
  {
    name: "Jean-Paul T.",
    initials: "JP",
    color: "bg-brand-green",
    filiere: "Génie Biologique",
    text: "Les cours pratiques en laboratoire m'ont donné une vraie expérience avant même de finir mes études.",
  },
  {
    name: "Fatou D.",
    initials: "FD",
    color: "bg-brand-orange",
    filiere: "Agriculture",
    text: "Je gère aujourd'hui ma propre ferme grâce aux bases solides reçues à l'ISSNA.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Ils nous font confiance</h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal snap-center shrink-0 w-[85%] md:w-auto bg-card rounded-xl p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow border border-border/60 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">« {t.text} »</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className={`h-12 w-12 rounded-full ${t.color} text-white flex items-center justify-center font-semibold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Filière {t.filiere}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
