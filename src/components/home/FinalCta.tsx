import { Link } from "@tanstack/react-router";

export function FinalCta() {
  return (
    <section className="bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)" }} />
      <div className="container mx-auto px-4 lg:px-8 py-20 md:py-24 text-center relative">
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Prêt(e) à rejoindre l'ISSNA ?
        </h2>
        <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
          Les inscriptions pour l'année 2026-2027 sont ouvertes. Remplissez votre dossier en ligne en moins de 5 minutes.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/preinscription"
            className="rounded-lg bg-brand-orange px-7 py-3.5 font-semibold text-brand-orange-foreground hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-xl"
          >
            Se préinscrire maintenant
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border-2 border-white px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-brand-blue transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
