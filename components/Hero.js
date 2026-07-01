import Button from "./Button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-oryn-black text-white">
      {/* Visuel / vidéo de hero à remplacer par de la photographie fitness ou un MP4 en boucle */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#2a2a2a_0%,#111111_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_16px)]" />
        <Logo
          mark
          wordmark={false}
          light
          className="absolute right-[-6%] top-1/2 h-[70vh] -translate-y-1/2 opacity-[0.08]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-oryn-red animate-fadeIn">
          Performance / Combat / Lifestyle
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tightest animate-fadeIn sm:text-6xl md:text-7xl lg:text-8xl">
          Entraînez-Vous Comme
          <br />
          au Dernier Round
        </h1>
        <p className="mt-6 max-w-md text-base text-neutral-300 animate-fadeIn md:text-lg">
          ORYN conçoit des vêtements de performance pour les athlètes qui ne
          séparent pas la salle du combat. Pensés pour bouger, faits pour
          durer.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 animate-fadeIn">
          <Button href="/collection" variant="inverse" size="lg">
            Acheter Maintenant
          </Button>
          <Button href="/about" variant="outlineLight" size="lg">
            Découvrir ORYN
          </Button>
        </div>
      </div>
    </section>
  );
}
