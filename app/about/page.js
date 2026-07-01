import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";

export const metadata = {
  title: "About ORYN — Our Story, Mission & Values",
  description:
    "ORYN was built for athletes who don't separate the gym from the fight. Learn our story, our mission and the values behind every piece we make.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Performance First",
    copy: "Every fabric is tested under real training conditions before it earns the ORYN name. No exceptions.",
  },
  {
    title: "Built to Last",
    copy: "We design for the hundredth wash, not the first. Longevity is a feature, not an accident.",
  },
  {
    title: "No Noise",
    copy: "Minimal branding, maximum function. The work should speak louder than the logo.",
  },
  {
    title: "Global Standard",
    copy: "One quality bar, everywhere we ship. An athlete in Tokyo gets the same gear as an athlete in Los Angeles.",
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
            About ORYN
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tightest md:text-6xl">
            Built for the Discipline Between Training and Competing
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <h2 className="text-2xl font-extrabold uppercase tracking-tightest md:text-3xl">
          Our Story
        </h2>
        <p className="mt-6 text-base leading-relaxed text-oryn-graydark">
          ORYN started with a simple frustration: performance apparel that
          looked the part in a photo shoot but fell apart under real training
          load. Our founders — a strength coach and a combat sports athlete —
          set out to build gear that could survive fight camp, heavy lifting
          blocks, and everything in between, without sacrificing the way it
          looked when the work was done.
        </p>
        <p className="mt-4 text-base leading-relaxed text-oryn-graydark">
          Today ORYN outfits athletes across more than 40 countries — from
          amateur fighters preparing for their first bout to lifters chasing
          a new one-rep max. The mission hasn&apos;t changed: build apparel
          that performs as hard as the people who wear it.
        </p>
      </section>

      <section id="mission" className="border-y border-oryn-gray bg-oryn-gray/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="text-2xl font-extrabold uppercase tracking-tightest md:text-3xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-oryn-black md:text-xl">
            To equip athletes worldwide with performance apparel engineered
            to the standard of competition — so nothing you wear ever holds
            you back from what you&apos;re capable of.
          </p>
        </div>
      </section>

      <section id="values" className="mx-auto max-w-8xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
            What We Stand For
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
            Our Values
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
          Train With ORYN
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
          Explore the collection and find the gear built for your next
          session.
        </p>
        <Button href="/collection" variant="inverse" size="lg" className="mt-8">
          Shop Now
        </Button>
      </section>
    </div>
  );
}
