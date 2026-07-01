# ORYN

Vêtements de sport, fitness et combat lifestyle premium — boutique e-commerce
complète en français, construite avec Next.js (App Router), React et
Tailwind CSS, optimisée pour le marché et le SEO France.

## Fonctionnalités

- Pages Accueil, Boutique, pages catégorie SEO (`/collection/[categorie]`),
  Produit, Panier, À Propos, Journal (blog)
- Panier côté client (Context API + `useReducer`), persisté en `localStorage`
- Filtres catégorie/prix et tri sur la boutique
- Variantes produit (taille/couleur), quantités, drawer panier + page panier complète
- Prix en euros (formatage `Intl.NumberFormat('fr-FR')`)
- Pages légales : Mentions Légales, CGV, Politique de Confidentialité,
  Livraison & Retours, Guide des Tailles, Contact
- SEO France : `lang="fr"`, meta par page, Open Graph `fr_FR`, JSON-LD
  (Product, BlogPosting), `sitemap.xml`, `robots.txt`, favicon généré
- Interface entièrement responsive, mobile-first

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
                          product/[slug], cart, about, blog, blog/[slug],
                          pages légales, sitemap, robots, icon
components/               UI réutilisable : Navbar, Footer, Hero, ProductCard,
                          CartDrawer, AddToCartForm, CollectionGrid, LegalPage...
context/CartContext.js    État du panier, persisté en localStorage
data/                     Catalogue produits (avec catégories FR + SEO),
                          articles de blog, avis
lib/format.js             Formatage des prix en EUR (fr-FR)
```

## SEO France — Ce Qui a Été Fait

- Domaine cible `oryn.fr` (ccTLD, geo-ciblage France) — à ajuster dans
  `app/layout.js`, `app/sitemap.js` et `app/robots.js` si un autre domaine
  est retenu.
- Chaque catégorie a sa propre page indexable avec H1, texte d'intro et
  meta title/description uniques (`/collection/entrainement`,
  `/collection/combat`, `/collection/lifestyle`, `/collection/accessoires`)
  plutôt que des paramètres d'URL non indexables.
- Slugs d'articles de blog en français pour le référencement sur les
  requêtes informationnelles.
- JSON-LD `Product` (prix en EUR) et `BlogPosting` (`inLanguage: fr-FR`).

## Contenu & Visuels

- Le contenu (produits, catégories, blog) dans `data/` est un texte
  marketing de démonstration — à remplacer avant le lancement.
- Les visuels produit/hero utilisent un placeholder généré
  (`components/ProductImage.js`, `components/Hero.js`) pour que le site
  s'affiche correctement sans photographie. À remplacer par de vraies
  photos via `next/image` une fois les visuels disponibles.
- Aucun moyen de paiement n'est branché — le bouton « Commander » sur
  `/cart` est un élément d'interface. Connecter Stripe/PayPal/etc. avant
  d'accepter de vraies commandes.
- Les pages **Mentions Légales**, **CGV** et **Politique de
  Confidentialité** contiennent des champs entre crochets
  (`[Raison sociale]`, `[SIRET]`, etc.) à compléter avec les vraies
  informations de l'entreprise avant la mise en ligne — obligatoire pour
  un site e-commerce en France (LCEN, RGPD).

## Déploiement

L'application est un projet Next.js standard et se déploie tel quel sur
Vercel, ou tout hébergement Node supportant `next build` / `next start`.
