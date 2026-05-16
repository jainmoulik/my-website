"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInXVariants, staggerContainer } from "@/lib/variants";

const experiences = [
  {
    role: "Head of Growth Marketing & Demand Gen",
    company: "Jeeva AI",
    period: "Oct 2024 – Present",
    current: true,
    color: "#5d5fef",
    description:
      "Building full-funnel demand gen from zero for an AI-native SDR platform. Owning PLG+SLG motion, ABM strategy for US/EU markets, and leveraging GenAI to compress the entire marketing stack.",
    tags: ["PLG+SLG", "ABM", "Pipeline", "HubSpot"],
  },
  {
    role: "Head of Marketing & Growth",
    company: "Logo Yazilim · Istanbul",
    period: "Mar 2023 – Oct 2024",
    current: false,
    color: "#22d3ee",
    description:
      "Delivered 100x organic growth, managed $700K+/month paid media budget, cut CPL by 60%, and led MENA market expansion for Turkey's largest ERP/SaaS company.",
    tags: ["B2B SaaS", "100x SEO", "$700K/mo Paid", "MENA"],
  },
  {
    role: "Deputy GM — Growth Marketing",
    company: "Onsitego",
    period: "Feb 2021 – Nov 2022",
    current: false,
    color: "#7c3aed",
    description:
      "Scaled to 200K+ freemium users with $12M+ ARR, achieved 3:1 LTV:CAC ratio. Drove marketplace integrations across Flipkart, Amazon, and Tata Neu.",
    tags: ["D2C", "Freemium", "LTV:CAC", "Marketplace"],
  },
  {
    role: "Founder & CEO",
    company: "3 Minds Digital",
    period: "Mar 2016 – Jan 2021",
    current: false,
    color: "#f59e0b",
    description:
      "Built a 30+ member performance marketing agency serving 80+ brand clients. Drove GTM, new business, and P&L. Exited as Operating Director in 2020.",
    tags: ["Founder", "Agency", "80+ Brands", "P&L"],
  },
  {
    role: "Digital Marketing Executive",
    company: "Wooden Street",
    period: "Dec 2014 – Feb 2016",
    current: false,
    color: "#6b7280",
    description:
      "Early employee at India's leading online furniture brand. Ran Google and Facebook campaigns, managed marketplace listings and performance optimization.",
    tags: ["D2C", "Performance", "E-commerce"],
  },
];

export default function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative bg-[#030507] py-28 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5d5fef]/40 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeInXVariants}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="relative" ref={lineRef}>
          {/* Animated timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full timeline-line origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            className="flex flex-col gap-8 pl-16"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInXVariants}
                whileHover={{ x: 4 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.75rem] top-6 h-3 w-3 rounded-full border-2 border-[#030507]"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 10px ${exp.color}80`,
                    outline: `2px solid ${exp.color}40`,
                  }}
                />

                <div
                  className="relative rounded-2xl border p-6 backdrop-blur-sm"
                  style={{
                    borderColor: `${exp.color}25`,
                    background: `linear-gradient(135deg, ${exp.color}08 0%, transparent 60%)`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-semibold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="rounded-full bg-[#5d5fef]/20 border border-[#5d5fef]/40 px-2 py-0.5 text-[10px] font-medium text-[#a5b4fc]">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-[#6b7280] bg-white/5 rounded-full px-3 py-1 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
