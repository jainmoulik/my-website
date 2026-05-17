import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Moulik Jain",
  description: "Privacy policy for moulikjain.com — what data is collected and how it is used.",
  alternates: { canonical: "https://moulikjain.com/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030507] pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#6b7280]">Last updated: May 2026</p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#5d5fef]/50 via-[#22d3ee]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-[#94a3b8] text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
            <p>
              This website (<strong className="text-white">moulikjain.com</strong>) is a personal portfolio and blog. It does not sell products or services, collect payment information, or require account registration. This policy explains what limited data is collected through standard web analytics and how it is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Analytics</h2>
            <p className="mb-3">
              This site uses <strong className="text-white">Google Analytics (via Google Tag Manager)</strong> and may use <strong className="text-white">Microsoft Clarity</strong> to understand how visitors interact with the site. These tools collect anonymised, aggregated data such as:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Pages visited and time spent on each page</li>
              <li>Approximate geographic location (country/city level)</li>
              <li>Device type, browser, and operating system</li>
              <li>Referral source (how you arrived at the site)</li>
            </ul>
            <p className="mt-3">
              This data is used solely to understand site performance and improve content. It is not used to build advertising profiles or sold to third parties.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics tracking using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22d3ee] hover:text-white transition-colors"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p>
              Analytics tools set cookies to distinguish unique visitors and track sessions. These are third-party cookies managed by Google and Microsoft respectively. No first-party cookies are set by this site beyond what the analytics scripts require.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact Form & Direct Messages</h2>
            <p>
              If you contact me via email or LinkedIn, any information you share is used only to respond to your inquiry. It is not stored in a database, shared with third parties, or used for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">External Links</h2>
            <p>
              This site contains links to external websites (LinkedIn, publications, company sites). Once you leave this site, this privacy policy no longer applies. I am not responsible for the privacy practices of external sites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Data Retention & Your Rights</h2>
            <p>
              Analytics data is retained according to the default retention settings of Google Analytics and Microsoft Clarity. No personal data is stored on servers controlled by this site. If you have questions about data held by Google or Microsoft, please refer to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              This policy may be updated occasionally. The &ldquo;last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions about this privacy policy? Email{" "}
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
          <Link href="/terms" className="text-sm text-[#5d5fef] hover:text-[#a5b4fc] transition-colors">
            Terms & Conditions →
          </Link>
        </div>
      </div>
    </main>
  );
}
