export const BLOG_POSTS = [
  {
    slug: "how-to-build-a-training-week",
    title: "How to Build a Training Week That Actually Compounds",
    excerpt:
      "Volume, intensity and recovery are a system, not three separate decisions. Here's how ORYN athletes structure seven days for long-term progress.",
    category: "Training",
    date: "2026-06-18",
    readTime: "6 min read",
    gradient: "from-neutral-800 via-neutral-900 to-black",
    content: [
      { heading: "Stop Planning Workouts, Start Planning Weeks", body: "Most athletes plan session by session, which feels productive but rarely compounds. A training week built as a single system — with volume and intensity distributed intentionally — is what separates steady progress from a string of good days followed by burnout." },
      { heading: "Balance Load Before You Balance Exercises", body: "Before choosing movements, decide how hard each day should feel relative to the others. A simple heavy/medium/light rotation across your main sessions protects your nervous system while still allowing you to push where it counts." },
      { heading: "Protect the Recovery Days on Purpose", body: "Recovery isn't the absence of training, it's a scheduled input. Athletes who treat their lightest day as non-negotiable recover faster and hit harder numbers on their heavy days than athletes who skip it when life gets busy." },
    ],
  },
  {
    slug: "combat-conditioning-fundamentals",
    title: "Combat Conditioning Fundamentals for Any Discipline",
    excerpt:
      "Whether you strike, grapple or both, conditioning wins rounds. A breakdown of the energy systems that decide who's still moving in round three.",
    category: "Combat",
    date: "2026-06-05",
    readTime: "8 min read",
    gradient: "from-oryn-red via-red-900 to-black",
    content: [
      { heading: "Round Three Is Decided in Week One", body: "The fighter still moving with sharp technique in the final round isn't the one who trained hardest the day before weigh-in — they're the one who built their aerobic base months earlier. Conditioning is the least glamorous and most decisive part of fight preparation." },
      { heading: "Train the Energy System You'll Actually Use", body: "Long steady rounds tax a different system than fifteen-second explosive exchanges. Map your conditioning work to the actual demands of your discipline instead of borrowing a generic program built for a different sport." },
      { heading: "Technique Breaks Down Before Strength Does", body: "In sparring and competition, form deteriorates under fatigue long before raw strength gives out. Training technical drills at a controlled level of exhaustion is what keeps your defense intact when it matters most." },
    ],
  },
  {
    slug: "recovery-is-not-optional",
    title: "Recovery Is Not Optional: The ORYN Guide to Coming Back Stronger",
    excerpt:
      "Sleep, nutrition and load management separate athletes who last a decade from athletes who burn out in a year.",
    category: "Recovery",
    date: "2026-05-22",
    readTime: "5 min read",
    gradient: "from-zinc-700 via-neutral-900 to-black",
    content: [
      { heading: "Sleep Is Your Highest-Leverage Recovery Tool", body: "No supplement or recovery gadget replaces consistent sleep. Athletes who protect seven to nine hours nightly recover between sessions in a way that no amount of stretching or ice baths can substitute." },
      { heading: "Fuel the Work You're Actually Doing", body: "Nutrition needs shift with training load. Chronic under-fueling during high-volume blocks is one of the most common — and most preventable — causes of stalled progress and nagging injuries." },
      { heading: "Deload Before You're Forced To", body: "A planned lighter week is a tool. An unplanned week off due to injury is a setback. Build deloads into your calendar before your body demands one." },
    ],
  },
  {
    slug: "the-oryn-fabric-standard",
    title: "Inside the ORYN Fabric Standard",
    excerpt:
      "Why we test every fabric across 40 wash cycles before it earns the ORYN name — and what that means for how our gear performs a year in.",
    category: "Product",
    date: "2026-05-02",
    readTime: "4 min read",
    gradient: "from-neutral-900 via-zinc-800 to-neutral-950",
    content: [
      { heading: "Why Day-One Feel Isn't the Real Test", body: "Any fabric can feel premium fresh out of the packaging. The real test is how it performs after forty wash cycles, hundreds of training sessions and the kind of sweat load a lookbook photoshoot never sees." },
      { heading: "What We Actually Measure", body: "Every ORYN fabric is evaluated for stretch recovery, colorfastness, seam integrity and moisture-wicking performance before it's approved for production — not just when it's new, but well after." },
      { heading: "The Standard Doesn't Change by Product", body: "A hoodie and a rash guard have different jobs, but they're held to the same durability bar. If a fabric can't survive our testing cycle, it doesn't carry the ORYN name." },
    ],
  },
  {
    slug: "minimalist-training-wardrobe",
    title: "Building a Minimalist Training Wardrobe",
    excerpt:
      "Fewer pieces, higher performance. How to build a rotation that works as hard as you do, in the gym and out.",
    category: "Lifestyle",
    date: "2026-04-14",
    readTime: "5 min read",
    gradient: "from-neutral-700 via-neutral-800 to-black",
    content: [
      { heading: "Buy Fewer Pieces, Wear Them Harder", body: "A wardrobe built around six versatile, durable pieces outperforms a closet full of items you only half-trust. Fewer, better pieces means less decision fatigue and more consistent performance." },
      { heading: "Design for the Full Day, Not Just the Session", body: "The best training pieces don't get left behind the moment you leave the gym. Building a rotation that transitions from training to the street means getting more genuine use out of every piece you own." },
      { heading: "Neutral First, Statement Second", body: "Start with black, white and gray staples that pair with everything, then add one or two statement pieces. It keeps the wardrobe functional while still giving it personality." },
    ],
  },
  {
    slug: "mindset-of-elite-athletes",
    title: "The Mindset Behind Every Elite Athlete We've Met",
    excerpt:
      "It's not motivation. It's a system of small, repeatable decisions. Notes from the athletes who wear ORYN in competition.",
    category: "Mindset",
    date: "2026-03-27",
    readTime: "7 min read",
    gradient: "from-neutral-950 via-black to-neutral-900",
    content: [
      { heading: "Motivation Is Not the System", body: "Every elite athlete we've worked with has bad days. What separates them isn't a deeper well of motivation — it's a system of habits and standards that doesn't depend on how they feel that morning." },
      { heading: "Small Decisions, Repeated Daily", body: "Showing up on the mediocre days, logging the numbers honestly, sleeping on schedule during a taper week — none of it is dramatic. It's the compounding effect of small decisions made consistently." },
      { heading: "Identity Beats Willpower", body: "Athletes who see training as core to who they are don't need to talk themselves into showing up. The habit becomes automatic once it's tied to identity instead of daily motivation." },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
