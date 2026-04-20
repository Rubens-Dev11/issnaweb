import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/issna-logo.jpg";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const filieres = [
  { slug: "genie-biologique", label: "Génie Biologique" },
  { slug: "agriculture-elevage", label: "Agriculture & Élevage" },
  { slug: "etudes-medico-sanitaires", label: "Études Médico-sanitaires" },
  { slug: "sciences-techniques-biomedicales", label: "Sciences & Techniques Biomédicales" },
  { slug: "economie-sociale-familiale", label: "Économie Sociale & Familiale" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [filieresOpen, setFilieresOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkCls =
    "text-sm font-medium text-foreground hover:text-brand-orange transition-colors duration-200";

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 border-b",
      scrolled 
        ? "bg-background/95 backdrop-blur shadow-md border-border/50 py-1" 
        : "bg-background border-transparent py-2"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="ISSNA — Institut Supérieur de Santé et de Nutrition Appliquée" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={navLinkCls} activeProps={{ className: "text-brand-orange font-semibold" }} activeOptions={{ exact: true }}>Accueil</Link>
            <Link to="/notre-ecole" className={navLinkCls} activeProps={{ className: "text-brand-orange font-semibold" }}>Notre école</Link>

            <div
              className="relative"
              onMouseEnter={() => setFilieresOpen(true)}
              onMouseLeave={() => setFilieresOpen(false)}
            >
              <Link to="/filieres" className={`${navLinkCls} flex items-center gap-1`} activeProps={{ className: "text-brand-orange font-semibold" }}>
                Nos filières <ChevronDown className="h-4 w-4" />
              </Link>
              {filieresOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-card rounded-lg shadow-[var(--shadow-card-hover)] border border-border py-2">
                    {filieres.map((f) => (
                      <Link
                        key={f.slug}
                        to="/filieres/$slug"
                        params={{ slug: f.slug }}
                        className="block px-4 py-2 text-sm hover:bg-secondary hover:text-brand-orange transition-colors"
                      >
                        {f.label}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-border" />
                    <Link to="/filieres" className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-secondary">
                      Voir toutes les filières →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/actualites" className={navLinkCls} activeProps={{ className: "text-brand-orange font-semibold" }}>Actualités</Link>
            <Link to="/contact" className={navLinkCls} activeProps={{ className: "text-brand-orange font-semibold" }}>Contact</Link>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+237650403397" className="flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-orange transition-colors">
              <Phone className="h-4 w-4" />
              +237 650 40 33 97
            </a>

            <button
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-brand-orange transition-colors px-2 py-1 border border-border rounded-md"
              aria-label="Changer de langue"
            >
              <Globe className="h-4 w-4" />
              {lang}
            </button>

            <Link
              to="/preinscription"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-orange-foreground shadow-sm hover:bg-brand-orange/90 transition-all duration-200 hover:shadow-md"
            >
              Se préinscrire
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-blue"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 border-t border-border pt-4 space-y-2">
            <Link to="/" className="block py-2 font-medium" onClick={() => setOpen(false)}>Accueil</Link>
            <Link to="/notre-ecole" className="block py-2 font-medium" onClick={() => setOpen(false)}>Notre école</Link>
            <Link to="/filieres" className="block py-2 font-medium" onClick={() => setOpen(false)}>Nos filières</Link>
            <div className="pl-4 space-y-1">
              {filieres.map((f) => (
                <Link
                  key={f.slug}
                  to="/filieres/$slug"
                  params={{ slug: f.slug }}
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  → {f.label}
                </Link>
              ))}
            </div>
            <Link to="/actualites" className="block py-2 font-medium" onClick={() => setOpen(false)}>Actualités</Link>
            <Link to="/contact" className="block py-2 font-medium" onClick={() => setOpen(false)}>Contact</Link>
            <a href="tel:+237650403397" className="flex items-center gap-2 py-2 text-brand-blue font-medium">
              <Phone className="h-4 w-4" /> +237 650 40 33 97
            </a>
            <Link
              to="/preinscription"
              onClick={() => setOpen(false)}
              className="block text-center mt-3 rounded-lg bg-brand-orange px-5 py-3 font-semibold text-brand-orange-foreground"
            >
              Se préinscrire
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
