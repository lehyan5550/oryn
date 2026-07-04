import Link from "next/link";

const ITEMS = [
  {
    question: "Quels sont les délais et frais de livraison ?",
    answer:
      "Livraison en France métropolitaine sous 2 à 4 jours ouvrés, gratuite dès 100€ d'achat (5,90€ en dessous). Livraison en Union Européenne sous 4 à 7 jours ouvrés.",
    href: "/livraison-retours",
    linkLabel: "Voir tous les détails de livraison",
  },
  {
    question: "Puis-je retourner cet article ?",
    answer:
      "Oui, vous disposez de 30 jours à compter de la réception pour retourner un article non porté, dans son emballage d'origine. Les retours sont gratuits en France métropolitaine.",
    href: "/livraison-retours",
    linkLabel: "Voir la politique de retour",
  },
  {
    question: "Comment choisir la bonne taille ?",
    answer:
      "Consultez notre guide des tailles avec tableau des mesures (tour de poitrine et de taille) pour choisir en toute confiance.",
    href: "/guide-des-tailles",
    linkLabel: "Ouvrir le guide des tailles",
  },
];

export default function ProductFAQ() {
  return (
    <div className="divide-y divide-oryn-gray border-y border-oryn-gray">
      {ITEMS.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold uppercase tracking-wide">
            {item.question}
            <span className="ml-4 text-lg text-oryn-graydark transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-oryn-graydark">
            <p>{item.answer}</p>
            <Link href={item.href} className="mt-2 inline-block font-semibold text-oryn-black underline hover:text-oryn-red">
              {item.linkLabel}
            </Link>
          </div>
        </details>
      ))}
    </div>
  );
}
