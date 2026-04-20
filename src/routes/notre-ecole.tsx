import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumb } from "@/components/Breadcrumb";

export const Route = createFileRoute("/notre-ecole")({
  head: () => ({
    meta: [
      { title: "À propos de l'ISSNA | Notre École à Douala" },
      { name: "description", content: "L'Institut Supérieur de Santé et de Nutrition Appliquée (ISSNA) forme les futurs professionnels de santé au Cameroun. Mission, vision et valeurs." },
      { property: "og:title", content: "À propos de l'ISSNA | Notre École" },
      { property: "og:description", content: "Découvrez notre mission, notre vision et nos valeurs." },
    ],
  }),
  component: NotreEcolePage,
});

function NotreEcolePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Bannière */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">À propos de l'ISSNA</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Bâtir l'avenir de la santé et des sciences appliquées au Cameroun.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Notre école" }]} />

      {/* 2. Présentation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">L'ISSNA en bref</h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p>
                L'Institut Supérieur de Santé et de Nutrition Appliquée (ISSNA) est un établissement privé d'enseignement supérieur basé à Douala, Cameroun. 
                Autorisé par le Ministère de l'Enseignement Supérieur (Arrêté N° 002/MINEFOP/SG/DFOP/SDGSF/SACD du 10 Juin 2020, N° 26-0237/9/INA/MINESUP/ODES/ESUP/SDANS), 
                il forme des professionnels compétents dans les domaines de la santé, des sciences biologiques, de l'agriculture et du développement social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission / Vision / Valeurs */}
      <section className="py-16 bg-surface-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="reveal border-none shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mission</h3>
                <p className="text-muted-foreground text-sm">
                  Former des professionnels de santé et des sciences du vivant capables de répondre aux défis sanitaires, alimentaires et sociaux de l'Afrique centrale.
                </p>
              </CardContent>
            </Card>

            <Card className="reveal border-none shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vision</h3>
                <p className="text-muted-foreground text-sm">
                  Devenir le centre de référence en formation paramédicale et en sciences appliquées au Cameroun et en Afrique centrale.
                </p>
              </CardContent>
            </Card>

            <Card className="reveal border-none shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 text-brand-green mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Valeurs</h3>
                <p className="text-muted-foreground text-sm">
                  Excellence · Rigueur · Innovation · Engagement social · Ouverture
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Mot du Directeur */}
      <section className="reveal py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-card flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-secondary flex items-center justify-center py-12">
              <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                <AvatarFallback className="bg-brand-blue text-white text-3xl font-bold">DG</AvatarFallback>
              </Avatar>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Mot du Directeur</h2>
              <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                "L'ISSNA a été fondé avec la conviction que la formation de qualité est le premier levier du développement. Dans un contexte où les besoins en professionnels de santé et en agronomes qualifiés n'ont jamais été aussi importants, nous nous sommes engagés à offrir une formation rigoureuse, pratique et directement connectée aux réalités du terrain camerounais. Rejoindre l'ISSNA, c'est choisir un avenir solide."
              </blockquote>
              <div className="font-semibold text-brand-blue">
                — La Direction Générale, ISSNA Douala
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Agréments */}
      <section className="reveal py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl font-bold text-white mb-4">Agréments et reconnaissances</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Arrêté N° 002/MINEFOP/SG/DFOP/SDGSF/SACD du 10 Juin 2020",
              "Autorisation N° 26-0237/9/INA/MINESUP/ODES/ESUP/SDANS",
              "N° RCCM : CM-DLA-03-2026-B13-00225",
              "Rattaché à : IFPSCID (Institut de Formation Professionnelle en Sciences du Développement)"
            ].map((text, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center text-sm font-medium">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Nos campus */}
      <section className="reveal py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos 2 campus à Douala</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
                <MapPin className="w-12 h-12 text-brand-blue/20 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-brand-blue/5" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Campus Ndogbong-Zatchmann</h3>
                <p className="text-muted-foreground">Douala, Cameroun</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
                <MapPin className="w-12 h-12 text-brand-blue/20 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-brand-blue/5" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Campus Ndogbong-Citadelle</h3>
                <p className="text-muted-foreground">Douala, Cameroun</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
