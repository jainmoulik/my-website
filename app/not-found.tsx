"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#030507] px-6 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d5fef]/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl text-5xl font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #5d5fef, #7c3aed)",
            boxShadow: "0 0 40px rgba(93,95,239,0.4)",
          }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Page not found
          </h1>
          <p className="max-w-sm text-[#6b7280] leading-relaxed">
            Looks like this page doesn&apos;t exist. It may have been moved,
            deleted, or never existed in the first place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <Link
            href="/"
            className="rounded-full bg-[#5d5fef] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ boxShadow: "0 0 24px rgba(93,95,239,0.4)" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Read the Blog
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
