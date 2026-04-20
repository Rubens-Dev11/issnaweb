import { Link } from "@tanstack/react-router";
import { FlaskConical, Sprout, Stethoscope, Microscope, HeartHandshake, ArrowRight } from "lucide-react";

const filieres = [
  {
    slug: "genie-biologique",
    icon: FlaskConical,
    title: "Génie Biologique",
    count: 4,
    desc: "Analyses biologiques, diététique, agroalimentaire et biotechnologie.",
  },
  {
    slug: "agriculture-elevage",
    icon: Sprout,
    title: "Agriculture et Élevage",
    count: 3,
    desc: "Production animale, végétale et entrepreneuriat agropastoral.",
  },
  {
    slug: "etudes-medico-sanitaires",
    icon: Stethoscope,
    title: "Études Médico-sanitaires",
    count: 4,
    desc: "Sciences infirmières, sage-femme, kinésithérapie, optique.",
  },
  {
    slug: "sciences-techniques-biomedicales",
    icon: Microscope,
    title: "Sciences et Techniques Biomédicales",
    count: 2,
    desc: "Laboratoire biomédical et techniques pharmaceutiques.",
  },
  {
    slug: "economie-sociale-familiale",
    icon: HeartHandshake,
    title: "Économie Sociale et Familiale",
    count: 2,
    desc: "Puériculture et gérontologie.",
  },
];

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
                className="reveal group bg-card rounded-xl p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-1 border border-border/60 flex gap-5"
              >
                <div className="shrink-0 h-14 w-14 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug">{f.title}</h3>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wide bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full">
                      {f.count} spé.
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
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
