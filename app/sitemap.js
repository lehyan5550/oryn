import { CATEGORIES, PRODUCTS } from "@/data/products";
import { BLOG_POSTS } from "@/data/blog";

const siteUrl = "https://oryn.fr";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/collection",
    "/about",
    "/blog",
    "/livraison-retours",
    "/guide-des-tailles",
    "/contact",
    "/mentions-legales",
    "/cgv",
    "/politique-de-confidentialite",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${siteUrl}/collection/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${siteUrl}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
