export const metadata = {
  title: "Your Cart",
  description: "Review your ORYN cart, update quantities and checkout securely.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: true },
};

export default function CartLayout({ children }) {
  return children;
}
