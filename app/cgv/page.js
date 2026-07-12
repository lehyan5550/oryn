import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente ORYN : commande, prix, paiement, livraison et droit de rétractation.",
  alternates: { canonical: "/cgv" },
};

export default function CGVPage() {
  return (
    <LegalPage kicker="Informations Légales" title="Conditions Générales de Vente" updated="1er juillet 2026">
      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">1. Objet</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Les présentes conditions générales de vente régissent les ventes de
          produits réalisées sur le site oryn.fr entre ORYN et tout client
          consommateur ou professionnel effectuant un achat.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">2. Prix</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Les prix sont indiqués en euros, toutes taxes comprises (TTC). ORYN
          se réserve le droit de modifier ses prix à tout moment, étant
          entendu que le prix applicable est celui en vigueur au moment de la
          validation de la commande.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">3. Commande et Paiement</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Toute commande passée sur oryn.fr vaut acceptation des présentes
          CGV. Le paiement est exigible immédiatement à la commande, par
          carte bancaire ou tout autre moyen de paiement proposé sur le site.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">4. Livraison</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Les délais de livraison sont indiqués à titre indicatif lors de la
          commande. ORYN livre en France métropolitaine et dans l&apos;Union
          Européenne. Pour plus de détails, consultez notre page{" "}
          <a href="/livraison-retours" className="underline hover:text-oryn-black">
            Livraison &amp; Retours
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">5. Droit de Rétractation</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Conformément aux articles L.221-18 et suivants du Code de la
          consommation, le client dispose d&apos;un délai de 14 jours francs
          à compter de la réception de sa commande pour exercer son droit de
          rétractation, sans avoir à justifier de motif ni à payer de
          pénalité, à l&apos;exception des frais de retour.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">6. Garanties</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Tous les produits vendus sur oryn.fr bénéficient de la garantie
          légale de conformité et de la garantie légale contre les vices
          cachés, conformément aux articles 1641 et suivants du Code civil et
          L.217-3 et suivants du Code de la consommation.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">7. Litiges</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Les présentes CGV sont soumises au droit français. En cas de
          litige, une solution amiable sera recherchée avant toute action
          judiciaire.
        </p>
      </section>
    </LegalPage>
  );
}
