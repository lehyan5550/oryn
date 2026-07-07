"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Button from "./Button";
import { getSwatch } from "@/lib/colors";

export default function AddToCartForm({ product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  // Client-side navigation between product pages reuses this component
  // instance, so selections must reset whenever the product itself changes.
  useEffect(() => {
    setSize(product.sizes[0]);
    setColor(product.colors[0]);
    setQuantity(1);
    setAdded(false);
  }, [product.id]);

  const handleAdd = () => {
    addItem(product, { size, color, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2">
          Couleur : <span className="font-normal normal-case text-oryn-graydark">{color}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              aria-label={c}
              aria-pressed={color === c}
              title={c}
              className={`h-9 w-9 rounded-full border-2 transition-all ${
                color === c
                  ? "border-oryn-black ring-2 ring-offset-2 ring-oryn-black"
                  : "border-oryn-gray hover:border-oryn-black"
              }`}
              style={{ backgroundColor: getSwatch(c) }}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2">
          Taille : <span className="font-normal normal-case text-oryn-graydark">{size}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`h-11 min-w-11 border px-3 text-xs font-semibold uppercase transition-colors ${
                size === s
                  ? "border-oryn-black bg-oryn-black text-white"
                  : "border-oryn-gray text-oryn-black hover:border-oryn-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2">Quantité</p>
        <div className="flex w-fit items-center border border-oryn-gray">
          <button
            className="px-4 py-3 text-sm"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Diminuer la quantité"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            className="px-4 py-3 text-sm"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Augmenter la quantité"
          >
            +
          </button>
        </div>
      </div>

      <Button
        onClick={handleAdd}
        size="lg"
        fullWidth
        className={added ? "animate-pulseOnce bg-oryn-red border-oryn-red" : ""}
      >
        {added ? "Ajouté au Panier ✓" : "Ajouter au Panier"}
      </Button>
    </div>
  );
}
