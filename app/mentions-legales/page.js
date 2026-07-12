import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site ORYN : éditeur, hébergeur et propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage kicker="Informations Légales" title="Mentions Légales" updated="1er juillet 2026">
      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Éditeur du Site</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Le site oryn.fr est édité par [Raison sociale de la société], [forme
          juridique] au capital de [montant] €, immatriculée au Registre du
          Commerce et des Sociétés de [ville] sous le numéro [SIRET], dont le
          siège social est situé [adresse complète].
          <br />
          Numéro de TVA intracommunautaire : [FR XX XXXXXXXXX]
          <br />
          Directeur de la publication : [Nom du directeur de publication]
          <br />
          Contact : [email de contact] — [numéro de téléphone]
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Hébergement</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Ce site est hébergé par [nom de l&apos;hébergeur], [adresse de
          l&apos;hébergeur], [contact de l&apos;hébergeur].
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Propriété Intellectuelle</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          L&apos;ensemble des éléments présents sur le site oryn.fr
          (textes, visuels, logos, marque ORYN, mise en page) est protégé par
          le droit de la propriété intellectuelle. Toute reproduction,
          représentation ou exploitation, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Médiation de la Consommation</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Conformément à l&apos;article L.616-1 du Code de la consommation,
          tout client peut recourir gratuitement au service de médiation
          [nom du médiateur de la consommation] en cas de litige non résolu
          avec le service client.
        </p>
      </section>

      <p className="border border-oryn-gray bg-oryn-gray/30 p-4 text-xs text-oryn-graydark">
        Cette page contient des champs à compléter avec les informations
        légales réelles de la société avant la mise en ligne du site
        (immatriculation, hébergeur, coordonnées).
      </p>
    </LegalPage>
  );
}
