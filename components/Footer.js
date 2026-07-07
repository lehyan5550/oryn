import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const COLUMNS = [
  {
    title: "Boutique",
    links: [
      { href: "/collection", label: "Tous les Produits" },
      { href: "/collection/lifestyle", label: "Lifestyle" },
      { href: "/collection/combat", label: "Combat" },
      { href: "/collection/entrainement", label: "Entraînement" },
      { href: "/collection/recuperation", label: "Récupération" },
      { href: "/collection/accessoires", label: "Accessoires" },
    ],
  },
  {
    title: "La Marque",
    links: [
      { href: "/about", label: "À Propos d'ORYN" },
      { href: "/blog", label: "Journal" },
      { href: "/about#values", label: "Nos Valeurs" },
      { href: "/about#mission", label: "Notre Mission" },
    ],
  },
  {
    title: "Aide",
    links: [
      { href: "/livraison-retours", label: "Livraison & Retours" },
      { href: "/guide-des-tailles", label: "Guide des Tailles" },
      { href: "/contact", label: "Nous Contacter" },
      { href: "/cart", label: "Mon Panier" },
    ],
  },
  {
    title: "Informations Légales",
    links: [
      { href: "/mentions-legales", label: "Mentions Légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/politique-de-confidentialite", label: "Confidentialité" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-oryn-black text-white">
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Logo light className="h-7" />
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              Vêtements de performance pour ceux qui s&apos;entraînent pour
              gagner — à la salle, dans la cage, dans la vie.
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterForm
                idPrefix="footer"
                placeholder="Votre email"
                buttonLabel="Ok"
                successMessage="Merci, vérifiez votre boîte mail !"
                inputClassName="w-full border border-neutral-700 bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
                buttonClassName="whitespace-nowrap bg-white px-5 text-xs font-bold uppercase tracking-widest2 text-oryn-black transition-colors hover:bg-oryn-red hover:text-white disabled:opacity-60"
              />
            </div>
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
          <p>&copy; {new Date().getFullYear()} ORYN. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
          <p>Livraison partout en France</p>
        </div>
      </div>
    </footer>
  );
}
