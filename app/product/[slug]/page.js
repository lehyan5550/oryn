import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getReviewsForProduct } from "@/data/reviews";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import Review from "@/components/Review";
import AddToCartForm from "@/components/AddToCartForm";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: `${product.name} | ORYN`,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const reviews = getReviewsForProduct(product.id);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: product.reviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        }
      : undefined,
  };

  return (
    <div className="mx-auto max-w-8xl px-4 py-10 md:px-8 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-8 text-xs text-oryn-graydark">
        <Link href="/" className="hover:text-oryn-black">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collection" className="hover:text-oryn-black">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-oryn-black">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] w-full">
          <ProductImage gradient={product.gradient} name={product.name} className="h-full" />
        </div>

        <div>
          {product.badges?.length > 0 && (
            <div className="mb-3 flex gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest2 ${
                    badge === "Sale" ? "bg-oryn-red text-white" : "bg-oryn-black text-white"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-3">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-oryn-graydark line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-oryn-graydark">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartForm product={product} />
          </div>

          <div className="mt-10 border-t border-oryn-gray pt-8">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest2">
              Product Details
            </h2>
            <ul className="space-y-2">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-2 text-sm text-oryn-graydark">
                  <span className="text-oryn-red">&bull;</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-20 max-w-2xl">
        <h2 className="mb-2 text-2xl font-extrabold uppercase tracking-tightest">
          Reviews
        </h2>
        <div className="mb-6 flex items-center gap-3">
          <StarRating rating={product.rating} size="md" />
          <span className="text-sm text-oryn-graydark">
            Based on {product.reviewCount} reviews
          </span>
        </div>
        {reviews.length > 0 ? (
          <div>
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-oryn-graydark">
            No written reviews yet — be the first to share your experience.
          </p>
        )}
      </section>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 text-2xl font-extrabold uppercase tracking-tightest">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
