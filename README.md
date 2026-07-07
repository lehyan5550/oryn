# ORYN

Vêtements de sport, fitness et combat lifestyle premium — boutique e-commerce
complète en français, construite avec Next.js (App Router), React et
Tailwind CSS, optimisée pour le marché et le SEO France.

## Fonctionnalités

- Pages Accueil, Boutique, pages catégorie SEO (`/collection/[categorie]`),
  Produit, Panier, À Propos, Journal (blog)
- Panier côté client (Context API + `useReducer`), persisté en `localStorage`
- Recherche produit fonctionnelle (overlay live + page `/recherche`)
- Liste de favoris (`/favoris`), persistée en `localStorage`
- Aperçu rapide (Quick View) depuis la grille, sans quitter la page
- Produits récemment consultés (page produit)
- Filtres catégorie/prix/couleur/taille et tri sur la boutique
- Variantes produit avec swatches couleur réels, quantités, drawer panier +
  page panier complète
- Bandeau de réassurance et FAQ (livraison/retours/tailles) sur chaque fiche produit
- Popup newsletter à délai (une fois par session)
- Prix en euros (formatage `Intl.NumberFormat('fr-FR')`)
- Pages légales : Mentions Légales, CGV, Politique de Confidentialité,
  Livraison & Retours, Guide des Tailles, Contact
- SEO France : `lang="fr"`, meta par page, Open Graph `fr_FR`, JSON-LD
  (Product, BlogPosting), `sitemap.xml`, `robots.txt`, favicon généré
- Interface entièrement responsive, mobile-first
- Catalogue de 35 produits sur 5 catégories (Lifestyle, Combat,
  Entraînement, Récupération, Accessoires), avec une icône vectorielle
  dessinée pour chaque produit (`components/ProductIcon.js`) en attendant
  la photographie réelle
- Paiement Stripe Checkout (`/api/checkout`), page de confirmation de
  commande, panier vidé automatiquement après paiement
- Inscription newsletter connectée à Brevo (`/api/newsletter`)
- Intégrations analytics/pub/support activables par simple variable
  d'environnement : Google Analytics 4, Search Console, Meta Pixel,
  TikTok Pixel, Microsoft Clarity, Crisp, avis Trustpilot

## Démarrage

Node.js 18.18+ requis (Node 20+ recommandé).

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — serveur de développement local
- `npm run build` — build de production
- `npm run start` — lance le build de production en local
- `npm run lint` — lint du code

## Checklist des Outils à Connecter

Toutes ces intégrations sont déjà câblées dans le code : elles s'activent
automatiquement dès que la variable d'environnement correspondante est
renseignée dans `.env.local` (copie `.env.local.example` pour démarrer).
Sans clé, chaque intégration reste simplement inactive — rien ne casse.

**Indispensables avant le lancement**

