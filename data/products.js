// Catalogue produits ORYN. Prix en euros (EUR).
// `gradient` pilote le visuel de substitution utilisé en attendant les vraies photos produit.

export const CATEGORIES = [
  {
    key: "training",
    slug: "entrainement",
    name: "Entraînement",
    seoTitle: "Vêtements d'Entraînement Premium",
    seoDescription:
      "Découvrez la collection Entraînement ORYN : t-shirts, leggings et shorts techniques conçus pour la performance en salle, en CrossFit et en musculation.",
    seoIntro:
      "Des matières respirantes, une coupe étudiée et une construction sans couture pour tenir la cadence, série après série.",
  },
  {
    key: "combat",
    slug: "combat",
    name: "Combat",
    seoTitle: "Vêtements de Combat & MMA Premium",
    seoDescription:
      "La collection Combat ORYN : shorts de boxe, rashguards et gants d'entraînement conçus pour le ring, la cage et les tatamis.",
    seoIntro:
      "Conçus avec des athlètes de MMA et de boxe pour résister à l'intensité de la préparation physique et de la compétition.",
  },
  {
    key: "lifestyle",
    slug: "lifestyle",
    name: "Lifestyle",
    seoTitle: "Vêtements Lifestyle Premium",
    seoDescription:
      "La collection Lifestyle ORYN : hoodies, joggers et vestes premium pensés pour la vie en dehors de la salle, sans compromis sur le style.",
    seoIntro:
      "Des pièces épaisses, bien coupées, à la finition soignée — l'uniforme officiel des athlètes hors compétition.",
  },
  {
    key: "accessories",
    slug: "accessoires",
    name: "Accessoires",
    seoTitle: "Accessoires de Sport & Combat",
    seoDescription:
      "Sacs de sport, gants d'entraînement et manchons de compression ORYN — les indispensables pour compléter votre équipement.",
    seoIntro:
      "Les détails qui font la différence entre une bonne séance et une séance sans compromis.",
  },
];

