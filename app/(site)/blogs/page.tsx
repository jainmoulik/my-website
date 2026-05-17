import type { Metadata } from "next";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Moulik Jain — Growth Marketing Insights",
  description:
    "Growth marketing, demand gen, PLG, SEO, and AI insights from Moulik Jain — 12+ year B2B and D2C marketing leader.",
  alternates: { canonical: "https://moulikjain.com/blogs" },
};

const categoryMeta: Record<string, { label: string; color: string }> = {
  "growth-marketing": { label: "Growth Marketing", color: "#5d5fef" },
  "demand-gen":       { label: "Demand Gen",        color: "#22d3ee" },
  "paid-media":       { label: "Paid Media",         color: "#f59e0b" },
  "seo":              { label: "SEO",                color: "#10b981" },
  "plg-slg":          { label: "PLG / SLG",          color: "#7c3aed" },
};

function countWords(nodes: any[]): number {
  let count = 0;
  for (const node of nodes) {
    if (typeof node.text === "string") {
      count += node.text.split(/\s+/).filter(Boolean).length;
    }
    if (Array.isArray(node.children)) {
      count += countWords(node.children);
    }
  }
  return count;
}

async function getPosts() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const slugs = await reader.collections.posts.list();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      const nodes = post ? await post.content() : [];
      const words = countWords(nodes as any[]);
      const readingTime = Math.max(1, Math.ceil(words / 200));
      return { slug, ...post, readingTime };
    })
  );
  return posts
    .filter((p) => p.publishedDate)
    .sort(
      (a, b) =>
        new Date(b.publishedDate!).getTime() -
        new Date(a.publishedDate!).getTime()
    );
}

export default async function BlogPage() {
  const posts = await getPosts();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog posts by Moulik Jain",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://moulikjain.com/blogs/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blogs" },
          ]}
        />

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">
            Writing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-[#6b7280] text-base">
            Thoughts on growth, demand gen, and building at the intersection of
            AI and marketing.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
              style={{ backgroundColor: "#5d5fef15", border: "1px solid #5d5fef30" }}
            >
              ✍️
            </div>
            <p className="text-[#6b7280]">No posts yet.</p>
            <Link
              href="/keystatic"
              className="rounded-full bg-[#5d5fef] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#4f51e0] transition-colors"
            >
              Open CMS to write your first post →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {posts.map((post) => {
              const cat = post.category
                ? categoryMeta[post.category] ?? categoryMeta["growth-marketing"]
                : categoryMeta["growth-marketing"];

              return (
                <Link key={post.slug} href={`/blogs/${post.slug}`}>
                  <article className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#5d5fef]/40 hover:bg-white/[0.04] overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#5d5fef]/8 to-transparent" />
                    <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        {/* Category tag */}
                        <span
                          className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold mb-2"
                          style={{
                            backgroundColor: `${cat.color}18`,
                            color: cat.color,
                            border: `1px solid ${cat.color}35`,
                          }}
                        >
                          {cat.label}
                        </span>

                        <h2 className="text-lg font-semibold text-white group-hover:text-[#a5b4fc] transition-colors duration-200 mb-2">
                          {post.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-2">
                          {post.publishedDate && (
                            <time className="text-sm text-[#6b7280]">
                              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          )}
                          <span className="text-white/20 text-xs">·</span>
                          <span className="text-sm text-[#6b7280]">
                            {post.readingTime} min read
                          </span>
                        </div>
                      </div>
                      <span className="flex-shrink-0 text-[#5d5fef] text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 pt-1">
                        Read →
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
