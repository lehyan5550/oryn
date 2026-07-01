import Link from "next/link";
import { getBestSellers } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const products = getBestSellers().slice(0, 4);

  return (
    <section className="mx-auto max-w-8xl px-4 py-20 md:px-8 md:py-28">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            Les Préférés
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Meilleures Ventes
          </h2>
        </div>
        <Link
          href="/collection"
          className="hidden text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red md:block"
        >
          Voir Tout &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link
          href="/collection"
          className="text-xs font-bold uppercase tracking-widest2 hover:text-oryn-red"
        >
          Voir Tout &rarr;
        </Link>
      </div>
    </section>
  );
}
