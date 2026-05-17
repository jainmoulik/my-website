import type { Metadata } from "next";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Moulik Jain — Growth Marketing Insights",
  description:
    "Growth marketing, demand gen, PLG, SEO, and AI insights from Moulik Jain — 12+ year B2B and D2C marketing leader.",
  alternates: { canonical: "https://moulikjain.com/blog" },
};

async function getPosts() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const slugs = await reader.collections.posts.list();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      return { slug, ...post };
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

  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">
          Writing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-[#6b7280] text-base">
          Thoughts on growth, demand gen, and building at the intersection of AI
          and marketing.
        </p>
      </div>

      {/* Posts */}
      <div className="max-w-3xl mx-auto">
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
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#5d5fef]/40 hover:bg-white/[0.04] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#5d5fef]/8 to-transparent" />
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#a5b4fc] transition-colors duration-200 mb-1">
                        {post.title}
                      </h2>
                      {post.publishedDate && (
                        <time className="text-sm text-[#6b7280]">
                          {new Date(post.publishedDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-[#5d5fef] text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
