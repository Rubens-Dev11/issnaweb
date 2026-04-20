import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getFormation, getFiliere } from "@/data/filieres";
import {
  Clock, Award, GraduationCap, Briefcase, Check, ChevronDown,
  Phone, Mail, Download, MessageCircle, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const formation = getFormation(params.slug);
    if (!formation) throw notFound();
    const filiere = getFiliere(formation.filiereSlug);
    if (!filiere) throw notFound();
    return { formation, filiere };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.formation.name} — ISSNA` },
      { name: "description", content: loaderData?.formation.description },
      { property: "og:title", content: `${loaderData?.formation.name} — ${loaderData?.formation.diplome}` },
      { property: "og:description", content: loaderData?.formation.description },
    ],
  }),
  notFoundComponent: () => (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl">Formation introuvable</h1>
      <Link to="/filieres" className="text-brand-orange mt-4 inline-block">← Retour aux filières</Link>
    </section>
  ),
  component: FormationDetail,
});

function FormationDetail() {
  const data = Route.useLoaderData() as { formation: import("@/data/filieres").Formation; filiere: import("@/data/filieres").Filiere };
  const { formation, filiere } = data;
  const Icon = formation.icon;
  const color = filiere.color;

  return (
    <>
      {/* Header */}
      <section className={`bg-${color} text-white py-14`}>
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/filieres/$slug" params={{ slug: formation.filiereSlug }}
            className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1 mb-3"
          >
            ← {formation.filiereName}
          </Link>
          <div className="flex items-start gap-5">
            <div className="hidden md:flex h-16 w-16 rounded-xl bg-white/15 backdrop-blur items-center justify-center shrink-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-white text-3xl md:text-4xl font-bold">{formation.name}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {formation.cycles.map((c) => (
                  <span key={c} className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">{c}</span>
                ))}
                <span className="bg-brand-orange px-3 py-1 rounded-full text-sm font-semibold">{formation.duree.split("(")[0].trim()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Nos filières", to: "/filieres" },
        { label: formation.filiereName, to: "/filieres/$slug", params: { slug: formation.filiereSlug } },
        { label: formation.name },
      ]} />

      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-12">
            {/* En un coup d'œil */}
            <div>
              <h2 className="text-2xl font-bold mb-6">En un coup d'œil</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Glance icon={Clock} label="Durée" value={formation.duree} color={color} />
                <Glance icon={Award} label="Diplôme" value={formation.diplome} color={color} />
                <Glance icon={GraduationCap} label="Conditions d'accès" value={formation.acces} color={color} />
                <Glance icon={Briefcase} label="Débouchés" value={formation.shortDebouches} color={color} />
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Présentation</h2>
              <p className="text-muted-foreground leading-relaxed">{formation.description}</p>
            </div>

            {/* Programme */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Programme de formation</h2>
              <div className="space-y-3">
                {formation.programme.map((bloc, i) => (
                  <ProgrammeAccordion key={i} bloc={bloc} defaultOpen={i === 0} />
                ))}
              </div>
            </div>

            {/* Débouchés */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Débouchés professionnels</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {formation.debouches.map((d) => (
                  <div key={d} className="flex items-center gap-3 bg-surface-alt rounded-lg p-4 border border-border/60">
                    <div className={`h-10 w-10 rounded-lg bg-${color}/10 text-${color} flex items-center justify-center shrink-0`}>
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Conditions d'admission</h2>
              <ul className="space-y-3">
                {formation.conditions.map((c) => (
                  <li key={c} className="flex gap-3 items-start">
                    <span className="h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final CTA */}
            <Link
              to="/preinscription"
              className="block text-center w-full rounded-lg bg-brand-orange text-white font-semibold py-4 text-lg hover:bg-brand-orange/90 transition-colors shadow-md"
            >
              Je me préinscris à cette formation <ArrowRight className="inline h-5 w-5 ml-2" />
            </Link>
          </div>

          {/* Sticky Sidebar — Quick Contact */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-card-hover)]">
              <h3 className="text-lg font-semibold mb-1">Demander des infos</h3>
              <p className="text-sm text-muted-foreground mb-5">Notre équipe vous recontacte sous 24h.</p>
              <QuickContactForm formationName={formation.name} />
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white rounded-xl p-6 shadow-[var(--shadow-card)]">
              <Download className="h-7 w-7 text-brand-orange mb-3" />
              <h3 className="text-white text-base font-semibold mb-2">Brochure {formation.name}</h3>
              <p className="text-sm text-white/85 mb-4">Programme détaillé et frais de scolarité.</p>
              <button className="w-full rounded-lg bg-brand-orange hover:bg-brand-orange/90 font-semibold py-2.5 transition-colors text-sm">
                Télécharger
              </button>
            </div>

            <a
              href="https://wa.me/237650403397"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:border-brand-orange transition-colors"
            >
              <span className="h-10 w-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "#25D366" }}>
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">Discuter sur WhatsApp</div>
                <div className="text-xs text-muted-foreground">Réponse rapide</div>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

function Glance({ icon: Icon, label, value, color }: { icon: typeof Clock; label: string; value: string; color: string }) {
  return (
    <div className="bg-surface-alt rounded-xl p-5 border border-border/60">
      <div className={`h-10 w-10 rounded-lg bg-${color}/10 text-${color} flex items-center justify-center mb-3`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{label}</div>
      <div className="mt-1 text-sm font-medium leading-snug">{value}</div>
    </div>
  );
}

function ProgrammeAccordion({ bloc, defaultOpen }: { bloc: { titre: string; modules: string[] }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors text-left"
      >
        <span className="font-semibold">{bloc.titre}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-border animate-fade-in">
          <ul className="grid sm:grid-cols-2 gap-2 mt-3">
            {bloc.modules.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function QuickContactForm({ formationName }: { formationName: string }) {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="h-12 w-12 rounded-full bg-brand-green text-white mx-auto mb-3 flex items-center justify-center">
          <Check className="h-6 w-6" />
        </div>
        <p className="font-semibold text-sm">Demande envoyée !</p>
        <p className="text-xs text-muted-foreground mt-1">Nous vous recontactons rapidement.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="hidden" value={formationName} />
      <input
        required type="text" placeholder="Nom complet"
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          required type="tel" placeholder="Téléphone"
          className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="email" placeholder="Email"
          className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-orange text-white font-semibold py-2.5 text-sm hover:bg-brand-orange/90 transition-colors"
      >
        Être recontacté(e)
      </button>
    </form>
  );
}
