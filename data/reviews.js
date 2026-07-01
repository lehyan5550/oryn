// Mock reviews keyed by product id. Used on the product detail page.

export const REVIEWS = {
  "apex-performance-tee": [
    { id: 1, author: "Marcus T.", rating: 5, title: "Never going back", body: "Wore this through a 12-round bag session and it stayed dry the entire time. Fit is exactly right, not baggy, not tight.", date: "2026-05-12", verified: true },
    { id: 2, author: "Sofia R.", rating: 5, title: "Fabric feels premium", body: "You can tell this isn't a basic tee. The stretch and the seams make a real difference during training.", date: "2026-04-28", verified: true },
    { id: 3, author: "Diego M.", rating: 4, title: "Great fit, runs slightly long", body: "Sized down and it was perfect. Quality is on par with brands twice the price.", date: "2026-03-19", verified: false },
  ],
  "fury-boxing-shorts": [
    { id: 1, author: "Aaliyah K.", rating: 5, title: "Competition ready", body: "Wore these in my last amateur bout. The slits give real freedom on kicks and the waistband didn't budge.", date: "2026-06-02", verified: true },
    { id: 2, author: "Jon P.", rating: 5, title: "Best shorts I own", body: "Lightweight but doesn't feel cheap. The stitching is reinforced exactly where you'd want it.", date: "2026-05-15", verified: true },
  ],
  "vanguard-hoodie": [
    { id: 1, author: "Elena V.", rating: 5, title: "Living in this hoodie", body: "The fleece is genuinely heavyweight, holds its shape after multiple washes. Fit is oversized in the best way.", date: "2026-06-20", verified: true },
    { id: 2, author: "Sam W.", rating: 5, title: "Worth every dollar", body: "This is the one piece everyone asks about. Premium feel, minimal branding, exactly my style.", date: "2026-06-01", verified: true },
    { id: 3, author: "Priya N.", rating: 4, title: "Great but runs big", body: "Beautiful hoodie, just size down if you want a closer fit.", date: "2026-05-08", verified: true },
  ],
};

export function getReviewsForProduct(productId) {
  return REVIEWS[productId] || [];
}
