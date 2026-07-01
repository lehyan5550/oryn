import CollectionGrid from "@/components/CollectionGrid";
import { CATEGORIES } from "@/data/products";

export const metadata = {
  title: "Shop All — Training, Combat & Lifestyle Apparel",
  description:
    "Browse the full ORYN collection: performance training gear, combat apparel and lifestyle essentials. Filter by category and price.",
  alternates: { canonical: "/collection" },
};

export default async function CollectionPage({ searchParams }) {
  const params = await searchParams;
  const requested = params?.category;
  const validCategory = CATEGORIES.some((c) => c.slug === requested)
    ? requested
    : "all";

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          The Full Range
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          Shop All
        </h1>
      </div>
      <CollectionGrid initialCategory={validCategory} />
    </div>
  );
}
