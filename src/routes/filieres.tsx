import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SidebarBrochure } from "@/components/SidebarBrochure";
import { filieres, getFormationsByFiliere } from "@/data/filieres";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/filieres")({
  head: () => ({
    meta: [
      { title: "Nos filières de formation | ISSNA Douala" },
      { name: "description", content: "5 filières et 14 spécialités : Génie Biologique, Agriculture, Sciences Infirmières, Biomédical, Économie Sociale. Formez-vous à Douala avec l'ISSNA." },
      { property: "og:title", content: "Nos filières de formation | ISSNA Douala" },
      { property: "og:description", content: "Découvrez les 5 filières de formation de l'ISSNA à Douala." },
    ],
  }),
  component: FilieresPage,
});

function FilieresPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Nos filières de formation</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            5 filières d'excellence, 14 spécialités professionnalisantes pour bâtir votre carrière.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Nos filières" }]} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Filières list */}
          <div className="space-y-8">
            {filieres.map((f) => {
              const Icon = f.icon;
              const specs = getFormationsByFiliere(f.slug);
              return (
                <article
                  key={f.slug}
                  className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow border border-border/60"
                >
                  <div className="grid md:grid-cols-[200px_1fr] gap-0">
                    {/* Visual */}
                    <div className={`h-40 md:h-full bg-${f.color} flex items-center justify-center text-white`}>
                      <Icon className="h-20 w-20 opacity-90" />
                    </div>
                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold uppercase tracking-wide bg-${f.color}/10 text-${f.color} px-2.5 py-1 rounded-full`}>
                          {specs.length} spécialités
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold">{f.name}</h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{f.longDesc}</p>

                      <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                        {specs.map((s) => (
                          <li key={s.slug} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                            <span>{s.name}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/filieres/$slug"
                        params={{ slug: f.slug }}
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange/90 transition-colors"
                      >
                        Découvrir <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <SidebarBrochure />
        </div>
      </section>
    </>
  );
}
