import Logo from "./Logo";

// Stylized placeholder artwork standing in for product photography.
// Swap with real <Image> assets by dropping files into /public/products
// and rendering them here once photography is available.
export default function ProductImage({
  gradient = "from-neutral-800 via-neutral-900 to-black",
  name,
  className = "",
  compact = false,
}) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_14px)]" />
      <Logo
        mark
        wordmark={false}
        light
        className={compact ? "h-10 opacity-25" : "h-16 md:h-20 opacity-20"}
      />
      {!compact && name && (
        <span className="absolute bottom-4 left-4 right-4 text-center text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
          {name}
        </span>
      )}
    </div>
  );
}
