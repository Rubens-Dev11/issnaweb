# ISSNA Connect — Institut Supérieur de Santé et de Nutrition Appliquée

**ISSNA Connect** est une plateforme web moderne conçue pour l'Institut Supérieur de Santé et de Nutrition Appliquée (Douala, Cameroun). Elle permet aux étudiants de découvrir les filières de formation et de soumettre leur dossier de préinscription en ligne.

## 🚀 Technologies utilisées

- **Frontend** : [React 19](https://react.dev/)
- **Infrastructure / SSR** : [TanStack Start](https://tanstack.com/router/v1/docs/guide/start) (Fullstack React Framework)
- **Routage** : [TanStack Router](https://tanstack.com/router/v1) (Typesafe routing)
- **Stylisation** : [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Composants UI** : [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) (icônes)
- **Validation & Formulaires** : [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Gestionnaire de paquets** : [Bun](https://bun.sh/) / NPM

## 🏗️ Architecture du projet

Le projet suit une structure modulaire et scalable :

- `/src/routes` : Système de fichiers pour le routage (Pages).
- `/src/components/ui` : Composants atomiques réutilisables (Shadcn/UI).
- `/src/components/home` : Composants spécifiques à la page d'accueil.
- `/src/data` : Centralisation des données métiers (Filières, Spécialités).
- `/src/styles.css` : Configuration globale de Tailwind et du Design System.

## 🌟 Fonctionnalités clés

- **Formulaire de préinscription multi-étapes** : Filtrage dynamique des spécialités selon la filière choisie.
- **Optimisation SEO** : Balises méta personnalisées par page et données structurées Schema.org (JSON-LD).
- **Animations modernes** : Scroll Reveal (IntersectionObserver), compteurs animés et micro-interactions fluides.
- **Performance** : Lazy loading des images et mise en cache via TanStack Query.
- **Accessibilité** : Entièrement responsive (mobile first) et respect des standards web.

## 🛠️ Installation et Développement

### Prérequis
- Node.js (v20+) ou Bun

### Installation des dépendances
```bash
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```

### Builder pour la production
```bash
npm run build
```

## 🌐 Déploiement

Le projet est configuré pour être déployé sur **Vercel** ou **Cloudflare Workers**.

### Configuration Vercel
La configuration dans `vite.config.ts` inclut l'adaptateur de déploiement Vercel :
```typescript
deployment: {
  preset: "vercel"
}
```

## 📜 Mentions Légales & Agréments (ISSNA)

- **Autorisation MINESUP** : N° 26-0237/9/INA/MINESUP/ODES/ESUP/SDANS
- **Arrêté MINEFOP** : N° 002/MINEFOP/SG/DFOP/SDGSF/SACD du 10 Juin 2020
- **RCCM** : CM-DLA-03-2026-B13-00225

---
Développé avec ❤️ pour l'ISSNA.
