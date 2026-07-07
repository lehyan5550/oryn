// Avis fictifs classés par id produit. Utilisés sur la page produit.

export const REVIEWS = {
  "hoodie-oversize-340": [
    { id: 1, author: "Elena V.", rating: 5, title: "Le plus épais que j'ai eu", body: "Le molleton 340g est vraiment dense, il garde sa forme après plusieurs lavages. La coupe oversize est parfaite.", date: "2026-06-20", verified: true },
    { id: 2, author: "Sam W.", rating: 5, title: "Vaut chaque centime", body: "C'est le hoodie que tout le monde me demande. Finition premium, branding discret.", date: "2026-06-01", verified: true },
    { id: 3, author: "Priya N.", rating: 4, title: "Superbe mais taille grand", body: "Magnifique hoodie, prenez une taille en dessous pour une coupe plus ajustée.", date: "2026-05-08", verified: true },
  ],
  "gants-de-boxe-cuir-pu": [
    { id: 1, author: "Marcus T.", rating: 5, title: "Solides après 3 mois de sac", body: "La mousse ne s'est pas tassée, le velcro tient toujours aussi bien. Bien plus sérieux que mes anciens gants.", date: "2026-06-10", verified: true },
    { id: 2, author: "Jon P.", rating: 5, title: "Cuir PU qui a l'air premium", body: "On sent que c'est plus épais que les gants d'entrée de gamme. Bon maintien de poignet.", date: "2026-05-22", verified: true },
  ],
  "tapis-de-sol-antiderapant-6mm": [
    { id: 1, author: "Aaliyah K.", rating: 5, title: "Vraiment antidérapant", body: "Même en pleine transpiration je n'ai jamais glissé. Facile à enrouler et à transporter.", date: "2026-06-15", verified: true },
    { id: 2, author: "Diego M.", rating: 5, title: "6mm qui se sentent vraiment", body: "Beaucoup plus confortable au sol que mon ancien tapis fin. Parfait pour le gainage.", date: "2026-05-30", verified: true },
  ],
  "pistolet-de-massage": [
    { id: 1, author: "Sofia R.", rating: 5, title: "Change vraiment la récupération", body: "Je l'utilise après chaque grosse séance de jambes, la différence sur les courbatures du lendemain est nette.", date: "2026-06-25", verified: true },
    { id: 2, author: "Karim B.", rating: 4, title: "Puissant et silencieux", body: "Bonne autonomie de batterie, les embouts fournis couvrent bien tous les groupes musculaires.", date: "2026-06-08", verified: true },
  ],
  "sac-de-sport-compartiment-chaussures": [
    { id: 1, author: "Léa D.", rating: 5, title: "Le compartiment chaussures change tout", body: "Fini l'odeur de baskets mélangée au reste des affaires. Tissu qui a l'air de tenir dans la durée.", date: "2026-06-12", verified: true },
  ],
};

export function getReviewsForProduct(productId) {
  return REVIEWS[productId] || [];
}
