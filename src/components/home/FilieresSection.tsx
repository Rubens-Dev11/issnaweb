import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { filieres } from "@/data/filieres";

export function FilieresSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Choisissez votre filière</h2>
          <p className="mt-4 text-muted-foreground">
            Des formations professionnelles adaptées aux besoins du marché camerounais et africain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filieres.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.slug}
                to="/filieres/$slug"
                params={{ slug: f.slug }}
                className="reveal group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/60 flex flex-col sm:flex-row"
              >
                <div className="sm:w-32 h-40 sm:h-auto relative shrink-0 overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-${f.color}/10 mix-blend-multiply`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className={`h-8 w-8 text-white drop-shadow-md`} />
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug">{f.name}</h3>
                    <span className={`shrink-0 text-xs font-semibold uppercase tracking-wide bg-${f.color}/10 text-${f.color} px-2.5 py-1 rounded-full`}>
                      {f.formationSlugs.length} spé.
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:gap-2 transition-all">
                    Voir les spécialités <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
