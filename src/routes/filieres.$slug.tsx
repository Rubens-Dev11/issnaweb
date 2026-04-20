import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SidebarBrochure } from "@/components/SidebarBrochure";
import { filieres, getFiliere, getFormationsByFiliere, type Cycle } from "@/data/filieres";
import { ArrowRight, Lock } from "lucide-react";

export const Route = createFileRoute("/filieres/$slug")({
  loader: ({ params }) => {
    const filiere = getFiliere(params.slug);
    if (!filiere) throw notFound();
    return { filiere };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.filiere.name} — ISSNA` },
      { name: "description", content: loaderData?.filiere.shortDesc },
      { property: "og:title", content: `${loaderData?.filiere.name} — ISSNA` },
      { property: "og:description", content: loaderData?.filiere.shortDesc },
    ],
  }),
  notFoundComponent: () => (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl">Filière introuvable</h1>
      <Link to="/filieres" className="text-brand-orange mt-4 inline-block">← Retour aux filières</Link>
    </section>
  ),
  component: FiliereDetail,
});

const cycles: Cycle[] = ["BTS", "HND", "Licence Pro", "Master Pro"];

function FiliereDetail() {
  const { filiere } = Route.useLoaderData();
  const Icon = filiere.icon;
  const formations = getFormationsByFiliere(filiere.slug);
  const [activeCycle, setActiveCycle] = useState<Cycle>("BTS");

  const otherFilieres = filieres.filter((f) => f.slug !== filiere.slug);
  const isAvailable = (c: Cycle) => c === "BTS" || c === "HND";

  return (
    <>
      {/* Hero with thematic bg */}
      <section className={`bg-${filiere.color} text-white py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center gap-5">
            <div className="hidden md:flex h-20 w-20 rounded-2xl bg-white/15 backdrop-blur items-center justify-center">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Filière</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold">{filiere.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Nos filières", to: "/filieres" },
        { label: filiere.name },
      ]} />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {/* Description */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">À propos de la filière</h2>
              <p className="text-muted-foreground leading-relaxed">{filiere.longDesc}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cette filière propose <strong>{formations.length} spécialités</strong> en cycles BTS et HND, avec une approche
                équilibrée entre théorie, pratique de terrain et stages en milieu professionnel.
              </p>
            </div>

            {/* Cycle Tabs */}
            <div className="border-b border-border mb-8">
              <div className="flex flex-wrap gap-1">
                {cycles.map((c) => {
                  const active = activeCycle === c;
                  const available = isAvailable(c);
                  return (
                    <button
                      key={c}
                      onClick={() => available && setActiveCycle(c)}
                      disabled={!available}
                      className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                        active
                          ? "border-brand-orange text-brand-orange"
                          : available
                            ? "border-transparent text-muted-foreground hover:text-foreground"
                            : "border-transparent text-muted-foreground/50 cursor-not-allowed"
                      }`}
                    >
                      {c}
                      {!available && <Lock className="h-3 w-3" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specialités */}
            {isAvailable(activeCycle) ? (
              <div className="grid sm:grid-cols-2 gap-5">
                {formations.map((f) => {
                  const FIcon = f.icon;
                  return (
                    <Link
                      key={f.slug}
                      to="/formations/$slug"
                      params={{ slug: f.slug }}
                      className="group bg-card rounded-xl p-6 border border-border hover:border-brand-orange shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all hover:-translate-y-1"
                    >
                      <div className={`h-11 w-11 rounded-lg bg-${filiere.color}/10 text-${filiere.color} flex items-center justify-center mb-4`}>
                        <FIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-base leading-snug">{f.name}</h3>
                      <p className="mt-2 text-xs text-muted-foreground">{f.duree}</p>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{f.shortDebouches}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:gap-2 transition-all">
                        Voir la fiche <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="bg-surface-alt rounded-xl p-10 text-center">
                <Lock className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="font-semibold">Cycle {activeCycle}</p>
                <p className="text-sm text-muted-foreground mt-1">Disponible prochainement.</p>
              </div>
            )}

            {/* CTA */}
            <Link
              to="/preinscription"
              className="mt-10 block text-center w-full rounded-lg bg-brand-orange text-white font-semibold py-4 text-lg hover:bg-brand-orange/90 transition-colors shadow-md"
            >
              Je souhaite me préinscrire
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <SidebarBrochure />

            <div className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-card)]">
              <h3 className="text-base font-semibold mb-4">Nos autres filières</h3>
              <ul className="space-y-2">
                {otherFilieres.map((o) => {
                  const OIcon = o.icon;
                  return (
                    <li key={o.slug}>
                      <Link
                        to="/filieres/$slug"
                        params={{ slug: o.slug }}
                        className="flex items-center gap-3 text-sm py-2 px-3 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <OIcon className={`h-4 w-4 text-${o.color}`} />
                        <span className="flex-1 group-hover:text-brand-orange transition-colors">{o.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