export const PRODUCTS = [
  {
    id: "apex-performance-tee",
    slug: "apex-performance-tee",
    name: "Apex Performance Tee",
    category: "training",
    price: 45,
    compareAtPrice: null,
    badges: ["Meilleure Vente"],
    rating: 4.8,
    reviewCount: 214,
    colors: ["Noir Jais", "Blanc Cassé", "Rouge Cramoisi"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-900 via-neutral-700 to-neutral-900",
    description:
      "Conçu pour la dernière répétition. L'Apex Performance Tee vous accompagne à chaque série, chaque sprint et chaque échange, en évacuant la transpiration avant qu'elle ne vous ralentisse.",
    details: [
      "Matière stretch 4 directions anti-transpiration",
      "Coutures plates anti-frottement",
      "Traitement anti-odeur",
      "Coupe athlétique régulière",
    ],
  },
  {
    id: "fury-boxing-shorts",
    slug: "fury-boxing-shorts",
    name: "Fury Boxing Shorts",
    category: "combat",
    price: 65,
    compareAtPrice: 80,
    badges: ["Meilleure Vente", "Promo"],
    rating: 4.9,
    reviewCount: 168,
    colors: ["Noir Jais", "Rouge Cramoisi"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-oryn-red via-red-900 to-neutral-900",
    description:
      "Conçu pour le ring et la cage. Le Fury Short associe une fente niveau compétition à une ceinture parfaitement maintenue pour ne rien vous freiner en plein round.",
    details: [
      "Fentes latérales pour une liberté de mouvement totale",
      "Ceinture élastique large + cordon de serrage",
      "Coque légère en ripstop",
      "Coutures renforcées aux points de tension",
    ],
  },
  {
    id: "vanguard-hoodie",
    slug: "vanguard-hoodie",
    name: "Vanguard Hoodie",
    category: "lifestyle",
    price: 85,
    compareAtPrice: null,
    badges: ["Meilleure Vente"],
    rating: 4.9,
    reviewCount: 342,
    colors: ["Noir Jais", "Gris Pierre"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-800 via-neutral-900 to-black",
    description:
      "Molleton épais, tombé premium. Le Vanguard Hoodie est la tenue officielle hors entraînement de ceux qui s'entraînent plus dur que tout le monde.",
    details: [
      "Molleton gratté 420g/m²",
      "Poignets et bas côtelés pour garder sa forme",
      "Poche kangourou avec rangement zippé caché",
      "Coupe ample, épaules tombantes",
    ],
  },
  {
    id: "core-compression-leggings",
    slug: "core-compression-leggings",
    name: "Core Compression Leggings",
    category: "training",
    price: 70,
    compareAtPrice: null,
    badges: ["Nouveau"],
    rating: 4.7,
    reviewCount: 96,
    colors: ["Noir Jais", "Blanc Cassé"],
    sizes: ["XS", "S", "M", "L", "XL"],
    gradient: "from-neutral-900 via-zinc-800 to-neutral-950",
    description:
      "Une compression seconde peau qui soutient la récupération musculaire jusqu'à la dernière série. Anti-transparence, anti-transpiration, pensé pour le volume.",
    details: [
      "Compression stretch 4 directions anti-transparence",
      "Taille haute, aucune gêne",
      "Poche cachée à la ceinture",
      "Coutures plates",
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
    colors: ["Noir Jais", "Gris Pierre", "Rouge Cramoisi"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-zinc-800 via-neutral-900 to-black",
    description:
      "Coupe fuselée, tombé soigné, molleton gratté. Le Reign Jogger vous accompagne de la salle de sport à la rue sans jamais perdre son style.",
    details: [
      "Intérieur molletonné gratté",
      "Jambe fuselée, bas de jambe côtelé",
      "Poches latérales zippées",
      "Ceinture à cordon de serrage ajustable",
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
    colors: ["Noir Jais", "Rouge Cramoisi"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-red-900 via-oryn-red to-black",
    description:
      "Protection compression pour le grappling comme pour le striking. Le Strike Rash Guard reste en place à chaque échange, à chaque transition.",
    details: [
      "Matière compression anti-UV UPF 50+",
      "Coutures plates anti-brûlure de tatami",
      "Manches longues, compression niveau rashguard",
      "Séchage rapide",
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
    colors: ["Noir Jais", "Blanc Cassé", "Gris Pierre"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-700 via-neutral-900 to-black",
    description:
      "Débardeur à emmanchure tombante taillé pour une amplitude de mouvement maximale sous la barre. Léger, respirant, résolument minimaliste.",
    details: [
      "Emmanchure tombante pour une mobilité totale",
      "Panneaux en mesh ultra-léger et respirant",
      "Bas incurvé",
      "Coupe régulière",
    ],
  },
  {
    id: "sentinel-bomber-jacket",
    slug: "sentinel-bomber-jacket",
    name: "Sentinel Bomber Jacket",
    category: "lifestyle",
    price: 145,
    compareAtPrice: 175,
    badges: ["Promo"],
    rating: 4.9,
    reviewCount: 87,
    colors: ["Noir Jais"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-950 via-black to-neutral-900",
    description:
      "Une pièce forte pour l'athlète ORYN en dehors des heures d'entraînement. Épaules structurées, coque déperlante, branding minimal.",
    details: [
      "Coque extérieure déperlante",
      "Doublure thermique matelassée",
      "Col, poignets et bas côtelés",
      "Poche intérieure zippée",
    ],
  },
  {
    id: "grip-training-gloves",
    slug: "grip-training-gloves",
    name: "Grip Training Gloves",
    category: "accessories",
    price: 35,
    compareAtPrice: null,
    badges: ["Nouveau"],
    rating: 4.6,
    reviewCount: 42,
    colors: ["Noir Jais", "Rouge Cramoisi"],
    sizes: ["S", "M", "L", "XL"],
    gradient: "from-neutral-800 via-oryn-red to-black",
    description:
      "Un rembourrage renforcé pensé pour la barre, le sac de frappe et le combat. Le Grip Training Gloves protège vos mains sans sacrifier la sensation.",
    details: [
      "Renfort paume en silicone antidérapant",
      "Dos de main en mesh respirant",
      "Sangle de poignet ajustable",
      "Lavable en machine",
    ],
  },
  {
    id: "oryn-gym-bag",
    slug: "oryn-gym-bag",
    name: "ORYN Gym Bag",
    category: "accessories",
    price: 60,
    compareAtPrice: null,
    badges: ["Meilleure Vente"],
    rating: 4.8,
    reviewCount: 133,
    colors: ["Noir Jais"],
    sizes: ["Taille Unique"],
    gradient: "from-neutral-900 via-zinc-800 to-black",
    description:
      "Compartiment chaussures ventilé, poche étanche pour affaires mouillées et une coque qui résiste aussi bien au sol de la salle qu'aux vestiaires.",
    details: [
      "Compartiment chaussures ventilé dédié",
      "Base déperlante",
      "Bandoulière matelassée réglable",
      "Capacité 34L",
    ],
  },
  {
    id: "phantom-track-jacket",
    slug: "phantom-track-jacket",
    name: "Phantom Track Jacket",
    category: "lifestyle",
    price: 95,
    compareAtPrice: null,
    badges: ["Nouveau"],
    rating: 4.7,
    reviewCount: 51,
    colors: ["Noir Jais", "Gris Pierre"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    gradient: "from-zinc-700 via-neutral-900 to-black",
    description:
      "Une couche légère zippée pour l'échauffement et la récupération. Silhouette épurée, aucun superflu.",
    details: [
      "Coque tissée légère",
      "Zip intégral, col montant",
      "Poches latérales zippées",
      "Poignets et bas élastiqués",
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
    colors: ["Noir Jais", "Blanc Cassé"],
    sizes: ["XS", "S", "M", "L", "XL"],
    gradient: "from-neutral-800 via-neutral-950 to-black",
    description:
      "Construction sans couture pour zéro frottement, zéro restriction. Pensé pour le HIIT, la musculation et tout le reste.",
    details: [
      "Construction tricotée sans couture",
      "Doublure intégrée",
      "Entrejambe 13 cm",
      "Ceinture élastique avec cordon de serrage",
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
    colors: ["Noir Jais", "Rouge Cramoisi"],
    sizes: ["S/M", "L/XL"],
    gradient: "from-oryn-red via-neutral-900 to-black",
    description:
      "Une compression progressive qui soutient les articulations sous la charge et sur la durée. À porter en dessous ou au-dessus.",
    details: [
      "Tricot à compression progressive",
      "Bande antidérapante en silicone",
      "Respirant, séchage rapide",
      "Vendu par paire",
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
    colors: ["Noir Jais", "Blanc Cassé", "Gris Pierre"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gradient: "from-neutral-700 via-neutral-800 to-neutral-950",
    description:
      "Coupe large aux épaules et resserrée à la taille. Le Zenith Muscle Tee est pensé pour bouger sous la fonte.",
    details: [
      "Jersey coton épais",
      "Emmanchure large, coupe resserrée à la taille",
      "Col rond côtelé",
      "Matière pré-rétrécie",
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => p.badges.includes("Meilleure Vente"));
}

export function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, count);
}

export function getProductsByCategory(categoryKey) {
  if (!categoryKey || categoryKey === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryKey);
}

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryByKey(key) {
  return CATEGORIES.find((c) => c.key === key);
}
