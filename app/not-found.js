import Button from "@/components/Button";

export const metadata = {
  title: "Page Introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-8xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-widest2 text-oryn-red">404</p>
      <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
        Page Introuvable
      </h1>
      <p className="mt-4 max-w-md text-sm text-oryn-graydark">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Retour à l&apos;Accueil</Button>
        <Button href="/collection" variant="outline">Acheter Maintenant</Button>
      </div>
    </div>
  );
}