1. **Stripe** (paiement) — crée un compte sur [dashboard.stripe.com](https://dashboard.stripe.com),
   récupère la clé secrète (Développeurs → Clés API) et mets-la dans
   `STRIPE_SECRET_KEY`. Commence avec une clé de test (`sk_test_...`) pour
   essayer sans vrai argent.
2. **Google Search Console** — ajoute le site sur
   [search.google.com/search-console](https://search.google.com/search-console),
   méthode de vérification "balise HTML", colle le code dans
   `NEXT_PUBLIC_GSC_VERIFICATION`. Soumets ensuite `/sitemap.xml`.
3. **Google Analytics 4** — crée une propriété sur
   [analytics.google.com](https://analytics.google.com), récupère l'ID
   `G-XXXXXXXXXX` pour `NEXT_PUBLIC_GA_ID`.

**Fort impact sur la conversion**

4. **Avis clients (Trustpilot)** — crée un compte business sur
   [businessapp.b2b.trustpilot.com](https://businessapp.b2b.trustpilot.com),
   récupère ton Business Unit ID pour `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID`.
   N'affiche de vrais avis qu'une fois les premières commandes livrées.
5. **Meta Pixel** (Facebook/Instagram Ads) — crée un pixel dans
   [business.facebook.com/events_manager](https://business.facebook.com/events_manager),
   mets l'ID dans `NEXT_PUBLIC_META_PIXEL_ID`. Les événements AddToCart,
   InitiateCheckout et Purchase sont déjà envoyés automatiquement.
6. **TikTok Pixel** — même principe sur
   [ads.tiktok.com/i18n/events_manager](https://ads.tiktok.com/i18n/events_manager),
   `NEXT_PUBLIC_TIKTOK_PIXEL_ID`.
7. **Brevo** (email marketing) — crée un compte sur
   [app.brevo.com](https://app.brevo.com), récupère la clé API
   (Paramètres → Clés API) pour `BREVO_API_KEY`. Les 3 formulaires
   newsletter du site (footer, section accueil, popup) y sont déjà
   connectés.

**Utiles une fois le trafic présent**

8. **Crisp** (chat en direct) — crée un compte sur
   [crisp.chat](https://crisp.chat), le Website ID est dans
   Réglages → Site web, à mettre dans `NEXT_PUBLIC_CRISP_WEBSITE_ID`.
9. **Microsoft Clarity** (gratuit, heatmaps + enregistrements de session) —
   crée un projet sur [clarity.microsoft.com](https://clarity.microsoft.com),
   `NEXT_PUBLIC_CLARITY_ID`.

**Volontairement non intégré** : Sendcloud/Boxtal (gestion d'étiquettes de
livraison) — il n'y a pas encore de backend de commandes pour s'y
connecter. Le dashboard Stripe fait office de liste de commandes pour
démarrer ; à revoir une fois un vrai volume de commandes en place.

## Structure du Projet

```
app/                     Routes (App Router) : accueil, collection,
                          collection/[category] (pages SEO par catégorie),
                          product/[slug], cart, favoris, recherche, about,
                          blog, blog/[slug], pages légales, sitemap, robots, icon
components/               UI réutilisable : Navbar, Footer, Hero, ProductCard,
                          CartDrawer, AddToCartForm, CollectionGrid,
                          QuickViewModal, WishlistButton, SearchOverlay,
                          TrustBadges, ProductFAQ, NewsletterPopup, LegalPage...
context/CartContext.js    État du panier, persisté en localStorage
context/WishlistContext.js État des favoris, persisté en localStorage
data/                     Catalogue produits (avec catégories FR + SEO),
                          articles de blog, avis
lib/format.js             Formatage des prix en EUR (fr-FR)
lib/colors.js             Table couleur → code hex pour les swatches
lib/search.js             Recherche produit (insensible aux accents)
```

## SEO France — Ce Qui a Été Fait

- Domaine cible `oryn.fr` (ccTLD, geo-ciblage France) — à ajuster dans
  `app/layout.js`, `app/sitemap.js` et `app/robots.js` si un autre domaine
  est retenu.
- Chaque catégorie a sa propre page indexable avec H1, texte d'intro et
  meta title/description uniques (`/collection/lifestyle`,
  `/collection/combat`, `/collection/entrainement`,
  `/collection/recuperation`, `/collection/accessoires`) plutôt que des
  paramètres d'URL non indexables.
- Slugs d'articles de blog en français pour le référencement sur les
  requêtes informationnelles.
- JSON-LD `Product` (prix en EUR) et `BlogPosting` (`inLanguage: fr-FR`).

## Contenu & Visuels

- Le contenu (produits, catégories, blog) dans `data/` est un texte
  marketing de démonstration — à remplacer avant le lancement.
- Les visuels produit utilisent une icône vectorielle dessinée
  spécifiquement pour chaque produit (`components/ProductIcon.js`,
  affichée via `components/ProductImage.js`) pour que le site s'affiche
  correctement sans photographie. À remplacer par de vraies photos via
  `next/image` une fois les visuels disponibles.
- Le paiement Stripe est câblé mais désactivé tant que `STRIPE_SECRET_KEY`
  n'est pas renseigné (voir « Checklist des Outils à Connecter »
  ci-dessus) — le bouton « Commander » affiche alors un message d'erreur
  clair plutôt que d'échouer silencieusement.
- Les pages **Mentions Légales**, **CGV** et **Politique de
  Confidentialité** contiennent des champs entre crochets
  (`[Raison sociale]`, `[SIRET]`, etc.) à compléter avec les vraies
  informations de l'entreprise avant la mise en ligne — obligatoire pour
  un site e-commerce en France (LCEN, RGPD).

## Déploiement

L'application est un projet Next.js standard et se déploie tel quel sur
Vercel, ou tout hébergement Node supportant `next build` / `next start`.
