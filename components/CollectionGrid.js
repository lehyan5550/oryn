"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import { getSwatch } from "@/lib/colors";

const SORTS = [
  { value: "featured", label: "Mise en Avant" },
  { value: "price-asc", label: "Prix Croissant" },
  { value: "price-desc", label: "Prix Décroissant" },
  { value: "rating", label: "Mieux Notés" },
];

const PRICE_BANDS = [
  { value: "all", label: "Tous les Prix" },
  { value: "under-50", label: "Moins de 50 €" },
  { value: "50-100", label: "50 € – 100 €" },
  { value: "over-100", label: "Plus de 100 €" },
];

function matchesPriceBand(price, band) {
  if (band === "under-50") return price < 50;
  if (band === "50-100") return price >= 50 && price <= 100;
  if (band === "over-100") return price > 100;
  return true;
}

// `activeCategoryKey` locks the grid to one category (used by /collection/[category]
// SEO landing pages); pass nothing to show the full catalog with category pills as
// links to those dedicated pages.
export default function CollectionGrid({ activeCategoryKey = "all" }) {
  const [priceBand, setPriceBand] = useState("all");
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [sort, setSort] = useState("featured");

  const categoryScoped = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => activeCategoryKey === "all" || p.category === activeCategoryKey
      ),
    [activeCategoryKey]
  );

  const availableColors = useMemo(
    () => Array.from(new Set(categoryScoped.flatMap((p) => p.colors))).sort(),
    [categoryScoped]
  );

  const availableSizes = useMemo(
    () => Array.from(new Set(categoryScoped.flatMap((p) => p.sizes))),
    [categoryScoped]
  );

  const products = useMemo(() => {
    let list = categoryScoped
      .filter((p) => matchesPriceBand(p.price, priceBand))
      .filter((p) => color === "all" || p.colors.includes(color))
      .filter((p) => size === "all" || p.sizes.includes(size));

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [categoryScoped, priceBand, color, size, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2 border-b border-oryn-gray pb-6">
        <Link
          href="/collection"
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest2 transition-colors ${
            activeCategoryKey === "all"
              ? "bg-oryn-black text-white"
              : "border border-oryn-gray text-oryn-black hover:border-oryn-black"
          }`}
        >
          Tout
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/collection/${c.slug}`}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest2 transition-colors ${
              activeCategoryKey === c.key
                ? "bg-oryn-black text-white"
                : "border border-oryn-gray text-oryn-black hover:border-oryn-black"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <select
          value={priceBand}
          onChange={(e) => setPriceBand(e.target.value)}
          className="border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
          aria-label="Filtrer par prix"
        >
          {PRICE_BANDS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
          aria-label="Filtrer par couleur"
        >
          <option value="all">Toutes les Couleurs</option>
          {availableColors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
          aria-label="Filtrer par taille"
        >
          <option value="all">Toutes les Tailles</option>
          {availableSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="ml-auto border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
          aria-label="Trier les produits"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {color !== "all" && (
        <div className="mb-6 flex items-center gap-2">
          <span
            className="h-4 w-4 rounded-full border border-oryn-gray"
            style={{ backgroundColor: getSwatch(color) }}
          />
          <span className="text-xs font-semibold uppercase tracking-wide text-oryn-graydark">
            {color}
          </span>
          <button
            onClick={() => setColor("all")}
            className="text-xs text-oryn-graydark underline hover:text-oryn-black"
          >
            Retirer
          </button>
        </div>
      )}

      <p className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-oryn-graydark">
        {products.length} {products.length === 1 ? "Produit" : "Produits"}
      </p>

      {products.length === 0 ? (
        <p className="py-20 text-center text-sm text-oryn-graydark">
          Aucun produit ne correspond à vos filtres.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
