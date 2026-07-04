"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { searchProducts } from "@/lib/search";

export default function SearchResults({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const results = searchProducts(query);

  return (
    <div>
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          Recherche
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          Résultats
        </h1>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="mb-8 max-w-lg">
        <label htmlFor="search-input" className="sr-only">
          Rechercher un produit
        </label>
        <div className="flex items-center gap-3 border-b-2 border-oryn-black pb-3">
          <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full text-base focus:outline-none"
          />
        </div>
      </form>

      {query.trim().length === 0 ? (
        <p className="text-sm text-oryn-graydark">Entrez un terme pour lancer la recherche.</p>
      ) : results.length === 0 ? (
        <p className="text-sm text-oryn-graydark">
          Aucun résultat pour &laquo;&nbsp;{query}&nbsp;&raquo;. Essayez un autre terme ou{" "}
          <Link href="/collection" className="underline hover:text-oryn-black">
            parcourez toute la collection
          </Link>
          .
        </p>
      ) : (
        <>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-oryn-graydark">
            {results.length} {results.length === 1 ? "résultat" : "résultats"} pour
            &nbsp;&laquo;&nbsp;{query}&nbsp;&raquo;
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
