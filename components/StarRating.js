export default function StarRating({ rating = 0, reviewCount, size = "sm" }) {
  const dim = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`${dim} ${i <= Math.round(rating) ? "fill-oryn-black" : "fill-oryn-gray"}`}
          >
            <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
          </svg>
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-oryn-graydark">({reviewCount})</span>
      )}
    </div>
  );
}
