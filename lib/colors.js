// Maps the French color names used in the catalog to a swatch hex value.
export const COLOR_SWATCHES = {
  "Noir Jais": "#0a0a0a",
  "Anthracite": "#4b4b4b",
  "Écru": "#e8e2d6",
  "Gris Pierre": "#8a8a8a",
  "Blanc Cassé": "#f2efe9",
  "Rouge Cramoisi": "#d90429",
};

export function getSwatch(colorName) {
  return COLOR_SWATCHES[colorName] || "#cccccc";
}
