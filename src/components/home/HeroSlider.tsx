import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  image: string;
  title: React.ReactNode;
  subtitle: string;
  ctas: { label: string; to: string; variant: "primary" | "outline" }[];
};

const slides: Slide[] = [
  {
    image: hero1,
    title: <>Formez-vous aux métiers de la <span className="text-brand-orange">santé</span> et des <span className="text-brand-green">sciences du vivant</span></>,
    subtitle: "Des formations reconnues par l'État, tournées vers l'emploi",
    ctas: [
      { label: "Découvrir nos filières", to: "/filieres", variant: "primary" },
      { label: "Se préinscrire", to: "/preinscription", variant: "outline" },
    ],
  },
  {
    image: hero2,
    title: <>5 filières, <span className="text-brand-orange">14 spécialités</span> à Douala</>,
    subtitle: "Génie Biologique · Agriculture · Santé · Biomédical · Économie Sociale",
    ctas: [{ label: "Voir les filières", to: "/filieres", variant: "primary" }],
  },
  {
    image: hero3,
    title: <>Un institut autorisé, des <span className="text-brand-orange">diplômes valorisés</span></>,
    subtitle: "Arrêté MINESUP N° 002/MINEFOP — Sous tutelle des universités camerounaises",
    ctas: [{ label: "En savoir plus", to: "/notre-ecole", variant: "primary" }],
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" {...(i === 0 ? {} : { loading: "lazy" as const })} />
          <div className="absolute inset-0 bg-brand-blue/75" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl text-white animate-fade-in" key={current}>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {s.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90">{s.subtitle}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  {s.ctas.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className={
                        c.variant === "primary"
                          ? "rounded-lg bg-brand-orange px-7 py-3.5 font-semibold text-brand-orange-foreground hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-xl"
                          : "rounded-lg border-2 border-white px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-brand-blue transition-colors"
                      }
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        aria-label="Slide précédent"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        aria-label="Slide suivant"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Aller au slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-brand-orange" : "w-2 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
