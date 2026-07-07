import Script from "next/script";

// Renders nothing until NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID is set — and even
// then, the widget only shows real content once the Trustpilot account has
// collected actual reviews from real orders. See README setup checklist.
export default function TrustpilotWidget() {
  const businessId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID;
  if (!businessId) return null;

  return (
    <div className="border-t border-oryn-gray bg-white py-12">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
        <div
          className="trustpilot-widget"
          data-locale="fr-FR"
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id={businessId}
          data-style-height="150px"
          data-style-width="100%"
          data-theme="light"
        >
          <a href="https://fr.trustpilot.com" target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
}
