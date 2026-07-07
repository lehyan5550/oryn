"use client";

import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { trackPurchase } from "@/lib/pixels";

// Fires once on the order-confirmation page: records the Purchase
// conversion event and empties the cart now that the order went through.
export default function PurchaseTracking({ amount, transactionId }) {
  const { clearCart } = useCart();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackPurchase({ value: amount, transactionId });
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
