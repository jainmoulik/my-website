import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";
import keystaticConfig from "@/keystatic.config";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const reader = createReader(process.cwd(), keystaticConfig);
  const post = await reader.collections.posts.read(slug);
  if (!post) return null;
  return { slug, ...post };
}

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Moulik Jain`;
  const description =
    "Growth & Demand Gen leader with 12+ years experience in B2B SaaS and D2C. Head of Growth at Jeeva AI.";

  return {
    title,
    description,
    alternates: { canonical: `https://moulikjain.com/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://moulikjain.com/blog/${slug}`,
      type: "article",
      ...(post.publishedDate && {
        publishedTime: new Date(post.publishedDate).toISOString(),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@moulikjain",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const content = await post.content();

  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-white transition-colors duration-200 mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          All posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          {post.publishedDate && (
            <time className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef]">
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 h-px bg-gradient-to-r from-[#5d5fef]/50 via-[#22d3ee]/30 to-transparent" />
        </header>

        {/* Content */}
        <div className="prose-keystatic">
          <DocumentRenderer document={content} />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm text-[#6b7280] hover:text-white transition-colors"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-[#5d5fef] hover:text-[#a5b4fc] transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
