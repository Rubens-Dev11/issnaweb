import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/237650403397"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter ISSNA sur WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden group-hover:inline-block bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-opacity">
        Besoin d'aide ?
      </span>
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
    </a>
  );
}
