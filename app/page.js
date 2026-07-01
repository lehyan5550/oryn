import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import CategoryPreview from "@/components/CategoryPreview";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "ORYN — Performance & Combat Lifestyle Apparel",
  description:
    "Shop ORYN's premium training, combat and lifestyle apparel. Engineered to move, built to last. Free worldwide shipping over $100.",
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
