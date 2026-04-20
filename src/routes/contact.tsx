import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Breadcrumb } from "@/components/Breadcrumb";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contactez-nous | ISSNA Douala" },
      { name: "description", content: "Contactez l'ISSNA à Douala : adresse, téléphone, email, horaires. Formulaire de renseignement et de partenariat." },
      { property: "og:title", content: "Contactez-nous | ISSNA" },
      { property: "og:description", content: "Contactez l'ISSNA à Douala." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a bien été envoyé. Notre équipe vous contactera sous peu.");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contactez-nous</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Une question ? Un projet de partenariat ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Colonne Gauche : Infos */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Nos coordonnées</h2>
              
              <div className="grid gap-6">
                <Card className="border-none shadow-sm bg-surface-alt">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Adresse (2 campus)</h3>
                      <p className="text-muted-foreground text-sm">Campus Ndogbong-Zatchmann, Douala</p>
                      <p className="text-muted-foreground text-sm">Campus Ndogbong-Citadelle, Douala</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-surface-alt">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <p className="text-muted-foreground text-sm">+237 650 40 33 97</p>
                      <p className="text-muted-foreground text-sm">+237 698 03 96 52</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-surface-alt">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">ifpscid@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-surface-alt">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Horaires d'ouverture</h3>
                      <p className="text-muted-foreground text-sm">Lun-Ven : 08h - 18h</p>
                      <p className="text-muted-foreground text-sm">Sam-Fériés : 08h - 13h</p>
                      <p className="text-muted-foreground text-sm">Dimanche : Fermé</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <h3 className="font-bold mb-4">Suivez-nous</h3>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange transition-colors font-medium"
                >
                  <Facebook className="w-5 h-5" />
                  <span>ifpscid sonfack</span>
                </a>
              </div>
            </div>

            {/* Colonne Droite : Formulaire */}
            <div className="space-y-8">
              <Card className="border-border shadow-card overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input id="name" placeholder="Votre nom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" required />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input id="phone" type="tel" placeholder="+237 ..." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="info">Renseignement formation</SelectItem>
                            <SelectItem value="preinsc">Préinscription</SelectItem>
                            <SelectItem value="partner">Partenariat</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        className="min-h-[120px]" 
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold h-12">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Google Maps Placeholder */}
              <div className="aspect-video w-full rounded-2xl bg-secondary overflow-hidden border border-border flex flex-col items-center justify-center text-muted-foreground relative group">
                <MapPin className="w-12 h-12 mb-2 opacity-20 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Ndogbong, Douala, Cameroun</span>
                <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
