import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";

export const metadata = {
  title: "À Propos d'ORYN — Notre Histoire, Notre Mission",
  description:
    "ORYN a été créée pour les athlètes qui ne séparent pas la salle du combat. Découvrez notre histoire, notre mission et les valeurs derrière chaque pièce que nous fabriquons.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "La Performance d'Abord",
    copy: "Chaque matière est testée en conditions réelles d'entraînement avant de mériter le nom ORYN. Sans exception.",
  },
  {
    title: "Fait pour Durer",
    copy: "Nous concevons pour le centième lavage, pas pour le premier. La longévité est une caractéristique, pas un accident.",
  },
  {
    title: "Sans Superflu",
    copy: "Un branding minimal, une fonction maximale. Le travail doit parler plus fort que le logo.",
  },
  {
    title: "Une Exigence Globale",
    copy: "Un seul niveau de qualité, partout où nous livrons. Un athlète à Lyon reçoit le même équipement qu'un athlète à Tokyo.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex min-h-[60vh] items-end bg-oryn-black text-white">
        <div className="absolute inset-0">
          <ProductImage gradient="from-neutral-900 via-black to-neutral-950" className="h-full" compact />
        </div>
        <div className="relative z-10 mx-auto max-w-8xl px-4 pb-16 pt-32 md:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            À Propos d&apos;ORYN
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tightest md:text-6xl">
            Conçu pour la Discipline Entre l&apos;Entraînement et la Compétition
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <h2 className="text-2xl font-extrabold uppercase tracking-tightest md:text-3xl">
          Notre Histoire
        </h2>
        <p className="mt-6 text-base leading-relaxed text-oryn-graydark">
          ORYN est née d&apos;une frustration simple : des vêtements de
          performance qui avaient fière allure en photo mais ne tenaient pas
          face à un vrai volume d&apos;entraînement. Nos fondateurs — un
          coach de force et un athlète de sports de combat — ont décidé de
          créer un équipement capable de survivre à un camp d&apos;entraînement,
          à des blocs de musculation intenses, et à tout ce qu&apos;il y a
          entre les deux, sans sacrifier l&apos;allure une fois le travail
          terminé.
        </p>
        <p className="mt-4 text-base leading-relaxed text-oryn-graydark">
          Aujourd&apos;hui, ORYN habille des athlètes dans plus de 40 pays —
          des combattants amateurs préparant leur premier combat aux
          pratiquants de musculation visant un nouveau record personnel. La
          mission n&apos;a pas changé : fabriquer des vêtements qui
          performent aussi dur que ceux qui les portent.
        </p>
      </section>

      <section id="mission" className="border-y border-oryn-gray bg-oryn-gray/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="text-2xl font-extrabold uppercase tracking-tightest md:text-3xl">
            Notre Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-oryn-black md:text-xl">
            Équiper les athlètes du monde entier avec des vêtements de
            performance conçus selon les standards de la compétition — pour
            que rien de ce que vous portez ne vous freine jamais dans ce dont
            vous êtes capable.
          </p>
        </div>
      </section>

      <section id="values" className="mx-auto max-w-8xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            Ce en Quoi Nous Croyons
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Nos Valeurs
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {VALUES.map((value, i) => (
            <div key={value.title} className="flex gap-5 border border-oryn-gray p-6 md:p-8">
              <span className="text-3xl font-extrabold text-oryn-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-oryn-graydark">
                  {value.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-oryn-black py-20 text-center text-white md:py-24">
        <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
          Entraînez-Vous avec ORYN
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
          Explorez la collection et trouvez l&apos;équipement fait pour
          votre prochaine séance.
        </p>
        <Button href="/collection" variant="inverse" size="lg" className="mt-8">
          Acheter Maintenant
        </Button>
      </section>
    </div>
  );
}
