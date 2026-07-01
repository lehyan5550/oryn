import { PRODUCTS } from "@/data/products";
import { BLOG_POSTS } from "@/data/blog";

const siteUrl = "https://oryn.com";

export default function sitemap() {
  const staticRoutes = ["", "/collection", "/about", "/blog", "/cart"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.7,
    })
  );

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

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
