import { notFound } from "next/navigation";
import { CATEGORIES, getCategoryBySlug } from "@/data/products";
import CollectionGrid from "@/components/CollectionGrid";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    alternates: { canonical: `/collection/${cat.slug}` },
    openGraph: {
      title: `${cat.seoTitle} | ORYN`,
      description: cat.seoDescription,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          Collection {cat.name}
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          {cat.name}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-oryn-graydark">
          {cat.seoIntro}
        </p>
      </div>
      <CollectionGrid activeCategoryKey={cat.key} />
    </div>
  );
}
