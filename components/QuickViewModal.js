"use client";

import Link from "next/link";
import ProductImage from "./ProductImage";
import StarRating from "./StarRating";
import AddToCartForm from "./AddToCartForm";
import { formatPrice } from "@/lib/format";

export default function QuickViewModal({ product, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu rapide — ${product.name}`}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 gap-6 overflow-y-auto bg-white p-6 md:grid-cols-2 md:gap-8 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer l'aperçu rapide"
          className="absolute right-4 top-4 z-10 text-2xl leading-none"
        >
          &times;
        </button>

        <div className="aspect-square w-full">
          <ProductImage
            gradient={product.gradient}
            icon={product.icon}
            className="h-full"
          />
        </div>

        <div>
          {product.badges?.length > 0 && (
            <div className="mb-3 flex gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest2 ${
                    badge === "Promo" ? "bg-oryn-red text-white" : "bg-oryn-black text-white"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-2xl font-extrabold uppercase tracking-tightest">
            {product.name}
          </h2>
          <div className="mt-2">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-base text-oryn-graydark line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-oryn-graydark">
            {product.description}
          </p>
          <div className="mt-6">
            <AddToCartForm product={product} />
          </div>
          <Link
            href={`/product/${product.slug}`}
            className="mt-4 inline-block text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
          >
            Voir la fiche complète &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
