import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="bg-oryn-black py-20 text-white md:py-24">
      <Reveal as="div" className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
          Rejoignez le Cercle ORYN
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          Accès prioritaire aux nouveautés, contenus d&apos;entraînement et
          10% de réduction sur votre première commande.
        </p>
        <form className="mx-auto mt-8 flex max-w-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Entrez votre email"
            className="w-full border border-neutral-700 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-oryn-red px-6 text-xs font-bold uppercase tracking-widest2 text-white transition-colors hover:bg-red-700 active:scale-95"
          >
            S&apos;inscrire
          </button>
        </form>
      </Reveal>
    </section>
  );
}
