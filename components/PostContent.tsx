"use client";

import { DocumentRenderer } from "@keystatic/core/renderer";

type Heading = { text: string; level: 2 | 3; id: string };

type RenderedNode = Record<string, unknown>;

export default function PostContent({
  document,
  headings,
}: {
  document: RenderedNode[];
  headings: Heading[];
}) {
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
    <div className="prose-keystatic">
      <DocumentRenderer document={document as Parameters<typeof DocumentRenderer>[0]["document"]} renderers={renderers} />
    </div>
  );
}
