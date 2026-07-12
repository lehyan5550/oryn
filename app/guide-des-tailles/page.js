import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Guide des Tailles",
  description: "Guide des tailles ORYN pour choisir la bonne taille de vêtement de sport, combat et lifestyle.",
  alternates: { canonical: "/guide-des-tailles" },
};

const SIZES = [
  { size: "XS", chest: "84 – 88", waist: "68 – 72" },
  { size: "S", chest: "89 – 93", waist: "73 – 77" },
  { size: "M", chest: "94 – 98", waist: "78 – 83" },
  { size: "L", chest: "99 – 104", waist: "84 – 90" },
  { size: "XL", chest: "105 – 111", waist: "91 – 97" },
  { size: "XXL", chest: "112 – 118", waist: "98 – 104" },
];

export default function SizeGuidePage() {
  return (
    <LegalPage kicker="Aide" title="Guide des Tailles">
      <section>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Toutes les mesures sont exprimées en centimètres. En cas de doute
          entre deux tailles, nous recommandons de prendre la taille
          supérieure pour les hoodies et vestes, et la taille en dessous pour
          les pièces compression.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Tableau des Tailles</h2>
        <div className="overflow-x-auto border border-oryn-gray">
          <table className="w-full text-left text-sm">
            <thead className="bg-oryn-gray/40 text-xs font-bold uppercase tracking-widest2">
              <tr>
                <th className="px-4 py-3">Taille</th>
                <th className="px-4 py-3">Tour de Poitrine (cm)</th>
                <th className="px-4 py-3">Tour de Taille (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-oryn-gray">
              {SIZES.map((row) => (
                <tr key={row.size}>
                  <td className="px-4 py-3 font-semibold">{row.size}</td>
                  <td className="px-4 py-3 text-oryn-graydark">{row.chest}</td>
                  <td className="px-4 py-3 text-oryn-graydark">{row.waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Comment Prendre Ses Mesures</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Tour de poitrine : mesurez le tour le plus large de votre poitrine,
          sous les bras. Tour de taille : mesurez au niveau le plus étroit de
          votre taille, généralement au-dessus du nombril.
        </p>
      </section>
    </LegalPage>
  );
}
