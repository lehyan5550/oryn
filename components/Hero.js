import Button from "./Button";
import HeroParallaxBackground from "./HeroParallaxBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-oryn-black text-white">
      {/* Visuel / vidéo de hero à remplacer par de la photographie fitness ou un MP4 en boucle */}
      <HeroParallaxBackground />

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 pb-16 pt-40 md:px-8 md:pb-24">
        <p
          className="mb-4 text-xs font-bold uppercase tracking-widest2 text-oryn-red animate-fadeIn motion-reduce:animate-none"
          style={{ animationDelay: "0ms" }}
        >
          Performance / Combat / Lifestyle
        </p>
        <h1
          className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tightest animate-fadeIn motion-reduce:animate-none sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "80ms" }}
        >
          Entraînez-Vous Comme
          <br />
          au Dernier Round
        </h1>
        <p
          className="mt-6 max-w-md text-base text-neutral-300 animate-fadeIn motion-reduce:animate-none md:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          ORYN conçoit des vêtements de performance pour les athlètes qui ne
          séparent pas la salle du combat. Pensés pour bouger, faits pour
          durer.
        </p>
        <div
          className="mt-8 flex flex-wrap gap-4 animate-fadeIn motion-reduce:animate-none"
          style={{ animationDelay: "340ms" }}
        >
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
