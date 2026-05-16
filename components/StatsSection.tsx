"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/variants";

const stats = [
  { value: 700, suffix: "K+", prefix: "$", label: "Monthly Media Budget", sub: "managed" },
  { value: 12, suffix: "M+", prefix: "$", label: "ARR Revenue Impact", sub: "driven" },
  { value: 60, suffix: "%", prefix: "", label: "CPL Reduction", sub: "achieved" },
  { value: 100, suffix: "x", prefix: "", label: "Organic Growth", sub: "delivered" },
  { value: 200, suffix: "K+", prefix: "", label: "Freemium Users", sub: "acquired" },
  { value: 12, suffix: "+", prefix: "", label: "Years Experience", sub: "in growth" },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  start,
}: {
  value: number;
  prefix: string;
  suffix: string;
  start: boolean;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (start) motionVal.set(value);
  }, [start, value, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="stats" className="relative bg-[#030507] py-24 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5d5fef]/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={fadeUpVariants}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5fef] mb-3">By the numbers</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Impact that speaks</h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.03, borderColor: "rgba(93,95,239,0.5)" }}
              className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 text-center backdrop-blur-sm transition-colors"
              style={{ boxShadow: "0 0 40px rgba(0,0,0,0.3)" }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5d5fef]/30 to-transparent rounded-t-2xl" />
              <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} start={inView} />
              <p className="text-sm font-semibold text-[#a5b4fc]">{s.label}</p>
              <p className="text-xs text-[#6b7280]">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
