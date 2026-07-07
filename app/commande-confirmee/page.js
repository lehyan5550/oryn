import Link from "next/link";
import Button from "@/components/Button";
import PurchaseTracking from "@/components/PurchaseTracking";
import { getStripe } from "@/lib/stripe";

export const metadata = {
  title: "Commande Confirmée",
  robots: { index: false, follow: false },
};

async function getSession(sessionId) {
  const stripe = getStripe();
  if (!stripe || !sessionId) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

export default async function OrderConfirmedPage({ searchParams }) {
  const params = await searchParams;
  const session = await getSession(params?.session_id);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-8xl flex-col items-center justify-center px-4 text-center">
      {session && (
        <PurchaseTracking
          amount={session.amount_total ? session.amount_total / 100 : 0}
          transactionId={session.id}
        />
      )}
      <p className="mb-3 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
        Merci !
      </p>
      <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
        Commande Confirmée
      </h1>
      <p className="mt-4 max-w-md text-sm text-oryn-graydark">
        Votre paiement a bien été reçu. Un email de confirmation vous a été
        envoyé avec le récapitulatif de votre commande.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/collection">Continuer mes Achats</Button>
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
        >
          Retour à l&apos;Accueil
        </Link>
      </div>
    </div>
  );
}
