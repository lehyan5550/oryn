# ORYN

Performance, combat and lifestyle apparel — a complete e-commerce storefront
built with Next.js (App Router), React and Tailwind CSS.

## Features

- Home, Collection, Product, Cart, About and Blog pages
- Client-side cart (Context API + `useReducer`) persisted to `localStorage`
- Category and price filtering, sorting on the collection page
- Product variants (size/color), quantity controls, cart drawer + full cart page
- SEO: per-page metadata, JSON-LD (Product, BlogPosting), `sitemap.xml`, `robots.txt`, dynamic favicon
- Fully responsive, mobile-first UI in the ORYN black/white/red design system

## Getting Started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the codebase

## Project Structure

```
app/                  Routes (App Router): home, collection, product/[slug],
                       cart, about, blog, blog/[slug], sitemap, robots, icon
components/            Reusable UI: Navbar, Footer, Hero, ProductCard,
                       CartDrawer, AddToCartForm, CollectionGrid, etc.
context/CartContext.js Cart state, persisted to localStorage
data/                  Product catalog, blog posts, mock reviews
```

## Content & Assets

- Product, category and blog copy in `data/` is placeholder marketing content
  — replace with real copy before launch.
- Product/hero imagery uses a generated placeholder (`components/ProductImage.js`,
  `components/Hero.js`) so the site renders correctly without photography.
  Swap in real photos via `next/image` once assets are available.
- No payment processor is wired up — the Checkout button on `/cart` is a UI
  placeholder. Connect Stripe/Shopify/etc. before accepting real orders.

## Deploying

The app is a standard Next.js project and deploys as-is to Vercel, or any
Node hosting that supports `next build` / `next start`.
