import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import logo from "@/assets/issna-logo.jpg";
import { formations } from "@/data/filieres";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-blue">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-orange-foreground hover:bg-brand-orange/90 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "ISSNA — Institut Supérieur de Santé et de Nutrition Appliquée",
  "url": "https://issna-douala.com",
  "logo": "https://issna-douala.com/issna-logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ndogbong",
    "addressLocality": "Douala",
    "addressCountry": "CM"
  },
  "telephone": "+237650403397",
  "email": "ifpscid@gmail.com"
};

const coursesSchema = formations.map(f => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": f.name,
  "description": f.description,
  "provider": {
    "@type": "EducationalOrganization",
    "name": "ISSNA",
    "sameAs": "https://issna-douala.com"
  }
}));

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ISSNA Douala | Institut Supérieur de Santé et de Nutrition Appliquée" },
      { name: "description", content: "L'ISSNA forme des professionnels de santé, biologistes et agronomes à Douala. BTS, HND, Licence et Master. Autorisation MINESUP. Inscriptions ouvertes." },
      { name: "author", content: "ISSNA" },
      { property: "og:title", content: "ISSNA Douala | Institut Supérieur de Santé et de Nutrition Appliquée" },
      { property: "og:description", content: "L'ISSNA forme des professionnels de santé, biologistes et agronomes à Douala. BTS, HND, Licence et Master." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logo },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([schemaOrg, ...coursesSchema]),
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // On utilise requestAnimationFrame pour s'assurer que le DOM est prêt après le changement de route
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
