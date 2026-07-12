// Minimalist hand-drawn line icons, one per product, rendered on the
// ProductImage placeholder in place of real photography. Consistent
// stroke style (viewBox 0 0 48 48, round joins/caps) so the whole
// catalog reads as one system regardless of product type.

const ICONS = {
  // ---- Lifestyle ----
  hoodie: (
    <>
      <path d="M14 10c0-3 4-5 10-5s10 2 10 5" />
      <path d="M14 10 5 15l3 6 6-3v20h20V18l6 3 3-6-9-5" />
      <path d="M19 10a5 5 0 0 0 10 0" />
    </>
  ),
  tshirt: (
    <>
      <path d="M17 6h14l6 7-5 5-3-3v25H14V15l-3 3-5-5 6-7" />
      <path d="M17 6a7 7 0 0 0 14 0" />
    </>
  ),
  "shorts-training": (
    <>
      <path d="M8 8h32l1 15-8 1-2-9-2 9-8-1-2 9-2-9-2 9-8-1z" />
      <path d="M8 8v-1h32v1" />
    </>
  ),
  rashguard: (
    <>
      <path d="M17 6h14l6 7-5 5-3-3v6l6 21H13l6-21v-6l-3 3-5-5 6-7" />
      <path d="M17 6a7 7 0 0 0 14 0" />
    </>
  ),
  jogger: (
    <>
      <path d="M14 6h20l2 20-4 16h-5l-3-19-3 19h-5l-4-16z" />
      <path d="M14 6h20" />
    </>
  ),
  legging: (
    <>
      <path d="M15 5h18l2 22-3 16h-5l-3-24-3 24h-5l-3-16z" />
      <path d="M15 5h18" />
    </>
  ),
  tank: (
    <>
      <path d="M16 8c2-3 14-3 16 0l2 6-4 2-2-4v27H18V12l-2 4-4-2z" />
    </>
  ),

  // ---- Combat ----
  "boxing-gloves": (
    <>
      <path d="M10 20c0-6 4-10 9-10s9 4 9 10v9a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6z" />
      <path d="M10 24 5 22l1 8 6 2" />
      <path d="M13 18v8M19 18v9M24 18v8" />
    </>
  ),
  "hand-wraps": (
    <>
      <circle cx="22" cy="24" r="12" />
      <path d="M22 12a12 12 0 0 1 0 24" strokeDasharray="3 4" />
      <path d="M34 24h6l2 10-8 2z" />
    </>
  ),
  "mma-shorts": (
    <>
      <path d="M8 8h32l1 15-8 1-2-9-2 9-8-1-2 9-2-9-2 9-8-1z" />
      <path d="M12 8l4 15M36 8l-4 15" />
    </>
  ),
  "jump-rope-weighted": (
    <>
      <circle cx="10" cy="12" r="4" />
      <circle cx="38" cy="12" r="4" />
      <path d="M10 16c0 14 8 22 14 22s14-8 14-22" />
    </>
  ),
  "focus-mitts": (
    <>
      <path d="M12 24c0-9 6-16 12-16s12 7 12 16-6 12-12 12-12-3-12-12Z" />
      <path d="M16 38l-2 6M32 38l2 6" />
    </>
  ),
  "shin-guards": (
    <>
      <path d="M18 4h8l4 10-2 22a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4l-2-22z" />
      <path d="M16 16h16M17 24h14" />
    </>
  ),
  "reflex-ball": (
    <>
      <circle cx="24" cy="28" r="9" />
      <path d="M24 4v6M18 6l3 5M30 6l-3 5" />
      <path d="M24 10c6 0 8 5 8 9" strokeDasharray="2 4" />
    </>
  ),

  // ---- Entraînement ----
  "resistance-band": (
    <>
      <circle cx="10" cy="24" r="5" />
      <circle cx="38" cy="24" r="5" />
      <path d="M15 20c8 6 10 6 18 0M15 28c8-6 10-6 18 0" />
    </>
  ),
  "speed-rope": (
    <>
      <rect x="6" y="8" width="6" height="12" rx="2" />
      <rect x="36" y="8" width="6" height="12" rx="2" />
      <path d="M9 20c0 16 10 24 15 24s15-8 15-24" />
    </>
  ),
  "yoga-mat": (
    <>
      <rect x="6" y="18" width="30" height="12" rx="2" />
      <circle cx="40" cy="24" r="6" />
      <path d="M12 18v12M18 18v12M24 18v12M30 18v12" />
    </>
  ),
  "hand-grip": (
    <>
      <path d="M10 30c0-8 6-8 6-16" />
      <path d="M38 30c0-8-6-8-6-16" />
      <path d="M10 30h28" />
      <path d="M18 14c2-4 10-4 12 0" strokeDasharray="2 3" />
    </>
  ),
  "ab-roller": (
    <>
      <circle cx="24" cy="18" r="10" />
      <path d="M24 28v10M14 34l-6 4M34 34l6 4" />
    </>
  ),
  "suspension-trainer": (
    <>
      <path d="M14 4v20M34 4v20" />
      <rect x="10" y="24" width="8" height="5" rx="1.5" />
      <rect x="30" y="24" width="8" height="5" rx="1.5" />
      <path d="M14 29v6M34 29v6" />
    </>
  ),
  dumbbell: (
    <>
      <rect x="4" y="19" width="8" height="10" rx="2" />
      <rect x="36" y="19" width="8" height="10" rx="2" />
      <path d="M12 24h24" />
      <path d="M18 21v6M30 21v6" />
    </>
  ),

  // ---- Récupération ----
  "foam-roller": (
    <>
      <rect x="6" y="16" width="36" height="16" rx="8" />
      <path d="M14 16v16M22 16v16M30 16v16" strokeDasharray="2 3" />
    </>
  ),
  "knee-sleeve": (
    <>
      <path d="M18 4h12l2 14-3 4 3 4-2 18H20l-2-18 3-4-3-4Z" />
      <path d="M17 18h14M17 26h14" />
    </>
  ),
  "wrist-wrap": (
    <>
      <rect x="4" y="20" width="26" height="8" rx="4" />
      <path d="M30 18h6a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-6" />
    </>
  ),
  "massage-ball": (
    <>
      <circle cx="24" cy="24" r="14" />
      <circle cx="19" cy="19" r="1.4" fill="currentColor" />
      <circle cx="29" cy="19" r="1.4" fill="currentColor" />
      <circle cx="24" cy="25" r="1.4" fill="currentColor" />
      <circle cx="18" cy="28" r="1.4" fill="currentColor" />
      <circle cx="30" cy="28" r="1.4" fill="currentColor" />
    </>
  ),
  "massage-gun": (
    <>
      <path d="M16 8h8v12h-8z" />
      <path d="M20 20v10" />
      <path d="M14 30h14a4 4 0 0 1 4 4v4H14a4 4 0 0 1-4-4 4 4 0 0 1 4-4Z" />
    </>
  ),
  "elbow-sleeve": (
    <>
      <path d="M18 4h12l2 12-4 6 4 6-2 16H20l-2-16 4-6-4-6Z" />
      <path d="M17 16h14M17 32h14" />
    </>
  ),
  "calf-sleeve": (
    <>
      <path d="M17 4h14l2 30-3 10H20l-3-10Z" />
      <path d="M16 14h16M16 24h16M17 34h14" />
    </>
  ),

  // ---- Accessoires ----
  "duffel-bag": (
    <>
      <rect x="6" y="16" width="36" height="20" rx="4" />
      <path d="M16 16v-3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />
      <path d="M6 26h36" />
      <path d="M18 12v4M30 12v4" />
    </>
  ),
  "water-bottle": (
    <>
      <path d="M18 4h12v6l3 4v28a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V14l3-4Z" />
      <path d="M15 22h18" />
    </>
  ),
  shaker: (
    <>
      <path d="M15 10h18l-2 32a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3Z" />
      <path d="M15 10V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
      <circle cx="24" cy="20" r="3" />
    </>
  ),
  towel: (
    <>
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <path d="M8 18h32M8 28h32M18 8v32" strokeDasharray="2 3" />
    </>
  ),
  cap: (
    <>
      <path d="M8 26c0-9 7-16 16-16s16 7 16 16" />
      <path d="M6 26h20a18 18 0 0 0 14-2c1 3-1 6-4 6H10c-2 0-4-2-4-4Z" />
      <path d="M24 10v-3" />
    </>
  ),
  backpack: (
    <>
      <path d="M14 18a10 10 0 0 1 20 0v20a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3Z" />
      <path d="M17 8h14v10H17z" />
      <path d="M18 26h12M18 32h12" />
    </>
  ),
  "lifting-straps": (
    <>
      <rect x="6" y="20" width="14" height="6" rx="2" />
      <rect x="28" y="20" width="14" height="6" rx="2" />
      <path d="M20 23h8" />
      <path d="M9 26v6M39 26v6" />
    </>
  ),
};

export default function ProductIcon({ name, className = "h-24 w-24" }) {
  const icon = ICONS[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}
