import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Calendar, User, ArrowRight, ChevronRight, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import soutenance from "@/assets/soutenance2024.png";
import sout1 from "@/assets/sout1.png";
import act3 from "@/assets/activit3.png";
import act4 from "@/assets/activit4.png";
import act5 from "@/assets/activit5.png";
import labo from "@/assets/labo.png";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités et Événements | ISSNA Douala" },
      { name: "description", content: "Suivez les dernières actualités, événements et annonces de l'ISSNA. Vie étudiante, nouvelles formations et vie du campus." },
      { property: "og:title", content: "Actualités et Événements | ISSNA" },
      { property: "og:description", content: "Dernières actualités et événements de l'ISSNA à Douala." },
    ],
  }),
  component: ActualitesPage,
});

const CATEGORIES = ["Tous", "Campus", "Événements", "Formations", "Vie étudiante"];

const ARTICLES = [
  {
    id: 1,
    title: "Cérémonie de remise des diplômes 2025",
    excerpt: "Retour sur la journée mémorable célébrant le succès de nos étudiants en sciences infirmières et biologie.",
    category: "Événements",
    date: "15 Avril 2026",
    author: "Administration",
    image: soutenance
  },
  {
    id: 2,
    title: "Nouveau partenariat avec l'Hôpital Général",
    excerpt: "L'ISSNA renforce ses liens avec le milieu hospitalier pour offrir des stages d'excellence à ses étudiants.",
    category: "Campus",
    date: "10 Avril 2026",
    author: "Direction",
    image: sout1
  },
  {
    id: 3,
    title: "Ouverture de la filière Gérontologie",
    excerpt: "Découvrez notre nouvelle formation dédiée à l'accompagnement des personnes âgées, un secteur porteur.",
    category: "Formations",
    date: "05 Avril 2026",
    author: "Pédagogie",
    image: act3
  },
  {
    id: 4,
    title: "Journée Portes Ouvertes : Succès total",
    excerpt: "Plus de 500 futurs étudiants ont visité nos deux campus ce weekend à Douala.",
    category: "Événements",
    date: "28 Mars 2026",
    author: "Communication",
    image: act4
  },
  {
    id: 5,
    title: "Conseils pour réussir son concours BTS",
    excerpt: "Nos enseignants partagent leurs meilleures astuces pour préparer sereinement les examens nationaux.",
    category: "Vie étudiante",
    date: "20 Mars 2026",
    author: "Prof. Sonfack",
    image: act5
  },
  {
    id: 6,
    title: "Modernisation des laboratoires de biologie",
    excerpt: "De nouveaux équipements de pointe arrivent au campus Zatchmann pour les travaux pratiques.",
    category: "Campus",
    date: "12 Mars 2026",
    author: "Direction",
    image: labo
  }
];

function ActualitesPage() {
  const [activeCat, setActiveCat] = useState("Tous");
  const [search, setSearch] = useState("");

  const filteredArticles = ARTICLES.filter(art => {
    const matchesCat = activeCat === "Tous" || art.category === activeCat;
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Actualités & Événements</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Suivez la vie de l'institut, nos projets et les réussites de nos étudiants.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Actualités" }]} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            
            {/* Main Content */}
            <div className="space-y-10">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <Button
                    key={cat}
                    variant={activeCat === cat ? "default" : "outline"}
                    className={activeCat === cat ? "bg-brand-blue text-white" : "text-muted-foreground"}
                    onClick={() => setActiveCat(cat)}
                    size="sm"
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredArticles.map(art => (
                  <article key={art.id} className="reveal group flex flex-col bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={art.image} 
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-brand-orange text-white border-none">
                        {art.category}
                      </Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {art.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {art.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                        {art.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                        {art.excerpt}
                      </p>
                      <div className="mt-auto">
                        <Link to="/actualites" className="inline-flex items-center gap-1 text-sm font-bold text-brand-orange hover:gap-2 transition-all">
                          Lire la suite <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Placeholder */}
              {filteredArticles.length > 0 && (
                <div className="flex justify-center pt-8">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" disabled><ChevronRight className="w-4 h-4 rotate-180" /></Button>
                    <Button variant="default" size="sm" className="bg-brand-blue">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="icon"><ChevronRight className="w-4 h-4" /></Button>
                  </div>
                </div>
              )}

              {filteredArticles.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">Aucun article ne correspond à votre recherche.</p>
                  <Button variant="link" onClick={() => {setActiveCat("Tous"); setSearch("");}}>
                    Voir tous les articles
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Search */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Recherche</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Rechercher..." 
                    className="pl-10"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Recent Articles */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Articles récents</h3>
                <div className="space-y-4">
                  {ARTICLES.slice(0, 3).map(art => (
                    <Link key={art.id} to="/actualites" className="group flex gap-3 items-center">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <img src={art.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                          {art.title}
                        </h4>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{art.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Mots-clés</h3>
                <div className="flex flex-wrap gap-2">
                  {["BTS", "HND", "Santé", "Douala", "Inscription", "Laboratoire", "Stage"].map(tag => (
                    <Badge key={tag} variant="secondary" className="hover:bg-brand-blue/10 hover:text-brand-blue cursor-pointer transition-colors">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
