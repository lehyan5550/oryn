"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ProductImage from "./ProductImage";
import Button from "./Button";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { items, subtotal, isDrawerOpen, closeDrawer, updateQuantity, removeItem } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Panier"
      >
        <div className="flex items-center justify-between border-b border-oryn-gray px-6 py-5">
          <h2 className="text-sm font-bold uppercase tracking-widest2">
            Panier ({items.reduce((n, i) => n + i.quantity, 0)})
          </h2>
          <button onClick={closeDrawer} aria-label="Fermer le panier" className="text-2xl leading-none">
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm text-oryn-graydark">Votre panier est vide.</p>
            <Button href="/collection" onClick={closeDrawer} size="sm">
              Acheter Maintenant
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-oryn-gray overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <div className="h-24 w-20 flex-shrink-0">
                    <ProductImage gradient={item.gradient} compact className="h-full" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeDrawer}
                        className="text-sm font-bold uppercase tracking-wide hover:text-oryn-red"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-oryn-graydark">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-oryn-gray">
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label={`Retirer ${item.name}`}
                    className="self-start text-oryn-graydark hover:text-oryn-red"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-oryn-gray px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm font-semibold">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-xs text-oryn-graydark">
                Frais de livraison et taxes calculés lors du paiement.
              </p>
              <Button href="/cart" onClick={closeDrawer} fullWidth>
                Voir le Panier & Commander
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
