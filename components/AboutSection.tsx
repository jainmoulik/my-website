"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/variants";

const profileDetails = [
  { label: "Role", value: "Head of Growth, Marketing & Demand Gen" },
  { label: "Current", value: "Jeeva AI" },
  { label: "Focus", value: "B2B PLG + SLG" },
  { label: "Markets", value: "US · EU · MENA · India" },
  { label: "Education", value: "B.E. CS · MIT Pune" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#030507] py-28 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee] mb-3">Who I am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          {/* Left — Profile card */}
          <motion.div variants={fadeUpVariants}>
            <div
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(93,95,239,0.08)" }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#5d5fef]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#22d3ee]/10 blur-3xl pointer-events-none" />

              <div className="relative flex items-center gap-5 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #5d5fef, #7c3aed)",
                    boxShadow: "0 0 30px rgba(93,95,239,0.4)",
                  }}
                >
                  MJ
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Moulik Jain</h3>
                  <p className="text-sm text-[#6b7280] mt-0.5">Growth & Demand Gen Leader</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22d3ee] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22d3ee]" />
                    </span>
                    <span className="text-xs text-[#22d3ee]">Available for opportunities</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {profileDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0">
                    <span className="min-w-[80px] text-xs font-medium text-[#6b7280] uppercase tracking-wider pt-0.5">
                      {d.label}
                    </span>
                    <span className="text-sm text-white/90">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div variants={fadeUpVariants} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#5d5fef] mb-4 flex items-center gap-2">
                <span>🚀</span> The Journey
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-[15px]">
                At 24, I founded{" "}
                <span className="text-white font-medium">3 Minds Digital</span> — a performance marketing agency that
                grew to serve <span className="text-[#22d3ee] font-medium">80+ brands</span> with a 30-member team. I
                built the GTM engine from the ground up, ran media across Google, Meta, and programmatic, and exited as
                Operating Director in 2020.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#22d3ee] mb-4 flex items-center gap-2">
                <span>📈</span> Going Deep on Performance
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-[15px]">
                I went in-house at <span className="text-white font-medium">Onsitego</span> to crack D2C PLG — scaling
                to <span className="text-[#5d5fef] font-medium">200K+ freemium users</span> and{" "}
                <span className="text-[#5d5fef] font-medium">$12M+ ARR</span> with a 3:1 LTV:CAC. Then at{" "}
                <span className="text-white font-medium">Logo Yazilim (Istanbul)</span>, I ran $700K+/month in paid
                media and delivered{" "}
                <span className="text-[#22d3ee] font-medium">100x organic growth</span> while expanding into MENA.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#7c3aed] mb-4 flex items-center gap-2">
                <span>🤖</span> Now: AI-Native Growth
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-[15px]">
                At <span className="text-white font-medium">Jeeva AI</span>, I&apos;m building full-funnel demand gen
                from zero for an AI-native SDR platform — combining{" "}
                <span className="text-[#7c3aed] font-medium">PLG + SLG motion</span>, ABM for US/EU, and using GenAI
                to compress the entire marketing stack.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
