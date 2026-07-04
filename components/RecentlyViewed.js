"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { readRecentlyViewed } from "./TrackRecentlyViewed";

export default function RecentlyViewed({ excludeId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ids = readRecentlyViewed().filter((id) => id !== excludeId);
    const found = ids
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter(Boolean)
      .slice(0, 4);
    setProducts(found);
  }, [excludeId]);

  if (products.length === 0) return null;

  return (
    <Reveal as="section" className="mt-24">
      <h2 className="mb-8 text-2xl font-extrabold uppercase tracking-tightest">
        Récemment Consultés
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Reveal>
  );
}
