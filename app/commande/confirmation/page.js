import OrderConfirmation from "@/components/OrderConfirmation";

export const metadata = {
  title: "Confirmation de Commande",
  robots: { index: false, follow: false },
};

export default async function OrderConfirmationPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = params?.session_id || null;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-8xl flex-col items-center justify-center px-4 text-center">
      <OrderConfirmation sessionId={sessionId} />
    </div>
  );
}
