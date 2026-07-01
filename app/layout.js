import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://oryn.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ORYN — Performance & Combat Lifestyle Apparel",
    template: "%s | ORYN",
  },
  description:
    "ORYN is a global performance apparel brand for fitness, training and combat lifestyle athletes. Shop premium training gear built to move with you.",
  keywords: [
    "ORYN",
    "performance apparel",
    "combat sports clothing",
    "training gear",
    "fitness lifestyle brand",
  ],
  openGraph: {
    title: "ORYN — Performance & Combat Lifestyle Apparel",
    description:
      "Premium performance apparel for fitness, training and combat lifestyle athletes.",
    url: siteUrl,
    siteName: "ORYN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORYN — Performance & Combat Lifestyle Apparel",
    description:
      "Premium performance apparel for fitness, training and combat lifestyle athletes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
