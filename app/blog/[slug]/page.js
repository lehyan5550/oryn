import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";
import ProductImage from "@/components/ProductImage";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-8 text-xs text-oryn-graydark">
        <Link href="/" className="hover:text-oryn-black">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-oryn-black">Journal</Link>
      </nav>

      <p className="mb-3 text-xs font-bold uppercase tracking-widest2 text-oryn-red">
        {post.category} &middot; {post.readTime}
      </p>
      <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tightest md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-oryn-graydark">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="my-10 aspect-[16/9] w-full">
        <ProductImage gradient={post.gradient} compact className="h-full" />
      </div>

      <p className="text-lg leading-relaxed text-oryn-black">{post.excerpt}</p>

      <div className="mt-8 space-y-8">
        {post.content.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold uppercase tracking-wide">
              {section.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-oryn-graydark">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-20 border-t border-oryn-gray pt-10">
          <h2 className="mb-6 text-lg font-bold uppercase tracking-widest2">
            More From the Journal
          </h2>
          <ul className="space-y-4">
            {more.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm font-semibold uppercase tracking-wide hover:text-oryn-red"
                >
                  {p.title} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
