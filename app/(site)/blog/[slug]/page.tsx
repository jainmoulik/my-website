import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";
import keystaticConfig from "@/keystatic.config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamic = "force-dynamic";

// ── Utilities ────────────────────────────────────────────────────────────────

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

type DocNode = {
  type?: string;
  level?: number;
  text?: string;
  children?: DocNode[];
};

function extractHeadings(nodes: DocNode[]) {
  return nodes
    .filter((n) => n.type === "heading" && (n.level === 2 || n.level === 3))
    .map((n) => {
      const text = (n.children ?? []).map((c) => c.text ?? "").join("");
      return { text, level: n.level as 2 | 3, id: slugify(text) };
    });
}

function countWords(nodes: DocNode[]): number {
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

// ── Data fetching ─────────────────────────────────────────────────────────────

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

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Moulik Jain`;

  // Extract first paragraph text for a post-specific OG description
  const nodes = (await post.content()) as DocNode[];
  const firstPara = nodes.find((n) => n.type === "paragraph");
  const paraText = (firstPara?.children ?? [])
    .map((c) => c.text ?? "")
    .join("")
    .trim();
  const description =
    paraText.slice(0, 157).trimEnd() + (paraText.length > 157 ? "…" : "") ||
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
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const content = await post.content();
  const docNodes = content as DocNode[];
  const headings = extractHeadings(docNodes);
  const wordCount = countWords(docNodes);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // BlogPosting JSON-LD
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Moulik Jain",
      url: "https://moulikjain.com",
    },
    publisher: {
      "@type": "Person",
      name: "Moulik Jain",
    },
    ...(post.publishedDate && {
      datePublished: new Date(post.publishedDate).toISOString(),
    }),
    url: `https://moulikjain.com/blog/${slug}`,
    mainEntityOfPage: `https://moulikjain.com/blog/${slug}`,
  };

  // Custom heading renderer that adds IDs (counter-based, safe in SSR)
  const headingState = { idx: 0 };
  const renderers = {
    block: {
      heading({
        level,
        children,
      }: {
        level: 1 | 2 | 3 | 4 | 5 | 6;
        children: React.ReactNode;
      }) {
        let id: string | undefined;
        if (level === 2 || level === 3) {
          id = headings[headingState.idx]?.id;
          headingState.idx++;
        }
        const cls =
          level === 1
            ? "text-3xl font-bold text-white mt-10 mb-4"
            : level === 2
              ? "text-2xl font-bold text-white mt-10 mb-3"
              : level === 3
                ? "text-xl font-semibold text-white mt-7 mb-2"
                : "text-lg font-semibold text-white mt-5 mb-2";
        if (level === 1) return <h1 id={id} className={cls}>{children}</h1>;
        if (level === 2) return <h2 id={id} className={cls}>{children}</h2>;
        if (level === 3) return <h3 id={id} className={cls}>{children}</h3>;
        if (level === 4) return <h4 id={id} className={cls}>{children}</h4>;
        if (level === 5) return <h5 id={id} className={cls}>{children}</h5>;
        return <h6 id={id} className={cls}>{children}</h6>;
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="max-w-2xl mx-auto">
        <Breadcrumbs
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {post.publishedDate && (
              <time className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef]">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            <span className="text-white/20 text-xs">·</span>
            <span className="text-xs text-[#6b7280]">{readingTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 h-px bg-gradient-to-r from-[#5d5fef]/50 via-[#22d3ee]/30 to-transparent" />
        </header>

        {/* Table of Contents */}
        {headings.length > 1 && (
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">
              Contents
            </p>
            <ol className="flex flex-col gap-1.5">
              {headings.map((h) => (
                <li
                  key={h.id}
                  className={h.level === 3 ? "pl-4" : ""}
                >
                  <a
                    href={`#${h.id}`}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Content */}
        <div className="prose-keystatic">
          <DocumentRenderer document={content} renderers={renderers} />
        </div>

        {/* Author Bio */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 flex items-start gap-5">
          <div
            className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl text-base font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #5d5fef, #7c3aed)",
              boxShadow: "0 0 20px rgba(93,95,239,0.3)",
            }}
          >
            MJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">Moulik Jain</p>
            <p className="text-xs text-[#5d5fef] mb-2">
              Growth &amp; Demand Gen Leader · 12+ Years
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Building compounding growth systems across B2B SaaS and D2C.
              Currently Head of Growth at Jeeva AI.
            </p>
            <Link
              href="https://linkedin.com/in/moulik-jain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-[#22d3ee] hover:text-white transition-colors"
            >
              Connect on LinkedIn →
            </Link>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-10 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm text-[#6b7280] hover:text-white transition-colors"
            >
              ← All posts
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
