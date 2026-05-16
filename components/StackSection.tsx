"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, scaleUpVariants, staggerContainer } from "@/lib/variants";

const stackGroups = [
  {
    category: "CRM & Automation",
    color: "#5d5fef",
    icon: "⚙️",
    tools: ["HubSpot", "Salesforce", "Zoho CRM", "Mailmodo", "AiSensy", "Brevo", "CleverTap", "WebEngage"],
  },
  {
    category: "Analytics",
    color: "#22d3ee",
    icon: "📊",
    tools: ["GA4", "Mixpanel", "Looker Studio", "GTM", "Amplitude"],
  },
  {
    category: "SEO",
    color: "#10b981",
    icon: "🔍",
    tools: ["Semrush", "Ahrefs", "Screaming Frog", "Surfer SEO"],
  },
  {
    category: "Paid Media",
    color: "#f59e0b",
    icon: "💰",
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "MediaMath", "Criteo", "DV360"],
  },
  {
    category: "AI & GenAI",
    color: "#ec4899",
    icon: "🤖",
    tools: ["Claude", "ChatGPT", "Gemini", "Runway", "Gamma", "Midjourney"],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="relative bg-[#030507] py-28 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee] mb-3">Tools & Platforms</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">My Stack</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="flex flex-col gap-8"
        >
          {stackGroups.map((group, gi) => (
            <motion.div key={gi} variants={fadeUpVariants}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm"
                  style={{ backgroundColor: `${group.color}20`, border: `1px solid ${group.color}30` }}
                >
                  {group.icon}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: group.color }}>
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <motion.div
                variants={staggerContainer(0.05)}
                className="flex flex-wrap gap-2.5"
              >
                {group.tools.map((tool, ti) => (
                  <motion.span
                    key={ti}
                    variants={scaleUpVariants}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: `${group.color}25`,
                      borderColor: `${group.color}60`,
                    }}
                    className="cursor-default rounded-full border px-4 py-1.5 text-sm font-medium text-white/80 transition-colors duration-200"
                    style={{
                      backgroundColor: `${group.color}10`,
                      borderColor: `${group.color}25`,
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
