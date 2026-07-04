"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { searchProducts } from "@/lib/search";
import { formatPrice } from "@/lib/format";

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const results = searchProducts(query).slice(0, 6);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] animate-overlayIn bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Rechercher un produit"
    >
      <div
        className="mx-auto mt-0 max-h-screen w-full max-w-2xl animate-modalIn overflow-y-auto bg-white p-6 md:mt-24 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/recherche?q=${encodeURIComponent(query)}`;
          }}
          className="flex items-center gap-3 border-b border-oryn-black pb-3"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit (ex: hoodie, gants, tapis...)"
            className="w-full text-base focus:outline-none"
          />
          <button onClick={onClose} type="button" aria-label="Fermer la recherche" className="text-2xl leading-none">
            &times;
          </button>
        </form>

        {query.trim().length > 0 && (
          <div className="mt-6">
            {results.length === 0 ? (
              <p className="text-sm text-oryn-graydark">
                Aucun résultat pour &laquo;&nbsp;{query}&nbsp;&raquo;.
              </p>
            ) : (
              <>
                <ul className="divide-y divide-oryn-gray">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 py-3 hover:bg-oryn-gray/30"
                      >
                        <div className="h-14 w-14 flex-shrink-0">
                          <ProductImage gradient={p.gradient} icon={p.icon} compact className="h-full" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold uppercase tracking-wide">{p.name}</p>
                          <p className="text-xs text-oryn-graydark">{formatPrice(p.price)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/recherche?q=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="mt-4 inline-block text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
                >
                  Voir tous les résultats &rarr;
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
