import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Nous Contacter",
  description: "Contactez le service client ORYN pour toute question sur votre commande, un produit ou une réclamation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage kicker="Aide" title="Nous Contacter">
      <section>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Une question sur une commande, un produit ou une taille ? Notre
          équipe vous répond sous 24h ouvrées.
        </p>
        <div className="mt-6 space-y-2 text-sm">
          <p>
            <span className="font-semibold uppercase tracking-wide">Email : </span>
            <a href="mailto:contact@oryn.fr" className="text-oryn-red hover:underline">
              contact@oryn.fr
            </a>
          </p>
          <p>
            <span className="font-semibold uppercase tracking-wide">Horaires : </span>
            Lundi – Vendredi, 9h – 18h
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Envoyez-Nous un Message</h2>
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-widest2">
                Nom
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full border border-oryn-gray px-4 py-3 text-sm focus:border-oryn-black focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-widest2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-oryn-gray px-4 py-3 text-sm focus:border-oryn-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-widest2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full border border-oryn-gray px-4 py-3 text-sm focus:border-oryn-black focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-oryn-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-white transition-colors hover:bg-oryn-red"
          >
            Envoyer le Message
          </button>
        </form>
      </section>
    </LegalPage>
  );
}
