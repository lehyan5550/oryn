export default function LegalPage({ kicker, title, updated, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
      {kicker && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
          {kicker}
        </p>
      )}
      <h1 className="text-3xl font-extrabold uppercase tracking-tightest md:text-4xl">
        {title}
      </h1>
      {updated && (
        <p className="mt-3 text-xs text-oryn-graydark">
          Dernière mise à jour : {updated}
        </p>
      )}
      <div className="prose-legal mt-10 space-y-8">{children}</div>
    </div>
  );
}
