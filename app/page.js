import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import CategoryPreview from "@/components/CategoryPreview";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "ORYN — Vêtements de Sport, Fitness & Combat Premium",
  description:
    "Découvrez les vêtements d'entraînement, de combat et lifestyle premium ORYN. Conçus pour bouger, faits pour durer. Livraison gratuite en France dès 100€.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <CategoryPreview />
      <SocialProof />
      <Newsletter />
    </>
  );
}
