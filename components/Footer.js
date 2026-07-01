import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { href: "/collection", label: "All Products" },
      { href: "/collection?category=training", label: "Training" },
      { href: "/collection?category=combat", label: "Combat" },
      { href: "/collection?category=lifestyle", label: "Lifestyle" },
      { href: "/collection?category=accessories", label: "Accessories" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About ORYN" },
      { href: "/blog", label: "Journal" },
      { href: "/about#values", label: "Our Values" },
      { href: "/about#mission", label: "Mission" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/cart", label: "Cart" },
      { href: "/collection", label: "Shipping & Returns" },
      { href: "/collection", label: "Size Guide" },
      { href: "/collection", label: "Contact Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-oryn-black text-white">
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo light className="h-7" />
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              Performance apparel for those who train to compete — in the gym,
              in the cage, in life.
            </p>
            <form className="mt-6 flex max-w-sm">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email"
                className="w-full border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-white px-5 text-xs font-bold uppercase tracking-widest2 text-oryn-black transition-colors hover:bg-oryn-red hover:text-white"
              >
                Join
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest2 text-neutral-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} ORYN. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
