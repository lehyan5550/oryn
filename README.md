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
- Paiement via Stripe Checkout : le bouton « Commander » sur `/cart` appelle
  `app/api/checkout/route.js`, qui recalcule les prix côté serveur depuis
  `data/products.js` (jamais depuis le panier client) et crée une session
  Stripe Checkout. Pour l'activer, copier `.env.example` en `.env.local` et
  renseigner `STRIPE_SECRET_KEY` (clé secrète Stripe, test ou live) et
  `NEXT_PUBLIC_SITE_URL`. Sans clé configurée, le bouton affiche une erreur
  explicite au lieu d'échouer silencieusement. Après paiement, Stripe
  redirige vers `/commande/confirmation`, qui vide le panier.
- Les pages **Mentions Légales**, **CGV** et **Politique de
  Confidentialité** contiennent des champs entre crochets
  (`[Raison sociale]`, `[SIRET]`, etc.) à compléter avec les vraies
  informations de l'entreprise avant la mise en ligne — obligatoire pour
  un site e-commerce en France (LCEN, RGPD).

## Déploiement

L'application est un projet Next.js standard et se déploie tel quel sur
Vercel, ou tout hébergement Node supportant `next build` / `next start`.
