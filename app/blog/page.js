import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import ProductImage from "@/components/ProductImage";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Le Journal — Entraînement, Combat & Récupération",
  description:
    "Le Journal ORYN explore la méthodologie d'entraînement, la préparation physique en sports de combat, la récupération et le mindset de la performance.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          Le Journal
        </p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tightest md:text-5xl">
          Décryptages pour Athlètes
        </h1>
      </div>

      <Link
        href={`/blog/${featured.slug}`}
        className="group mb-16 grid gap-6 border-b border-oryn-gray pb-16 md:grid-cols-2 md:gap-10"
      >
        <div className="aspect-[16/10] w-full overflow-hidden">
          <ProductImage
            gradient={featured.gradient}
            compact
            className="h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            {featured.category} &middot; {featured.readTime}
          </p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tightest group-hover:text-oryn-red md:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-oryn-graydark">
            {featured.excerpt}
          </p>
          <span className="mt-4 inline-block w-fit text-xs font-bold uppercase tracking-widest2">
            Lire l&apos;Article &rarr;
          </span>
        </div>
      </Link>

      <div className="grid gap-x-6 gap-y-14 md:grid-cols-3">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={i * 100}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ProductImage
                  gradient={post.gradient}
                  compact
                  className="h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
                {post.category} &middot; {post.readTime}
              </p>
              <h2 className="mt-2 text-lg font-bold uppercase leading-snug tracking-wide group-hover:text-oryn-red">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-oryn-graydark">
                {post.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
