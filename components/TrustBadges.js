const BADGES = [
  {
    label: "Paiement 100% Sécurisé",
    icon: (
      <path d="M24 6l16 6v10c0 10-7 16-16 20-9-4-16-10-16-20V12z" />
    ),
  },
  {
    label: "Livraison Gratuite dès 100€",
    icon: (
      <>
        <path d="M4 14h24v16H4z" />
        <path d="M28 20h8l6 6v4h-14z" />
        <circle cx="13" cy="34" r="3" />
        <circle cx="35" cy="34" r="3" />
      </>
    ),
  },
  {
    label: "Retours Gratuits sous 30 Jours",
    icon: (
      <>
        <path d="M10 24a14 14 0 1 1 4 9.9" />
        <path d="M4 26l6 8 8-4" />
      </>
    ),
  },
];

export default function TrustBadges() {
  return (
    <ul className="grid grid-cols-1 gap-3 border-y border-oryn-gray py-5 sm:grid-cols-3 sm:gap-2">
      {BADGES.map((badge) => (
        <li key={badge.label} className="flex items-center gap-3 sm:flex-col sm:text-center">
          <svg
            viewBox="0 0 48 48"
            className="h-7 w-7 flex-shrink-0 text-oryn-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {badge.icon}
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wide text-oryn-graydark">
            {badge.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
