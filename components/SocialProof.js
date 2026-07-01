const STATS = [
  { value: "180K+", label: "Athlètes dans le Monde" },
  { value: "4,8/5", label: "Note Moyenne" },
  { value: "42", label: "Pays Livrés" },
  { value: "10K+", label: "Avis 5 Étoiles" },
];

const TESTIMONIALS = [
  {
    quote:
      "L'équipement ORYN est le seul en qui j'ai confiance pour préparer un combat. Il bouge avec moi et reste impeccable après une centaine de lavages.",
    author: "Marcus T.",
    role: "MMA Amateur",
  },
  {
    quote:
      "Le Vanguard Hoodie vit littéralement sur moi. Épais, ne bouloche pas, taille exactement comme sur les photos.",
    author: "Elena V.",
    role: "Coach de Force",
  },
  {
    quote:
      "Enfin une marque qui comprend à la fois la performance et le style en dehors de la salle. Cliente fidèle pour longtemps.",
    author: "Diego M.",
    role: "Athlète CrossFit",
  },
];

export default function SocialProof() {
  return (
    <section className="border-y border-oryn-gray bg-white py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold tracking-tightest text-oryn-black md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest2 text-oryn-graydark">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            La Confiance des Athlètes
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Ce Qu&apos;ils En Disent
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="border border-oryn-gray p-6 md:p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-oryn-black">
                    <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-oryn-black">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-widest2 text-oryn-graydark">
                {t.author} &mdash; {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
