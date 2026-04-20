import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    title: "Rentrée académique 2024-2025 : inscriptions ouvertes",
    excerpt: "Les inscriptions pour la nouvelle année académique sont ouvertes. Constituez votre dossier dès maintenant.",
    date: "15 Sept. 2024",
    category: "Campus",
    categoryColor: "bg-brand-blue/10 text-brand-blue",
    gradient: "from-brand-blue to-brand-green",
  },
  {
    title: "Journée portes ouvertes : venez découvrir l'ISSNA",
    excerpt: "Visitez nos campus, échangez avec les enseignants et étudiants pour mieux préparer votre orientation.",
    date: "3 Oct. 2024",
    category: "Événements",
    categoryColor: "bg-brand-orange/10 text-brand-orange",
    gradient: "from-brand-orange to-brand-blue",
  },
  {
    title: "Nos étudiants en stage au CHU de Douala",
    excerpt: "Découvrez le retour d'expérience de nos étudiants infirmiers en stage clinique au CHU de Douala.",
    date: "20 Nov. 2024",
    category: "Vie étudiante",
    categoryColor: "bg-brand-green/10 text-brand-green",
    gradient: "from-brand-green to-brand-orange",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Actualités de l'ISSNA</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="reveal bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-1 border border-border/60 flex flex-col"
            >
              <div className={`h-44 bg-gradient-to-br ${n.gradient} relative`}>
                <span className={`absolute top-4 left-4 ${n.categoryColor} bg-white/95 text-xs font-semibold px-3 py-1 rounded-full`}>
                  {n.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  {n.date}
                </div>
                <h3 className="text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{n.excerpt}</p>
                <Link to="/actualites" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:gap-2 transition-all">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-blue text-brand-blue px-6 py-3 font-semibold hover:bg-brand-blue hover:text-white transition-colors"
          >
            Voir toutes les actualités <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
