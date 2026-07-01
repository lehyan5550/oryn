// Avis fictifs classés par id produit. Utilisés sur la page produit.

export const REVIEWS = {
  "apex-performance-tee": [
    { id: 1, author: "Marcus T.", rating: 5, title: "Je ne reviens plus en arrière", body: "Porté pendant une séance de 12 rounds au sac de frappe, il est resté sec du début à la fin. La coupe est exactement comme il faut, ni trop ample ni trop serrée.", date: "2026-05-12", verified: true },
    { id: 2, author: "Sofia R.", rating: 5, title: "Une matière qui se sent premium", body: "On sent tout de suite que ce n'est pas un t-shirt basique. Le stretch et les coutures font une vraie différence pendant l'entraînement.", date: "2026-04-28", verified: true },
    { id: 3, author: "Diego M.", rating: 4, title: "Belle coupe, taille un peu grand", body: "J'ai pris une taille en dessous et c'était parfait. La qualité rivalise avec des marques deux fois plus chères.", date: "2026-03-19", verified: false },
  ],
  "fury-boxing-shorts": [
    { id: 1, author: "Aaliyah K.", rating: 5, title: "Prêt pour la compétition", body: "Je l'ai porté lors de mon dernier combat amateur. Les fentes donnent une vraie liberté sur les coups de pied et la ceinture n'a pas bougé.", date: "2026-06-02", verified: true },
    { id: 2, author: "Jon P.", rating: 5, title: "Le meilleur short que j'ai eu", body: "Léger mais jamais bas de gamme. Les coutures sont renforcées exactement là où il faut.", date: "2026-05-15", verified: true },
  ],
  "vanguard-hoodie": [
    { id: 1, author: "Elena V.", rating: 5, title: "Je ne l'enlève plus", body: "Le molleton est vraiment épais et garde sa forme après plusieurs lavages. La coupe oversize est parfaite.", date: "2026-06-20", verified: true },
    { id: 2, author: "Sam W.", rating: 5, title: "Vaut chaque centime", body: "C'est la pièce dont tout le monde me parle. Finition premium, branding discret, exactement mon style.", date: "2026-06-01", verified: true },
    { id: 3, author: "Priya N.", rating: 4, title: "Superbe mais taille grand", body: "Magnifique sweat, prenez juste une taille en dessous pour une coupe plus ajustée.", date: "2026-05-08", verified: true },
  ],
};

export function getReviewsForProduct(productId) {
  return REVIEWS[productId] || [];
}
