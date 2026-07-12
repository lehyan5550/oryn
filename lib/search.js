import { PRODUCTS, getCategoryByKey } from "@/data/products";

// Strips combining diacritical marks left behind by NFD normalization,
// so "entrainement" (no accent) still matches "Entraînement".
const DIACRITICS_REGEX = /[̀-ͯ]/g;

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .toLowerCase()
    .trim();
}

export function searchProducts(query) {
  const q = normalize(query || "");
  if (!q) return [];

  return PRODUCTS.filter((p) => {
    const category = getCategoryByKey(p.category);
    const haystack = normalize(
      `${p.name} ${p.description} ${category?.name || ""}`
    );
    return haystack.includes(q);
  });
}
