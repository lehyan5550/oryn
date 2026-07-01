import CollectionGrid from "@/components/CollectionGrid";

export const metadata = {
  title: "Toute la Collection — Vêtements de Sport & Combat",
  description:
    "Parcourez toute la collection ORYN : vêtements d'entraînement, de combat et lifestyle premium. Filtrez par catégorie et par prix, livraison en France.",
  alternates: { canonical: "/collection" },
};

export default function CollectionPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          Toute la Gamme
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          Toute la Collection
        </h1>
      </div>
      <CollectionGrid activeCategoryKey="all" />
    </div>
  );
}
