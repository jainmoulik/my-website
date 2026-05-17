import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Moulik Jain",
  description: "Terms and conditions for moulikjain.com — a personal portfolio and blog.",
  alternates: { canonical: "https://moulikjain.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-sm text-[#6b7280]">Last updated: May 2026</p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#5d5fef]/50 via-[#22d3ee]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-[#94a3b8] text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Nature of This Site</h2>
            <p>
              <strong className="text-white">moulikjain.com</strong> is a personal portfolio and blog. No products, services, consulting engagements, or subscriptions are sold through this website. Accessing this site does not create any contractual relationship between you and Moulik Jain.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Content & Opinions</h2>
            <p className="mb-3">
              All written content — including blog posts, case studies, and commentary — represents personal opinions and professional experiences of Moulik Jain. This content does not represent the views, positions, or policies of any current or past employer, including Jeeva AI.
            </p>
            <p>
              Content is provided for informational and educational purposes only and should not be construed as professional advice specific to your situation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Accuracy of Information</h2>
            <p className="mb-3">
              Metrics, results, and figures referenced on this site (e.g., percentage improvements in CPL, ARR figures, user counts) reflect approximate professional achievements based on recollection and available data at the time of writing. They are shared to illustrate strategic approaches, not as audited financial statements.
            </p>
            <p>
              While reasonable care is taken to ensure accuracy, no warranty is made regarding the completeness or fitness of any information for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Intellectual Property</h2>
            <p>
              All original content on this site — including text, design, and code — is owned by Moulik Jain. You may quote or reference content with attribution. Reproducing substantial portions without permission is not permitted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">External Links</h2>
            <p>
              Links to third-party websites are provided for convenience only. Moulik Jain has no control over external content and accepts no liability for the accuracy, legality, or appropriateness of any linked site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Moulik Jain shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of or reliance on content published on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with applicable law. By accessing this site you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions? Email{" "}
              <a
                href="mailto:jainmoulik@gmail.com"
                className="text-[#22d3ee] hover:text-white transition-colors"
              >
                jainmoulik@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6b7280] hover:text-white transition-colors">
            ← Home
          </Link>
          <Link href="/privacy-policy" className="text-sm text-[#5d5fef] hover:text-[#a5b4fc] transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
