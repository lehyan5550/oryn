import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import Analytics from "@/components/Analytics";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://oryn.fr";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ORYN — Vêtements de Sport, Fitness & Combat Premium",
    template: "%s | ORYN",
  },
  description:
    "ORYN est une marque premium de vêtements de sport, fitness et combat lifestyle. Découvrez des équipements d'entraînement haut de gamme, livrés partout en France.",
  keywords: [
    "ORYN",
    "vêtements de sport premium",
    "vêtements de combat",
    "équipement d'entraînement",
    "marque fitness lifestyle",
    "vêtements de fitness France",
    "boxe MMA vêtements",
  ],
  openGraph: {
    title: "ORYN — Vêtements de Sport, Fitness & Combat Premium",
    description:
      "Vêtements de sport premium pour les athlètes de fitness, d'entraînement et de combat lifestyle. Livraison en France.",
    url: siteUrl,
    siteName: "ORYN",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORYN — Vêtements de Sport, Fitness & Combat Premium",
    description:
      "Vêtements de sport premium pour les athlètes de fitness, d'entraînement et de combat lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <NewsletterPopup />
          </WishlistProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
