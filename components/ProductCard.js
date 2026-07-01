import Link from "next/link";
import ProductImage from "./ProductImage";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-oryn-gray">
        <ProductImage
          gradient={product.gradient}
          name={product.name}
          className="h-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.badges?.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest2 ${
                  badge === "Sale"
                    ? "bg-oryn-red text-white"
                    : "bg-white text-oryn-black"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-oryn-black py-3 text-center text-xs font-bold uppercase tracking-widest2 text-white transition-transform duration-300 group-hover:translate-y-0">
          View Product
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-oryn-black">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-sm font-semibold text-oryn-black">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-oryn-graydark line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
