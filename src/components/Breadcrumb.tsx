import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="bg-surface-alt border-b border-border" aria-label="Fil d'Ariane">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-brand-orange transition-colors">
              <Home className="h-3.5 w-3.5" /> Accueil
            </Link>
          </li>
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              {it.to ? (
                <Link
                  to={it.to}
                  params={it.params as never}
                  className="text-muted-foreground hover:text-brand-orange transition-colors"
                >
                  {it.label}
                </Link>
              ) : (
                <span className="font-medium text-brand-blue">{it.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
