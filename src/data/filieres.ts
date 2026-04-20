import {
  FlaskConical, Sprout, Stethoscope, Microscope, HeartHandshake,
  Beaker, Apple, UtensilsCrossed, Leaf,
  Cog, Tractor, Briefcase,
  Heart, Baby, Activity, Eye,
  TestTube, Pill,
  BabyIcon, Users,
  type LucideIcon,
} from "lucide-react";

export type Cycle = "BTS" | "HND" | "Licence Pro" | "Master Pro";

export type Formation = {
  slug: string;
  name: string;
  filiereSlug: string;
  filiereName: string;
  cycles: Cycle[];
  icon: LucideIcon;
  duree: string;
  diplome: string;
  acces: string;
  debouches: string[];
  shortDebouches: string;
  programme: { titre: string; modules: string[] }[];
  conditions: string[];
  description: string;
};

export type Filiere = {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  color: string; // tailwind color token name (brand-blue / brand-green / brand-orange)
  formationSlugs: string[];
};

const baseProgramme = (themes: string[]) => [
  { titre: "Année 1 — Tronc commun", modules: themes.slice(0, 4) },
  { titre: "Année 2 — Spécialisation", modules: themes.slice(2) },
  { titre: "Année 3 — HND (optionnel)", modules: ["Approfondissement", "Projet professionnel", "Stage long en entreprise"] },
];

