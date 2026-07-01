"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";

const FREE_SHIPPING_THRESHOLD = 100;

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-8xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
          Your Cart Is Empty
        </h1>
        <p className="mt-3 max-w-md text-sm text-oryn-graydark">
          Looks like you haven&apos;t added anything yet. Explore the collection
          and find your next training kit.
        </p>
        <Button href="/collection" size="lg" className="mt-8">
          Shop Now
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="mb-10 text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
        Your Cart
      </h1>

      {remainingForFreeShipping > 0 ? (
        <p className="mb-8 border border-oryn-gray bg-oryn-gray/30 px-4 py-3 text-sm">
          Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more to
          unlock free worldwide shipping.
        </p>
      ) : (
        <p className="mb-8 border border-oryn-black bg-oryn-black px-4 py-3 text-sm text-white">
          You&apos;ve unlocked free worldwide shipping.
        </p>
      )}

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <ul className="divide-y divide-oryn-gray border-y border-oryn-gray">
            {items.map((item) => (
              <li key={item.key} className="flex gap-5 py-6">
                <div className="h-32 w-24 flex-shrink-0 md:h-40 md:w-32">
                  <ProductImage gradient={item.gradient} compact className="h-full" />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        className="text-sm font-bold uppercase tracking-wide hover:text-oryn-red md:text-base"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-xs text-oryn-graydark">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-sm font-semibold md:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-oryn-gray">
                      <button
                        className="px-3 py-2 text-sm"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        className="px-3 py-2 text-sm"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-xs font-semibold uppercase tracking-widest2 text-oryn-graydark hover:text-oryn-red"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/collection"
            className="mt-6 inline-block text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
          >
            &larr; Continue Shopping
          </Link>
        </div>

        <div className="h-fit border border-oryn-gray p-6 md:p-8">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest2">
            Order Summary
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-oryn-graydark">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-oryn-graydark">Shipping</span>
              <span className="font-semibold">
                {subtotal >= FREE_SHIPPING_THRESHOLD ? "Free" : "Calculated at checkout"}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-oryn-gray pt-4 text-base font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Button size="lg" fullWidth className="mt-6">
            Checkout
          </Button>
          <p className="mt-4 text-center text-xs text-oryn-graydark">
            Taxes calculated at checkout. Secure payment.
          </p>
        </div>
      </div>
    </div>
  );
}
