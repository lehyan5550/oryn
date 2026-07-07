import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING_CENTS = 590;

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      {
        error:
          "Le paiement n'est pas encore configuré. Ajoutez STRIPE_SECRET_KEY dans les variables d'environnement.",
      },
      { status: 501 }
    );
  }

  const { items } = await request.json();

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Panier vide." }, { status: 400 });
  }

  // Prices are re-derived from the server-side catalog rather than trusted
  // from the client, so a tampered request can't check out at an arbitrary price.
  const lineItems = [];
  for (const item of items) {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    if (!product) {
      return NextResponse.json(
        { error: `Produit inconnu : ${item.productId}` },
        { status: 400 }
      );
    }
    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return NextResponse.json(
        { error: `Quantité invalide pour ${product.name}` },
        { status: 400 }
      );
    }

    lineItems.push({
      quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.name,
          description: [item.color, item.size].filter(Boolean).join(" / ") || undefined,
        },
      },
    });
  }

  const subtotal = items.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    return sum + (product ? product.price * Number(item.quantity) : 0);
  }, 0);

  if (subtotal < FREE_SHIPPING_THRESHOLD) {
    lineItems.push({
      quantity: 1,
      price_data: {
        currency: "eur",
        unit_amount: STANDARD_SHIPPING_CENTS,
        product_data: { name: "Livraison Standard" },
      },
    });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "fr",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["FR", "BE", "CH", "LU", "MC"] },
      success_url: `${siteUrl}/commande/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement. Réessayez." },
      { status: 502 }
    );
  }
}
