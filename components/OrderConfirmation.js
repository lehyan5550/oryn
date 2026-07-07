"use client";

import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";

export default function OrderConfirmation({ sessionId }) {
  const { clearCart } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    if (sessionId && !cleared.current) {
      cleared.current = true;
      clearCart();
    }
  }, [sessionId, clearCart]);

  if (!sessionId) {
    return (
      <>
        <h1 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
          Aucune Commande Trouvée
        </h1>
        <p className="mt-3 max-w-md text-sm text-oryn-graydark">
          Ce lien de confirmation n&apos;est pas valide.
        </p>
        <Button href="/collection" size="lg" className="mt-8">
          Retour à la Boutique
        </Button>
      </>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
        Merci Pour Votre Commande
      </h1>
      <p className="mt-3 max-w-md text-sm text-oryn-graydark">
        Votre paiement a été confirmé. Vous recevrez un e-mail avec le détail
        de votre commande et le suivi de livraison.
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest2 text-oryn-graydark">
        Référence : {sessionId}
      </p>
      <Button href="/collection" size="lg" className="mt-8">
        Continuer mes Achats
      </Button>
    </>
  );
}
