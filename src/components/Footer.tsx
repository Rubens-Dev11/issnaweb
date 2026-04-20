import { Link } from "@tanstack/react-router";
import logo from "@/assets/issna-logo.jpg";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-blue text-brand-blue-foreground mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1 — Brand */}
          <div>
            <div className="bg-white inline-block rounded-lg p-3 mb-4">
              <img src={logo} alt="ISSNA" className="h-16 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-white/85">
              L'ISSNA forme les professionnels de demain dans les domaines de la santé
              et de la nutrition appliquée, avec excellence et engagement.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com/ifpscid.sonfack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook ISSNA"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Liens */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white mb-5">Liens rapides</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/filieres" className="text-white/85 hover:text-brand-orange transition-colors">Nos filières</Link></li>
              <li><Link to="/preinscription" className="text-white/85 hover:text-brand-orange transition-colors">Préinscription</Link></li>
              <li><Link to="/notre-ecole" className="text-white/85 hover:text-brand-orange transition-colors">À propos</Link></li>
              <li><Link to="/actualites" className="text-white/85 hover:text-brand-orange transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="text-white/85 hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Coordonnées */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-white mb-5">Coordonnées</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-orange" />
                <span>Campus Ndogbong-Zatchmann & Ndogbong-Citadelle, Douala, Cameroun</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
                <span>
                  <a href="tel:+237650403397" className="hover:text-brand-orange">650 40 33 97</a>
                  {" / "}
                  <a href="tel:+237698039652" className="hover:text-brand-orange">698 03 96 52</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-orange" />
                <a href="mailto:ifpscid@gmail.com" className="hover:text-brand-orange">ifpscid@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand-orange" />
                <span>Lun-Ven : 08h-18h<br />Sam : 08h-13h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-[10px] md:text-xs text-white/70">
          <div className="space-y-1">
            <p>© 2026 ISSNA — Institut Supérieur de Santé et de Nutrition Appliquée. Tous droits réservés.</p>
            <p className="font-medium">N° RCCM : CM-DLA-03-2026-B13-00225</p>
          </div>
          <div className="space-y-1 md:text-right">
            <p>Autorisation MINESUP : N° 26-0237/9/INA/MINESUP/ODES/ESUP/SDANS</p>
            <p>Arrêté MINEFOP : N° 002/MINEFOP/SG/DFOP/SDGSF/SACD du 10 Juin 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
