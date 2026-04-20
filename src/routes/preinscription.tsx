import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { filieres, formations } from "@/data/filieres";

import { Breadcrumb } from "@/components/Breadcrumb";

export const Route = createFileRoute("/preinscription")({
  head: () => ({
    meta: [
      { title: "Préinscription en ligne | ISSNA Douala" },
      { name: "description", content: "Remplissez votre dossier de préinscription à l'ISSNA en moins de 5 minutes. Formations BTS et HND en santé et sciences du vivant à Douala." },
      { property: "og:title", content: "Préinscription en ligne | ISSNA Douala" },
      { property: "og:description", content: "Démarrez votre parcours en santé et nutrition à l'ISSNA." },
    ],
  }),
  component: PreinscriptionPage,
});

const PAYS = [
  "Cameroun", "Gabon", "Tchad", "Congo", "RCA", "Guinée Équatoriale", "Autre"
];

function PreinscriptionPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    sexe: "Homme", dateNaissance: "", lieuNaissance: "", ville: "", pays: "Cameroun",
    filiere: "", specialite: "", cycle: "", statut: "Nouveau candidat",
    diplome: "", motivation: ""
  });

  const selectedFiliereFormations = formations.filter(f => f.filiereSlug === formData.filiere);

  const handleNext = () => setStep(2);
  const handlePrev = () => setStep(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-brand-blue mb-4">Demande reçue !</h1>
        <p className="text-lg text-muted-foreground max-w-lg mb-8">
          Votre demande a bien été reçue. Notre équipe vous contactera dans les 48h pour finaliser votre dossier.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold h-12 px-8"
            onClick={() => window.open(`https://wa.me/237650403397?text=Bonjour, je viens de remplir le formulaire de préinscription pour la filière ${formData.specialite || formData.filiere}`, "_blank")}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Nous contacter sur WhatsApp
          </Button>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Préinscription en ligne</h1>
          <p className="mt-2 text-white/80">Rejoignez l'excellence en santé et nutrition.</p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Préinscription" }]} />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
              <span className={step >= 1 ? "text-brand-blue" : ""}>Étape 1 : Infos personnelles</span>
              <span className={step >= 2 ? "text-brand-blue" : ""}>Étape 2 : Infos académiques</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-orange transition-all duration-500 ease-out"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          </div>

          <Card className="border-border shadow-card overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input 
                          id="nom" required 
                          value={formData.nom} 
                          onChange={e => setFormData({...formData, nom: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input 
                          id="prenom" required 
                          value={formData.prenom}
                          onChange={e => setFormData({...formData, prenom: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" type="email" required 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tel">Téléphone *</Label>
                        <Input 
                          id="tel" type="tel" required 
                          value={formData.telephone}
                          onChange={e => setFormData({...formData, telephone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Sexe *</Label>
                      <RadioGroup 
                        value={formData.sexe} 
                        onValueChange={v => setFormData({...formData, sexe: v})}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Homme" id="h" />
                          <Label htmlFor="h">Homme</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Femme" id="f" />
                          <Label htmlFor="f">Femme</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateNais">Date de naissance *</Label>
                        <Input 
                          id="dateNais" type="date" required 
                          value={formData.dateNaissance}
                          onChange={e => setFormData({...formData, dateNaissance: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lieuNais">Lieu de naissance</Label>
                        <Input 
                          id="lieuNais" 
                          value={formData.lieuNaissance}
                          onChange={e => setFormData({...formData, lieuNaissance: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ville">Ville de résidence *</Label>
                        <Input 
                          id="ville" required 
                          value={formData.ville}
                          onChange={e => setFormData({...formData, ville: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pays">Pays *</Label>
                        <Select 
                          value={formData.pays} 
                          onValueChange={v => setFormData({...formData, pays: v})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {PAYS.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="button" onClick={handleNext} className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-12">
                      Étape suivante
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="space-y-2">
                      <Label>Filière souhaitée *</Label>
                      <Select 
                        value={formData.filiere} 
                        onValueChange={v => setFormData({...formData, filiere: v, specialite: ""})}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir une filière" />
                        </SelectTrigger>
                        <SelectContent>
                          {filieres.map(f => <SelectItem key={f.slug} value={f.slug}>{f.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Spécialité *</Label>
                      <Select 
                        value={formData.specialite} 
                        onValueChange={v => setFormData({...formData, specialite: v})}
                        disabled={!formData.filiere}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={formData.filiere ? "Choisir une spécialité" : "Choisissez d'abord une filière"} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedFiliereFormations.map(s => <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Cycle souhaité *</Label>
                        <Select 
                          value={formData.cycle} 
                          onValueChange={v => setFormData({...formData, cycle: v})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un cycle" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BTS">BTS</SelectItem>
                            <SelectItem value="HND">HND</SelectItem>
                            <SelectItem value="Licence">Licence Pro</SelectItem>
                            <SelectItem value="Master">Master Pro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Statut *</Label>
                        <Select 
                          value={formData.statut} 
                          onValueChange={v => setFormData({...formData, statut: v})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nouveau candidat">Nouveau candidat</SelectItem>
                            <SelectItem value="Déjà étudiant à l'ISSNA">Déjà étudiant à l'ISSNA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="diplome">Dernier diplôme obtenu *</Label>
                      <Input 
                        id="diplome" placeholder="Ex: Baccalauréat D, GCE A Level, etc." required 
                        value={formData.diplome}
                        onChange={e => setFormData({...formData, diplome: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motiv">Message de motivation *</Label>
                      <Textarea 
                        id="motiv" required 
                        placeholder="Pourquoi souhaitez-vous rejoindre l'ISSNA ?"
                        className="min-h-[100px]"
                        value={formData.motivation}
                        onChange={e => setFormData({...formData, motivation: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button type="button" variant="outline" onClick={handlePrev} className="h-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Précédent
                      </Button>
                      <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold h-12">
                        Soumettre
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
