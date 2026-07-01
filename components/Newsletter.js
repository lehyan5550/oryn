export default function Newsletter() {
  return (
    <section className="bg-oryn-black py-20 text-white md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
          Join the ORYN Circle
        </h2>
        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          Early access to drops, training content and 10% off your first
          order.
        </p>
        <form className="mx-auto mt-8 flex max-w-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full border border-neutral-700 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-oryn-red px-6 text-xs font-bold uppercase tracking-widest2 text-white transition-colors hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
