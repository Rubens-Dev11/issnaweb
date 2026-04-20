import { ShieldCheck, Briefcase, GraduationCap, MapPin, Quote } from "lucide-react";
import campus from "@/assets/campus.jpg";

const reasons = [
  { icon: ShieldCheck, title: "École autorisée par l'État", desc: "Arrêté officiel MINESUP, diplômes reconnus." },
  { icon: Briefcase, title: "Formations orientées emploi", desc: "Partenariats avec entreprises et hôpitaux de Douala." },
  { icon: GraduationCap, title: "Encadrement de qualité", desc: "Corps enseignant qualifié et expérimenté." },
  { icon: MapPin, title: "Campus accessibles", desc: "2 campus à Ndogbong, Douala, bien desservis." },
];

export function WhyUsSection() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Pourquoi nous choisir ?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — reasons */}
          <div className="space-y-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="reveal flex gap-5">
                  <div className="shrink-0 relative">
                    <div className="h-14 w-14 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — image + quote */}
          <div className="relative">
            <img
              src={campus}
              alt="Campus ISSNA à Douala"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-[440px] object-cover rounded-2xl shadow-[var(--shadow-card-hover)]"
            />
            <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8 bg-card rounded-xl p-6 shadow-[var(--shadow-card-hover)] border border-border">
              <Quote className="h-8 w-8 text-brand-orange mb-3" />
              <p className="text-base italic text-foreground leading-relaxed">
                « Chaque étudiant mérite une formation qui ouvre de vraies portes. »
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-blue">— La Direction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
