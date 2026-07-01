"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { href: "/collection", label: "Shop" },
  { href: "/collection?category=training", label: "Training" },
  { href: "/collection?category=combat", label: "Combat" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

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
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="flex h-5 w-6 flex-col justify-between">
            <span className={`h-0.5 w-full bg-oryn-black transition-transform ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-oryn-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-oryn-black transition-transform ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </span>
        </button>

        <Link href="/" className="text-oryn-black" aria-label="ORYN home">
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
          <Link
            href="/collection"
            className="hidden text-xs font-bold uppercase tracking-widest2 text-oryn-black hover:text-oryn-red md:block"
            aria-label="Search products"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </Link>
          <button
            onClick={openDrawer}
            className="relative flex items-center"
            aria-label={`Open cart, ${itemCount} items`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
              <path d="M6 6l-1-3H2" strokeLinecap="round" />
              <circle cx="9" cy="20" r="1.3" />
              <circle cx="18" cy="20" r="1.3" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-oryn-red text-[10px] font-bold text-white">
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
          </ul>
        </div>
      )}
    </header>
  );
}
