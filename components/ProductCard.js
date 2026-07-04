"use client";

import { useState } from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import StarRating from "./StarRating";
import WishlistButton from "./WishlistButton";
import QuickViewModal from "./QuickViewModal";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <div className="group block">
        <Link href={`/product/${product.slug}`} aria-label={`Voir ${product.name}`}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-oryn-gray">
            <ProductImage
              gradient={product.gradient}
              icon={product.icon}
              name={product.name}
              className="h-full transition-transform duration-500 group-hover:scale-105"
            />
            {product.badges?.length > 0 && (
              <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                {product.badges.map((badge, i) => (
                  <span
                    key={badge}
                    style={{ animationDelay: `${i * 100}ms` }}
                    className={`animate-popIn px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest2 ${
                      badge === "Promo"
                        ? "bg-oryn-red text-white"
                        : "bg-white text-oryn-black"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <WishlistButton
              productId={product.id}
              className="absolute right-3 top-3 bg-white/90 backdrop-blur"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuickViewOpen(true);
              }}
              className="absolute inset-x-0 bottom-0 translate-y-full bg-oryn-black py-3 text-center text-xs font-bold uppercase tracking-widest2 text-white transition-transform duration-300 group-hover:translate-y-0"
            >
              Aperçu Rapide
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-oryn-black">
              {product.name}
            </h3>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-sm font-semibold text-oryn-black">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-oryn-graydark line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>

      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  );
}
