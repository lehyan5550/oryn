"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import SearchOverlay from "./SearchOverlay";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const LINKS = [
  { href: "/collection", label: "Boutique" },
  { href: "/collection/entrainement", label: "Entraînement" },
  { href: "/collection/combat", label: "Combat" },
  { href: "/collection/recuperation", label: "Récupération" },
  { href: "/about", label: "À Propos" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const { ids: wishlistIds } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-oryn-gray" : "bg-white border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:h-20 md:px-8">
        <button
          className="flex items-center md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span className="flex h-5 w-6 flex-col justify-between">
            <span className={`h-0.5 w-full bg-oryn-black transition-transform ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-oryn-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-oryn-black transition-transform ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </span>
        </button>

        <Link href="/" className="text-oryn-black" aria-label="ORYN, retour à l'accueil">
          <Logo className="h-6 md:h-7" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest2 text-oryn-black transition-colors hover:text-oryn-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden text-oryn-black hover:text-oryn-red md:block"
            aria-label="Rechercher un produit"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/favoris"
            className="relative hidden text-oryn-black hover:text-oryn-red md:block"
            aria-label={`Mes favoris, ${wishlistIds.length} articles`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.5-9.5-9C.7 8.4 2 5 5.3 4.2 7.6 3.6 10 4.7 12 7c2-2.3 4.4-3.4 6.7-2.8C22 5 23.3 8.4 21.5 12c-2.5 4.5-9.5 9-9.5 9Z" />
            </svg>
            {wishlistIds.length > 0 && (
              <span
                key={wishlistIds.length}
                className="absolute -right-2 -top-2 flex h-4 w-4 animate-popIn items-center justify-center rounded-full bg-oryn-red text-[10px] font-bold text-white"
              >
                {wishlistIds.length}
              </span>
            )}
          </Link>
          <button
            onClick={openDrawer}
            className="relative flex items-center"
            aria-label={`Ouvrir le panier, ${itemCount} articles`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
              <path d="M6 6l-1-3H2" strokeLinecap="round" />
              <circle cx="9" cy="20" r="1.3" />
              <circle cx="18" cy="20" r="1.3" />
            </svg>
            {itemCount > 0 && (
              <span
                key={itemCount}
                className="absolute -right-2 -top-2 flex h-4 w-4 animate-popIn items-center justify-center rounded-full bg-oryn-red text-[10px] font-bold text-white"
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-oryn-gray bg-white px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest2 text-oryn-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/favoris"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest2 text-oryn-black"
              >
                Mes Favoris ({wishlistIds.length})
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="text-sm font-bold uppercase tracking-widest2 text-oryn-black"
              >
                Rechercher
              </button>
            </li>
          </ul>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