export const formations: Formation[] = [
  // Génie Biologique
  {
    slug: "analyses-biologiques",
    name: "Analyses Biologiques et Biochimiques",
    filiereSlug: "genie-biologique", filiereName: "Génie Biologique",
    cycles: ["BTS", "HND"], icon: Beaker,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Analyses Biologiques / HND Biological Analysis",
    acces: "Baccalauréat C, D, E, F5, F6 ou équivalent",
    shortDebouches: "Technicien de labo, contrôle qualité, agroalimentaire",
    debouches: ["Technicien de laboratoire", "Contrôle qualité", "Industrie agroalimentaire", "Recherche biomédicale"],
    programme: baseProgramme(["Biochimie générale", "Microbiologie", "Techniques d'analyse", "Hygiène et sécurité", "Biologie moléculaire", "Stage en laboratoire"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier de candidature complet", "Entretien de motivation", "Frais de scolarité à jour"],
    description: "Formation aux techniques modernes d'analyse biologique et biochimique pour les secteurs de la santé, de l'industrie et de la recherche.",
  },
  {
    slug: "dietetique", name: "Diététique",
    filiereSlug: "genie-biologique", filiereName: "Génie Biologique",
    cycles: ["BTS", "HND"], icon: Apple,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Diététique / HND Dietetics",
    acces: "Baccalauréat C, D, F8 ou équivalent",
    shortDebouches: "Diététicien(ne), nutritionniste, hôpitaux, cliniques, conseil",
    debouches: ["Diététicien(ne) hospitalier(e)", "Nutritionniste libéral", "Conseil en restauration collective", "Industrie agroalimentaire"],
    programme: baseProgramme(["Nutrition humaine", "Diététique thérapeutique", "Biochimie nutritionnelle", "Économie de la santé", "Communication patient", "Stage clinique"]),
    conditions: ["Baccalauréat scientifique recommandé", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Formez-vous aux métiers de la nutrition humaine et de la diététique thérapeutique pour accompagner patients et populations.",
  },
  {
    slug: "industrie-alimentaire", name: "Industrie Alimentaire",
    filiereSlug: "genie-biologique", filiereName: "Génie Biologique",
    cycles: ["BTS", "HND"], icon: UtensilsCrossed,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Industries Alimentaires / HND Food Technology",
    acces: "Baccalauréat C, D, F ou équivalent",
    shortDebouches: "Technologue alimentaire, contrôle qualité, agroalimentaire",
    debouches: ["Technologue alimentaire", "Responsable qualité", "Conduite de process industriel", "R&D agroalimentaire"],
    programme: baseProgramme(["Procédés alimentaires", "Microbiologie alimentaire", "Hygiène HACCP", "Qualité et conformité", "Gestion de production", "Stage industriel"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Maîtrisez les procédés industriels de transformation alimentaire et les standards qualité du secteur agroalimentaire.",
  },
  {
    slug: "biotechnologie-agricole", name: "Biotechnologie Agricole",
    filiereSlug: "genie-biologique", filiereName: "Génie Biologique",
    cycles: ["BTS", "HND"], icon: Leaf,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Biotechnologies / HND Agricultural Biotechnology",
    acces: "Baccalauréat C, D, F ou équivalent",
    shortDebouches: "Chercheur, technicien biotechnologie, laboratoires",
    debouches: ["Technicien en biotechnologie", "Assistant chercheur", "Laboratoire de semences", "Industrie pharmaceutique"],
    programme: baseProgramme(["Génétique", "Culture in vitro", "Microbiologie appliquée", "Biologie moléculaire", "Bioéthique", "Stage en laboratoire"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Une filière à la pointe entre biologie, agriculture et innovation pour répondre aux défis alimentaires africains.",
  },

  // Agriculture et Élevage
  {
    slug: "production-animale", name: "Production Animale",
    filiereSlug: "agriculture-elevage", filiereName: "Agriculture et Élevage",
    cycles: ["BTS", "HND"], icon: Cog,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Production Animale / HND Animal Production",
    acces: "Baccalauréat toutes séries (scientifique recommandé)",
    shortDebouches: "Éleveur, technicien vétérinaire, agro-industries",
    debouches: ["Éleveur entrepreneur", "Technicien vétérinaire", "Conseiller en agro-industries", "ONG développement rural"],
    programme: baseProgramme(["Zootechnie générale", "Santé animale", "Alimentation et reproduction", "Gestion d'élevage", "Économie agricole", "Stage en exploitation"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Devenez un acteur clé de la souveraineté alimentaire en maîtrisant les techniques modernes d'élevage.",
  },
  {
    slug: "production-vegetale", name: "Production Végétale",
    filiereSlug: "agriculture-elevage", filiereName: "Agriculture et Élevage",
    cycles: ["BTS", "HND"], icon: Tractor,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Production Végétale / HND Crop Production",
    acces: "Baccalauréat toutes séries",
    shortDebouches: "Agronome, technicien agricole, ONG développement",
    debouches: ["Technicien agronome", "Conseiller agricole", "ONG développement", "Entrepreneur agricole"],
    programme: baseProgramme(["Agronomie", "Phytotechnie", "Pédologie", "Protection des cultures", "Mécanisation agricole", "Stage en exploitation"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Formez-vous à la production végétale durable et à la gestion technique des cultures vivrières et de rente.",
  },
  {
    slug: "entrepreneuriat-agropastoral", name: "Entrepreneuriat Agropastoral",
    filiereSlug: "agriculture-elevage", filiereName: "Agriculture et Élevage",
    cycles: ["BTS", "HND"], icon: Briefcase,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Entrepreneuriat Agropastoral / HND Agro-business",
    acces: "Baccalauréat toutes séries",
    shortDebouches: "Chef d'entreprise agricole, conseiller rural",
    debouches: ["Entrepreneur agropastoral", "Conseiller rural", "Cadre coopérative", "Consultant en agribusiness"],
    programme: baseProgramme(["Gestion d'entreprise agricole", "Comptabilité agricole", "Marketing rural", "Financement agricole", "Législation", "Stage en entreprise"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Lancez votre exploitation et structurez vos projets agricoles grâce à des outils de gestion modernes.",
  },

  // Études Médico-sanitaires
  {
    slug: "sciences-infirmieres", name: "Sciences Infirmières",
    filiereSlug: "etudes-medico-sanitaires", filiereName: "Études Médico-sanitaires",
    cycles: ["BTS", "HND"], icon: Heart,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Sciences Infirmières / HND Nursing",
    acces: "Baccalauréat ou équivalent, séries C/D/E/F5/F6 recommandées",
    shortDebouches: "Infirmier(ère) diplômé(e), aide-soignant(e), hôpitaux, cliniques, ONG santé",
    debouches: ["Infirmier(ère) diplômé(e) d'État", "Hôpitaux publics et privés", "Cliniques et centres médicaux", "ONG santé internationales"],
    programme: [
      { titre: "Année 1 — Fondamentaux", modules: ["Anatomie humaine", "Physiologie", "Soins infirmiers de base", "Hygiène hospitalière", "Communication soignant-soigné"] },
      { titre: "Année 2 — Pratique clinique", modules: ["Pharmacologie", "Pathologies médicales", "Soins en urgence", "Santé publique", "Stage clinique long"] },
      { titre: "Année 3 — HND (optionnel)", modules: ["Soins spécialisés", "Encadrement d'équipe", "Mémoire professionnel"] },
    ],
    conditions: ["Baccalauréat C, D, E, F5 ou F6 fortement recommandé", "Dossier de candidature complet", "Entretien de motivation", "Visite médicale d'aptitude", "Frais de scolarité à jour"],
    description: "La formation phare de l'ISSNA. Devenez infirmier(ère) diplômé(e), au cœur du système de santé camerounais et international.",
  },
  {
    slug: "sage-femme", name: "Sage-Femme",
    filiereSlug: "etudes-medico-sanitaires", filiereName: "Études Médico-sanitaires",
    cycles: ["BTS", "HND"], icon: Baby,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Sage-Femme / HND Midwifery",
    acces: "Baccalauréat C, D ou F (sciences)",
    shortDebouches: "Sage-femme, maternités, cabinets médicaux",
    debouches: ["Sage-femme en maternité", "Centres de PMI", "Cabinets médicaux", "ONG santé maternelle"],
    programme: baseProgramme(["Obstétrique", "Gynécologie", "Néonatologie", "Suivi de grossesse", "Accouchement", "Stage en maternité"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Visite médicale", "Frais à jour"],
    description: "Accompagnez les femmes tout au long de leur parcours de maternité, de la grossesse au post-partum.",
  },
  {
    slug: "kinesitherapie", name: "Kinésithérapie",
    filiereSlug: "etudes-medico-sanitaires", filiereName: "Études Médico-sanitaires",
    cycles: ["BTS", "HND"], icon: Activity,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Kinésithérapie / HND Physiotherapy",
    acces: "Baccalauréat C, D ou F (sciences)",
    shortDebouches: "Kinésithérapeute, centres de rééducation, sport",
    debouches: ["Kinésithérapeute libéral", "Centres de rééducation", "Médecine du sport", "Hôpitaux"],
    programme: baseProgramme(["Anatomie fonctionnelle", "Physiologie de l'effort", "Massothérapie", "Rééducation neurologique", "Rééducation orthopédique", "Stage clinique"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Aidez vos patients à retrouver mobilité et autonomie grâce à des techniques manuelles éprouvées.",
  },
  {
    slug: "opticien-lunetier", name: "Opticien-Lunetier",
    filiereSlug: "etudes-medico-sanitaires", filiereName: "Études Médico-sanitaires",
    cycles: ["BTS", "HND"], icon: Eye,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Opticien-Lunetier / HND Optometry",
    acces: "Baccalauréat C, D, E ou équivalent",
    shortDebouches: "Opticien, centres ophtalmologiques, commerce",
    debouches: ["Opticien en magasin", "Centres ophtalmologiques", "Industrie optique", "Entrepreneuriat"],
    programme: baseProgramme(["Optique géométrique", "Anatomie de l'œil", "Réfraction et examens", "Montage de lunettes", "Gestion de magasin", "Stage en boutique"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Maîtrisez l'optique, l'examen visuel et la relation client pour exercer ce métier en pleine croissance.",
  },

  // Biomédicales
  {
    slug: "techniques-laboratoire-biomedical", name: "Techniques de Laboratoire et d'Analyses Biomédicales",
    filiereSlug: "sciences-techniques-biomedicales", filiereName: "Sciences et Techniques Biomédicales",
    cycles: ["BTS", "HND"], icon: TestTube,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Analyses Biomédicales / HND Medical Laboratory Sciences",
    acces: "Baccalauréat C, D ou F (sciences)",
    shortDebouches: "Biologiste, labo médical",
    debouches: ["Technicien laboratoire médical", "Hôpitaux et cliniques", "Laboratoires d'analyses", "Recherche médicale"],
    programme: baseProgramme(["Hématologie", "Bactériologie médicale", "Parasitologie", "Biochimie clinique", "Immunologie", "Stage en labo médical"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Réalisez les analyses qui fondent le diagnostic médical, au service de la santé des patients.",
  },
  {
    slug: "techniques-pharmaceutiques", name: "Techniques Pharmaceutiques",
    filiereSlug: "sciences-techniques-biomedicales", filiereName: "Sciences et Techniques Biomédicales",
    cycles: ["BTS", "HND"], icon: Pill,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Techniques Pharmaceutiques / HND Pharmacy Technology",
    acces: "Baccalauréat C, D ou F",
    shortDebouches: "Préparateur pharmacie, industrie pharmaceutique",
    debouches: ["Préparateur en pharmacie", "Industrie pharmaceutique", "Distribution médicale", "Centrales d'achat"],
    programme: baseProgramme(["Pharmacognosie", "Galénique", "Législation pharmaceutique", "Pharmacologie", "Gestion d'officine", "Stage en pharmacie"]),
    conditions: ["Baccalauréat scientifique requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Devenez un maillon essentiel de la chaîne du médicament, en officine comme en industrie.",
  },

  // ESF
  {
    slug: "puericulture", name: "Puériculture",
    filiereSlug: "economie-sociale-familiale", filiereName: "Économie Sociale et Familiale",
    cycles: ["BTS", "HND"], icon: BabyIcon,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Puériculture / HND Childcare",
    acces: "Baccalauréat toutes séries",
    shortDebouches: "Puériculteur(trice), crèches, PMI, pédiatrie",
    debouches: ["Puériculteur(trice) en crèche", "Services de PMI", "Services de pédiatrie", "Crèches privées"],
    programme: baseProgramme(["Développement de l'enfant", "Soins du nourrisson", "Nutrition infantile", "Pédagogie petite enfance", "Psychologie", "Stage en crèche"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Accompagnez les tout-petits et leurs familles dans les premières années de la vie.",
  },
  {
    slug: "gerontologie", name: "Gérontologie",
    filiereSlug: "economie-sociale-familiale", filiereName: "Économie Sociale et Familiale",
    cycles: ["BTS", "HND"], icon: Users,
    duree: "2 ans (BTS) / 3 ans (HND)",
    diplome: "BTS Gérontologie / HND Gerontology",
    acces: "Baccalauréat toutes séries",
    shortDebouches: "Assistant(e) personnes âgées, maisons de retraite, soins à domicile",
    debouches: ["Assistant(e) en gérontologie", "Maisons de retraite", "Services à domicile", "Centres médico-sociaux"],
    programme: baseProgramme(["Vieillissement physiologique", "Soins gérontologiques", "Psychologie de la personne âgée", "Aide à l'autonomie", "Éthique du grand âge", "Stage en EHPAD"]),
    conditions: ["Baccalauréat requis", "Dossier complet", "Entretien", "Frais à jour"],
    description: "Une filière humaine et porteuse pour accompagner les personnes âgées avec dignité et compétence.",
  },
];

export const filieres: Filiere[] = [
  {
    slug: "genie-biologique", name: "Génie Biologique", icon: FlaskConical, color: "brand-blue",
    shortDesc: "Analyses biologiques, diététique, agroalimentaire et biotechnologie.",
    longDesc: "La filière Génie Biologique forme des professionnels capables d'intervenir dans les laboratoires d'analyses, l'industrie agroalimentaire, la nutrition et la recherche biotechnologique. Une voie d'avenir pour les sciences du vivant.",
    formationSlugs: ["analyses-biologiques", "dietetique", "industrie-alimentaire", "biotechnologie-agricole"],
  },
  {
    slug: "agriculture-elevage", name: "Agriculture et Élevage", icon: Sprout, color: "brand-green",
    shortDesc: "Production animale, végétale et entrepreneuriat agropastoral.",
    longDesc: "L'agriculture est l'un des piliers du développement africain. Cette filière forme des techniciens et entrepreneurs capables de moderniser la production et de bâtir des exploitations rentables.",
    formationSlugs: ["production-animale", "production-vegetale", "entrepreneuriat-agropastoral"],
  },
  {
    slug: "etudes-medico-sanitaires", name: "Études Médico-sanitaires", icon: Stethoscope, color: "brand-orange",
    shortDesc: "Sciences infirmières, sage-femme, kinésithérapie, optique.",
    longDesc: "Au cœur des besoins de santé du Cameroun et de l'Afrique, cette filière prépare aux métiers paramédicaux les plus recherchés, avec un fort accent sur la pratique clinique.",
    formationSlugs: ["sciences-infirmieres", "sage-femme", "kinesitherapie", "opticien-lunetier"],
  },
  {
    slug: "sciences-techniques-biomedicales", name: "Sciences et Techniques Biomédicales", icon: Microscope, color: "brand-blue",
    shortDesc: "Laboratoire biomédical et techniques pharmaceutiques.",
    longDesc: "Le diagnostic médical et le médicament sont au cœur des soins. Cette filière vous donne les compétences techniques pour exercer en laboratoire ou dans la chaîne pharmaceutique.",
    formationSlugs: ["techniques-laboratoire-biomedical", "techniques-pharmaceutiques"],
  },
  {
    slug: "economie-sociale-familiale", name: "Économie Sociale et Familiale", icon: HeartHandshake, color: "brand-green",
    shortDesc: "Puériculture et gérontologie.",
    longDesc: "Une filière dédiée à l'accompagnement humain, des plus jeunes aux plus âgés, avec une demande croissante en Afrique et à l'international.",
    formationSlugs: ["puericulture", "gerontologie"],
  },
];

export function getFiliere(slug: string) {
  return filieres.find((f) => f.slug === slug);
}
export function getFormation(slug: string) {
  return formations.find((f) => f.slug === slug);
}
export function getFormationsByFiliere(slug: string) {
  return formations.filter((f) => f.filiereSlug === slug);
}
