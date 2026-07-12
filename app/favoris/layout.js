export const metadata = {
  title: "Mes Favoris",
  description: "Retrouvez les produits ORYN que vous avez ajoutés à vos favoris.",
  alternates: { canonical: "/favoris" },
  robots: { index: false, follow: true },
};

export default function FavorisLayout({ children }) {
  return children;
}
