import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-oryn-black text-white hover:bg-oryn-red border border-oryn-black hover:border-oryn-red",
  inverse:
    "bg-white text-oryn-black hover:bg-oryn-gray border border-white",
  outline:
    "bg-transparent text-oryn-black border border-oryn-black hover:bg-oryn-black hover:text-white",
  outlineLight:
    "bg-transparent text-white border border-white hover:bg-white hover:text-oryn-black",
  red: "bg-oryn-red text-white hover:bg-red-700 border border-oryn-red",
};

const SIZES = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled = false,
  fullWidth = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest2 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
