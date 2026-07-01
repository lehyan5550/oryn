import StarRating from "./StarRating";

export default function Review({ review }) {
  return (
    <div className="border-b border-oryn-gray py-6 first:pt-0 last:border-0">
      <div className="flex items-center justify-between">
        <StarRating rating={review.rating} />
        {review.verified && (
          <span className="text-[10px] font-bold uppercase tracking-widest2 text-green-700">
            Verified Buyer
          </span>
        )}
      </div>
      <h4 className="mt-3 text-sm font-bold uppercase tracking-wide">
        {review.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-oryn-graydark">
        {review.body}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest2 text-oryn-black">
        {review.author}
        <span className="ml-2 font-normal normal-case text-oryn-graydark">
          {new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>
    </div>
  );
}
