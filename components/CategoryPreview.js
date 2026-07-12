import Image from "next/image";
import Link from "next/link";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

const CATEGORY_TILES = [
  {
    slug: "lifestyle",
    name: "Lifestyle",
    copy: "Hoodies, joggers et essentiels épais, hors entraînement.",
    gradient: "from-zinc-700 via-neutral-900 to-black",
    icon: "hoodie",
  },
  {
    slug: "combat",
    name: "Combat",
    copy: "Un équipement de performance prêt pour le ring et la cage.",
    gradient: "from-oryn-red via-red-900 to-black",
    icon: "boxing-gloves",
  },
  {
    slug: "entrainement",
    name: "Entraînement",
    copy: "Conçu pour les répétitions, les séries et tout ce qu'il y a entre les deux.",
    gradient: "from-neutral-800 via-neutral-900 to-black",
    icon: "dumbbell",
  },
  {
    slug: "recuperation",
    name: "Récupération",
    copy: "Récupérer aussi sérieusement que vous vous entraînez.",
    gradient: "from-neutral-900 via-zinc-800 to-black",
    icon: "massage-gun",
    image: "/site/recuperation.png",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    copy: "Les détails qui complètent un équipement sans compromis.",
    gradient: "from-neutral-800 via-zinc-900 to-black",
    icon: "duffel-bag",
  },
];

export default function CategoryPreview() {
  return (
    <section className="bg-oryn-gray/40 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <Reveal className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            Achetez par Catégorie
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Trouvez Votre Discipline
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {CATEGORY_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 80}>
              <Link
                href={`/collection/${tile.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                {tile.image ? (
                  <Image
                    src={tile.image}
                    alt={tile.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProductImage
                    gradient={tile.gradient}
                    icon={tile.icon}
                    compact
                    className="h-full transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 md:p-6">
                  <h3 className="text-lg font-extrabold uppercase tracking-tightest text-white md:text-2xl">
                    {tile.name}
                  </h3>
                  <p className="mt-1 hidden text-sm text-neutral-200 md:block">{tile.copy}</p>
                  <span className="mt-2 inline-block w-fit border-b border-white text-[11px] font-bold uppercase tracking-widest2 text-white transition-colors group-hover:border-oryn-red group-hover:text-oryn-red md:mt-4 md:text-xs">
                    Voir {tile.name}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
