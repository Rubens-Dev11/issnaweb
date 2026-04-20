import { Link } from "@tanstack/react-router";
import { Download, Phone, MessageCircle } from "lucide-react";

export function SidebarBrochure() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white rounded-xl p-6 shadow-[var(--shadow-card-hover)]">
        <Download className="h-8 w-8 text-brand-orange mb-3" />
        <h3 className="text-white text-lg font-semibold mb-2">Brochure ISSNA 2026-2027</h3>
        <p className="text-sm text-white/85 mb-4">
          Téléchargez notre brochure complète : filières, frais, conditions d'admission.
        </p>
        <button className="w-full rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-2.5 transition-colors">
          Télécharger le PDF
        </button>
      </div>

      <div className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-card)]">
        <h3 className="text-base font-semibold mb-4">Contact rapide</h3>
        <div className="space-y-3">
          <a href="tel:+237650403397" className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors">
            <span className="h-9 w-9 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Phone className="h-4 w-4" />
            </span>
            <span>+237 650 40 33 97</span>
          </a>
          <a
            href="https://wa.me/237650403397"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors"
          >
            <span className="h-9 w-9 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="h-4 w-4" />
            </span>
            <span>WhatsApp</span>
          </a>
          <Link
            to="/preinscription"
            className="block text-center w-full rounded-lg bg-brand-orange text-white font-semibold py-2.5 hover:bg-brand-orange/90 transition-colors mt-4"
          >
            Se préinscrire
          </Link>
        </div>
      </div>
    </aside>
  );
}
