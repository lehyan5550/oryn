"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

export default function FavorisPage() {
  const { ids } = useWishlist();
  const products = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          Ma Sélection
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          Mes Favoris
        </h1>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-20 text-center">
          <p className="text-sm text-oryn-graydark">
            Vous n&apos;avez pas encore ajouté de favoris. Cliquez sur le
            cœur d&apos;un produit pour l&apos;enregistrer ici.
          </p>
          <Button href="/collection">Découvrir la Collection</Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <Link
        href="/collection"
        className="mt-10 inline-block text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
      >
        &larr; Continuer mes Achats
      </Link>
    </div>
  );
}
