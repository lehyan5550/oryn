// Product catalog for ORYN. Prices in USD (cents-free floats for simplicity).
// `gradient` drives the placeholder artwork used in place of real product photography.

export const CATEGORIES = [
  { slug: "training", name: "Training" },
  { slug: "combat", name: "Combat" },
  { slug: "lifestyle", name: "Lifestyle" },
  { slug: "accessories", name: "Accessories" },
];

export const PRODUCTS = [
  {
    id: "apex-performance-tee",
    slug: "apex-performance-tee",
    name: "Apex Performance Tee",
    category: "training",
    price: 45,
    compareAtPrice: null,
    badges: ["Best Seller"],
    rating: 4.8,
    reviewCount: 214,
    colors: ["Jet Black", "Off White", "Crimson"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-900 via-neutral-700 to-neutral-900",
    description:
      "Engineered for the last rep. The Apex Performance Tee moves with you through every set, sprint and strike, wicking sweat before it slows you down.",
    details: [
      "4-way stretch moisture-wicking fabric",
      "Flatlock seams eliminate chafing",
      "Anti-odor treatment",
      "Regular athletic fit",
    ],
  },
  {
    id: "fury-boxing-shorts",
    slug: "fury-boxing-shorts",
    name: "Fury Boxing Shorts",
    category: "combat",
    price: 65,
    compareAtPrice: 80,
    badges: ["Best Seller", "Sale"],
    rating: 4.9,
    reviewCount: 168,
    colors: ["Jet Black", "Crimson"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-oryn-red via-red-900 to-neutral-900",
    description:
      "Built for the ring and the cage. Fury Shorts pair a competition-grade slit with a locked-in waistband so nothing holds you back mid-round.",
    details: [
      "Side slits for unrestricted kicks",
      "Wide elastic + drawcord waistband",
      "Lightweight ripstop shell",
      "Reinforced stitching at stress points",
    ],
  },
  {
    id: "vanguard-hoodie",
    slug: "vanguard-hoodie",
    name: "Vanguard Hoodie",
    category: "lifestyle",
    price: 85,
    compareAtPrice: null,
    badges: ["Best Seller"],
    rating: 4.9,
    reviewCount: 342,
    colors: ["Jet Black", "Stone Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-800 via-neutral-900 to-black",
    description:
      "Heavyweight fleece with a premium drape. The Vanguard Hoodie is the off-duty uniform for those who train harder than everyone else.",
    details: [
      "420gsm brushed-back fleece",
      "Ribbed cuffs and hem for lasting shape",
      "Kangaroo pocket with hidden zip stash",
      "Oversized, drop-shoulder fit",
    ],
  },
  {
    id: "core-compression-leggings",
    slug: "core-compression-leggings",
    name: "Core Compression Leggings",
    category: "training",
    price: 70,
    compareAtPrice: null,
    badges: ["New"],
    rating: 4.7,
    reviewCount: 96,
    colors: ["Jet Black", "Off White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    gradient: "from-neutral-900 via-zinc-800 to-neutral-950",
    description:
      "Second-skin compression that supports muscle recovery while you push through the final set. Squat-proof, sweat-proof, built for volume.",
    details: [
      "Squat-proof 4-way stretch compression",
      "High-rise waistband, no dig-in",
      "Hidden waistband pocket",
      "Flatlock seams",
    ],
  },
  {
    id: "reign-joggers",
    slug: "reign-joggers",
    name: "Reign Joggers",
    category: "lifestyle",
    price: 75,
    compareAtPrice: null,
    badges: [],
    rating: 4.6,
    reviewCount: 121,
    colors: ["Jet Black", "Stone Gray", "Crimson"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-zinc-800 via-neutral-900 to-black",
    description:
      "Tapered, tailored and built from brushed fleece. Reign Joggers carry you from the gym floor to the street without missing a beat.",
    details: [
      "Brushed fleece interior",
      "Tapered leg with ribbed ankle cuff",
      "Zippered side pockets",
      "Adjustable drawcord waist",
    ],
  },
  {
    id: "strike-rash-guard",
    slug: "strike-rash-guard",
    name: "Strike Rash Guard",
    category: "combat",
    price: 55,
    compareAtPrice: null,
    badges: [],
    rating: 4.7,
    reviewCount: 74,
    colors: ["Jet Black", "Crimson"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-red-900 via-oryn-red to-black",
    description:
      "Compression-fit protection for grappling and striking alike. The Strike Rash Guard locks in place through every scramble.",
    details: [
      "UPF 50+ compression fabric",
      "Flatlock stitching prevents mat burn",
      "Long sleeve, rashguard-grade compression",
      "Quick-dry technical fabric",
    ],
  },
  {
    id: "momentum-tank",
    slug: "momentum-tank",
    name: "Momentum Tank",
    category: "training",
    price: 38,
    compareAtPrice: null,
    badges: [],
    rating: 4.5,
    reviewCount: 58,
    colors: ["Jet Black", "Off White", "Stone Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-700 via-neutral-900 to-black",
    description:
      "Drop-arm tank cut for maximum range of motion under the bar. Lightweight, breathable, unapologetically minimal.",
    details: [
      "Dropped armhole for full mobility",
      "Featherweight breathable mesh panels",
      "Curved hem",
      "Regular fit",
    ],
  },
  {
    id: "sentinel-bomber-jacket",
    slug: "sentinel-bomber-jacket",
    name: "Sentinel Bomber Jacket",
    category: "lifestyle",
    price: 145,
    compareAtPrice: 175,
    badges: ["Sale"],
    rating: 4.9,
    reviewCount: 87,
    colors: ["Jet Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-950 via-black to-neutral-900",
    description:
      "A statement outer layer for the ORYN athlete off the clock. Structured shoulders, weatherproof shell, minimal branding.",
    details: [
      "Water-resistant shell fabric",
      "Quilted thermal lining",
      "Ribbed collar, cuffs and hem",
      "Interior zip pocket",
    ],
  },
  {
    id: "grip-training-gloves",
    slug: "grip-training-gloves",
    name: "Grip Training Gloves",
    category: "accessories",
    price: 35,
    compareAtPrice: null,
    badges: ["New"],
    rating: 4.6,
    reviewCount: 42,
    colors: ["Jet Black", "Crimson"],
    sizes: ["S", "M", "L", "XL"],
    gradient: "from-neutral-800 via-oryn-red to-black",
    description:
      "Reinforced palm padding built for barbell, bag and battle. The Grip Training Gloves protect your hands without sacrificing feel.",
    details: [
      "Silicone-reinforced palm grip",
      "Breathable mesh back panel",
      "Adjustable wrist strap",
      "Machine washable",
    ],
  },
  {
    id: "oryn-gym-bag",
    slug: "oryn-gym-bag",
    name: "ORYN Gym Bag",
    category: "accessories",
    price: 60,
    compareAtPrice: null,
    badges: ["Best Seller"],
    rating: 4.8,
    reviewCount: 133,
    colors: ["Jet Black"],
    sizes: ["One Size"],
    gradient: "from-neutral-900 via-zinc-800 to-black",
    description:
      "Ventilated shoe compartment, wet-gear pocket and a shell that shrugs off gym floors and locker rooms alike.",
    details: [
      "Dedicated ventilated shoe compartment",
      "Water-resistant base panel",
      "Adjustable padded shoulder strap",
      "34L capacity",
    ],
  },
  {
    id: "phantom-track-jacket",
    slug: "phantom-track-jacket",
    name: "Phantom Track Jacket",
    category: "lifestyle",
    price: 95,
    compareAtPrice: null,
    badges: ["New"],
    rating: 4.7,
    reviewCount: 51,
    colors: ["Jet Black", "Stone Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-zinc-700 via-neutral-900 to-black",
    description:
      "A lightweight full-zip layer for warmups and cooldowns. Streamlined silhouette, zero excess.",
    details: [
      "Lightweight woven shell",
      "Full-zip with stand collar",
      "Zippered side pockets",
      "Elastic cuffs and hem",
    ],
  },
  {
    id: "ascend-seamless-shorts",
    slug: "ascend-seamless-shorts",
    name: "Ascend Seamless Shorts",
    category: "training",
    price: 42,
    compareAtPrice: null,
    badges: [],
    rating: 4.5,
    reviewCount: 39,
    colors: ["Jet Black", "Off White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    gradient: "from-neutral-800 via-neutral-950 to-black",
    description:
      "Seamless construction for zero chafe, zero restriction. Built for HIIT, lifting and everything between.",
    details: [
      "Seamless knit construction",
      "Built-in liner",
      "5-inch inseam",
      "Elastic waistband with drawcord",
    ],
  },
  {
    id: "warrior-compression-sleeve",
    slug: "warrior-compression-sleeve",
    name: "Warrior Compression Sleeve",
    category: "accessories",
    price: 25,
    compareAtPrice: null,
    badges: [],
    rating: 4.4,
    reviewCount: 28,
    colors: ["Jet Black", "Crimson"],
    sizes: ["S/M", "L/XL"],
    gradient: "from-oryn-red via-neutral-900 to-black",
    description:
      "Graduated compression that supports joints through heavy loads and long rounds. Wear it under or over.",
    details: [
      "Graduated compression knit",
      "Anti-slip silicone band",
      "Breathable, quick-dry",
      "Sold as a pair",
    ],
  },
  {
    id: "zenith-muscle-tee",
    slug: "zenith-muscle-tee",
    name: "Zenith Muscle Tee",
    category: "training",
    price: 40,
    compareAtPrice: null,
    badges: [],
    rating: 4.6,
    reviewCount: 65,
    colors: ["Jet Black", "Off White", "Stone Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-700 via-neutral-800 to-neutral-950",
    description:
      "Cut wide at the shoulder and tapered at the waist. The Zenith Muscle Tee is built to move under heavy iron.",
    details: [
      "Heavyweight cotton-blend jersey",
      "Wide armhole, tapered fit",
      "Ribbed crew neck",
      "Pre-shrunk fabric",
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => p.badges.includes("Best Seller"));
}

export function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, count);
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categorySlug);
}
