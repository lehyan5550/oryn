import Stripe from "stripe";

let stripeClient = null;

// Returns null (rather than throwing) when STRIPE_SECRET_KEY isn't set yet,
// so the checkout route can respond gracefully before real keys exist.
export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}
