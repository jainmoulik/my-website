"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/variants";

const skills = [
  {
    icon: "🎯",
    title: "Full-Funnel Demand Gen",
    desc: "End-to-end pipeline ownership — from awareness to closed-won. ICP definition, content, outbound, and nurture sequences.",
    color: "#5d5fef",
  },
  {
    icon: "🔄",
    title: "PLG + SLG Motion",
    desc: "Bridging product-led growth with sales-led motion. Freemium conversion, PQL scoring, and product usage signals for sales.",
    color: "#22d3ee",
  },
  {
    icon: "💰",
    title: "Paid Media at Scale",
    desc: "$700K+/month managed across Google, Meta, LinkedIn, DV360, Criteo. Full-funnel attribution, creative testing, and CAC optimization.",
    color: "#7c3aed",
  },
  {
    icon: "📊",
    title: "SEO / GEO / AEO / LLM-SEO",
    desc: "100x organic growth delivered. Technical SEO, content strategy, answer engine optimization, and AI-search presence building.",
    color: "#f59e0b",
  },
  {
    icon: "⚙️",
    title: "Lifecycle & CRM",
    desc: "HubSpot, Salesforce, Zoho. Lead scoring, multi-touch attribution, lifecycle automation, and revenue operations.",
    color: "#10b981",
  },
  {
    icon: "🤖",
    title: "GenAI for Marketing",
    desc: "Claude, GPT-4o, Gemini, Midjourney, Runway. AI-native content ops, creative at scale, and LLM-powered GTM tooling.",
    color: "#ec4899",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#030507] py-28 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed] mb-3">What I do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Skills</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ y: -6, borderColor: `${skill.color}60` }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${skill.color}12 0%, transparent 70%)` }}
              />

              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
              >
                {skill.icon}
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{skill.desc}</p>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
