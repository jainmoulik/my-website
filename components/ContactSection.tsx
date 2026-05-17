"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/variants";

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "jainmoulik@gmail.com",
    href: "mailto:jainmoulik@gmail.com",
    color: "#5d5fef",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/moulik-jain",
    href: "https://linkedin.com/in/moulik-jain",
    color: "#22d3ee",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#030507] py-28 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5d5fef]/40 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#5d5fef]/8 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s Connect</h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 backdrop-blur-xl overflow-hidden"
          style={{ boxShadow: "0 0 80px rgba(93,95,239,0.15), 0 0 160px rgba(93,95,239,0.05)" }}
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#5d5fef]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#7c3aed]/12 blur-3xl pointer-events-none" />

          {/* Pulse ring */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(93,95,239,0)",
                "0 0 0 6px rgba(93,95,239,0.08)",
                "0 0 0 0px rgba(93,95,239,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
          />

          <div className="relative text-center mb-10">
            <div
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white mb-6"
              style={{
                background: "linear-gradient(135deg, #5d5fef, #7c3aed)",
                boxShadow: "0 0 30px rgba(93,95,239,0.5)",
              }}
            >
              MJ
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Open to the right opportunity
            </h3>
            <p className="text-[#6b7280] leading-relaxed max-w-md mx-auto">
              If you&apos;re looking for a growth leader who can build full-funnel demand gen, scale paid media, and own
              pipeline — let&apos;s talk.
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                variants={fadeUpVariants}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.04, borderColor: `${c.color}60` }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-all duration-300 group"
                style={{ borderColor: `${c.color}25`, backgroundColor: `${c.color}08` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at center, ${c.color}12 0%, transparent 70%)` }}
                />
                <span className="text-2xl">{c.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.color }}>
                  {c.label}
                </span>
                <span className="text-sm text-white/80 font-medium">{c.value}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-xs text-[#6b7280]">
            © 2026 Moulik Jain · Growth leader, writer, builder
          </p>
          <div className="flex items-center gap-4 text-xs text-[#4b5563]">
            <Link href="/privacy-policy" className="hover:text-[#6b7280] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#6b7280] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
