"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does Moulik Jain specialise in?",
    a: "Growth marketing, demand generation, PLG+SLG strategy, paid media at scale ($700K+/month), SEO, and GenAI-powered marketing across B2B SaaS and D2C markets.",
  },
  {
    q: "Is Moulik Jain available for hire?",
    a: "Yes, Moulik is currently open to senior growth, demand gen, and CMO-level opportunities globally. Contact via jainmoulik@gmail.com",
  },
  {
    q: "What markets has Moulik Jain worked in?",
    a: "US, UK, EU, MENA, and India across B2B SaaS and D2C verticals.",
  },
  {
    q: "What tools does Moulik Jain use?",
    a: "HubSpot, Salesforce, GA4, Mixpanel, Google Ads, Meta Ads, LinkedIn Ads, Semrush, Ahrefs, Claude, ChatGPT, and more.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#030507] py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/25 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Common Questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-[#5d5fef]/30 focus:outline-none"
                aria-expanded={open === i}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-[#5d5fef] text-xl font-light leading-none"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-[#94a3b8] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
