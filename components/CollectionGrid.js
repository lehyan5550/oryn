"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const PRICE_BANDS = [
  { value: "all", label: "All Prices" },
  { value: "under-50", label: "Under $50" },
  { value: "50-100", label: "$50 – $100" },
  { value: "over-100", label: "Over $100" },
];

function matchesPriceBand(price, band) {
  if (band === "under-50") return price < 50;
  if (band === "50-100") return price >= 50 && price <= 100;
  if (band === "over-100") return price > 100;
  return true;
}

export default function CollectionGrid({ initialCategory = "all" }) {
  const [category, setCategory] = useState(initialCategory);
  const [priceBand, setPriceBand] = useState("all");
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => category === "all" || p.category === category
    ).filter((p) => matchesPriceBand(p.price, priceBand));

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, priceBand, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-oryn-gray pb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest2 transition-colors ${
              category === "all"
                ? "bg-oryn-black text-white"
                : "border border-oryn-gray text-oryn-black hover:border-oryn-black"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest2 transition-colors ${
                category === c.slug
                  ? "bg-oryn-black text-white"
                  : "border border-oryn-gray text-oryn-black hover:border-oryn-black"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={priceBand}
            onChange={(e) => setPriceBand(e.target.value)}
            className="border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
            aria-label="Filter by price"
          >
            {PRICE_BANDS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-oryn-gray bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide focus:border-oryn-black focus:outline-none"
            aria-label="Sort products"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-oryn-graydark">
        {products.length} {products.length === 1 ? "Product" : "Products"}
      </p>

      {products.length === 0 ? (
        <p className="py-20 text-center text-sm text-oryn-graydark">
          No products match your filters.
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
