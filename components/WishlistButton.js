"use client";

import { useWishlist } from "@/context/WishlistContext";

export default function WishlistButton({ productId, className = "" }) {
  const { isWishlisted, toggle } = useWishlist();
  const active = isWishlisted(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(productId);
      }}
      aria-label={active ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={active}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-110 active:scale-90 ${
        active
          ? "border-oryn-red bg-oryn-red text-white"
          : "border-oryn-gray bg-white text-oryn-black hover:border-oryn-black"
      } ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${active ? "animate-popIn" : ""}`}
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-7-4.5-9.5-9C.7 8.4 2 5 5.3 4.2 7.6 3.6 10 4.7 12 7c2-2.3 4.4-3.4 6.7-2.8C22 5 23.3 8.4 21.5 12c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    </button>
  );
}
