export const metadata = {
  title: "Votre Panier",
  description: "Consultez votre panier ORYN, modifiez les quantités et commandez en toute sécurité.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: true },
};

export default function CartLayout({ children }) {
  return children;
}
