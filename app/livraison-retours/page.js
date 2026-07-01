import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Livraison & Retours",
  description:
    "Délais et frais de livraison ORYN en France et en Europe, et modalités de retour sous 30 jours.",
  alternates: { canonical: "/livraison-retours" },
};

const SHIPPING = [
  { zone: "France métropolitaine", delay: "2 à 4 jours ouvrés", cost: "Gratuite dès 100 €, sinon 5,90 €" },
  { zone: "Union Européenne", delay: "4 à 7 jours ouvrés", cost: "À partir de 9,90 €" },
  { zone: "Reste du monde", delay: "7 à 12 jours ouvrés", cost: "À partir de 14,90 €" },
];

export default function ShippingReturnsPage() {
  return (
    <LegalPage kicker="Aide" title="Livraison & Retours">
      <section>
        <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Délais et Frais de Livraison</h2>
        <div className="overflow-hidden border border-oryn-gray">
          <table className="w-full text-left text-sm">
            <thead className="bg-oryn-gray/40 text-xs font-bold uppercase tracking-widest2">
              <tr>
                <th className="px-4 py-3">Zone</th>
                <th className="px-4 py-3">Délai</th>
                <th className="px-4 py-3">Frais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-oryn-gray">
              {SHIPPING.map((row) => (
                <tr key={row.zone}>
                  <td className="px-4 py-3 font-semibold">{row.zone}</td>
                  <td className="px-4 py-3 text-oryn-graydark">{row.delay}</td>
                  <td className="px-4 py-3 text-oryn-graydark">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Suivi de Commande</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Dès l&apos;expédition de votre commande, vous recevez un email de
          confirmation contenant votre numéro de suivi.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Politique de Retour</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Vous disposez de 30 jours à compter de la réception de votre
          commande pour nous retourner un article, à condition qu&apos;il
          soit non porté, non lavé et dans son emballage d&apos;origine avec
          les étiquettes. Les retours sont gratuits en France métropolitaine.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Remboursement</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Une fois votre retour reçu et contrôlé, le remboursement est
          effectué sur votre moyen de paiement d&apos;origine sous 5 à 10
          jours ouvrés.
        </p>
      </section>
    </LegalPage>
  );
}
