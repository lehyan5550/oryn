import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité ORYN : données collectées, finalités, cookies et vos droits RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage kicker="Informations Légales" title="Politique de Confidentialité" updated="1er juillet 2026">
      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Données Collectées</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Lorsque vous passez commande, créez un compte ou vous inscrivez à
          notre newsletter, nous collectons les données nécessaires au
          traitement de votre demande : nom, adresse email, adresse postale
          et de livraison, données de commande.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Finalités du Traitement</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Vos données sont utilisées pour traiter vos commandes, assurer le
          suivi de la relation client, vous envoyer des communications
          marketing si vous y avez consenti, et améliorer nos services.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Cookies</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Le site oryn.fr utilise des cookies nécessaires à son
          fonctionnement (panier d&apos;achat) ainsi que des cookies de
          mesure d&apos;audience. Vous pouvez configurer votre navigateur
          pour refuser les cookies non essentiels.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Vos Droits</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Conformément au Règlement Général sur la Protection des Données
          (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
          droit d&apos;accès, de rectification, d&apos;effacement, de
          limitation et de portabilité de vos données, ainsi que d&apos;un
          droit d&apos;opposition. Vous pouvez exercer ces droits en nous
          contactant à [email de contact DPO].
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">Conservation des Données</h2>
        <p className="text-sm leading-relaxed text-oryn-graydark">
          Vos données sont conservées pendant la durée nécessaire aux
          finalités pour lesquelles elles ont été collectées, et
          conformément aux obligations légales de conservation applicables
          en matière commerciale et comptable.
        </p>
      </section>
    </LegalPage>
  );
}
