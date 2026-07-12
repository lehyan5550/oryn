export default function Logo({ className = "h-8 w-auto", mark = true, wordmark = true, light = false }) {
  const fill = light ? "#FFFFFF" : "currentColor";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark && (
        <svg
          viewBox="0 0 100 70"
          className="h-full w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 0L38 34H24L2 14V0Z"
            fill={fill}
          />
          <path
            d="M50 26L38 34H24L50 58V26Z"
            fill={fill}
          />
          <path
            d="M98 0L62 34H76L98 14V0Z"
            fill={fill}
          />
          <path
            d="M50 26L62 34H76L50 58V26Z"
            fill={fill}
          />
        </svg>
      )}
      {wordmark && (
        <span
          className="font-extrabold tracking-tightest uppercase leading-none"
          style={{ color: light ? "#FFFFFF" : "inherit" }}
        >
          ORYN
        </span>
      )}
    </span>
  );
}
