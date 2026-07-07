// Thin wrappers around the tracking scripts loaded in components/Analytics.js.
// Every call is a no-op if the corresponding pixel isn't loaded (no env var set),
// so these are safe to call unconditionally anywhere in the app.

export function trackAddToCart({ name, price, quantity }) {
  if (typeof window === "undefined") return;

  window.fbq?.("track", "AddToCart", {
    content_name: name,
    value: price * quantity,
    currency: "EUR",
  });

  window.ttq?.track("AddToCart", {
    content_name: name,
    value: price * quantity,
    currency: "EUR",
  });

  window.gtag?.("event", "add_to_cart", {
    currency: "EUR",
    value: price * quantity,
    items: [{ item_name: name, quantity }],
  });
}

export function trackInitiateCheckout({ value, itemCount }) {
  if (typeof window === "undefined") return;

  window.fbq?.("track", "InitiateCheckout", { value, currency: "EUR", num_items: itemCount });
  window.ttq?.track("InitiateCheckout", { value, currency: "EUR" });
  window.gtag?.("event", "begin_checkout", { currency: "EUR", value });
}

export function trackPurchase({ value, transactionId }) {
  if (typeof window === "undefined") return;

  window.fbq?.("track", "Purchase", { value, currency: "EUR" });
  window.ttq?.track("PlaceAnOrder", { value, currency: "EUR" });
  window.gtag?.("event", "purchase", {
    transaction_id: transactionId,
    currency: "EUR",
    value,
  });
}
