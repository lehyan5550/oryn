import Link from "next/link";
import ProductImage from "./ProductImage";

const CATEGORY_TILES = [
  {
    slug: "entrainement",
    name: "Entraînement",
    copy: "Conçu pour les répétitions, les séries et tout ce qu'il y a entre les deux.",
    gradient: "from-neutral-800 via-neutral-900 to-black",
  },
  {
    slug: "combat",
    name: "Combat",
    copy: "Un équipement de performance prêt pour le ring et la cage.",
    gradient: "from-oryn-red via-red-900 to-black",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    copy: "Les essentiels hors entraînement, avec une finition premium.",
    gradient: "from-zinc-700 via-neutral-900 to-black",
  },
];

export default function CategoryPreview() {
  return (
    <section className="bg-oryn-gray/40 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            Achetez par Catégorie
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Trouvez Votre Discipline
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.slug}
              href={`/collection/${tile.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <ProductImage
                gradient={tile.gradient}
                compact
                className="h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                <h3 className="text-2xl font-extrabold uppercase tracking-tightest text-white">
                  {tile.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-200">{tile.copy}</p>
                <span className="mt-4 inline-block w-fit border-b border-white text-xs font-bold uppercase tracking-widest2 text-white transition-colors group-hover:border-oryn-red group-hover:text-oryn-red">
                  Voir {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
