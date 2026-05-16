"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/variants";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; r: number; dx: number; dy: number; alpha: number; color: string };
    const colors = ["#5d5fef", "#22d3ee", "#7c3aed"];
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    type Orb = { x: number; y: number; r: number; dx: number; dy: number; color: string };
    const orbs: Orb[] = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 180, dx: 0.15, dy: 0.1, color: "rgba(93,95,239,0.12)" },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, r: 240, dx: -0.1, dy: 0.12, color: "rgba(124,58,237,0.1)" },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, r: 150, dx: 0.12, dy: -0.15, color: "rgba(34,211,238,0.08)" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((o) => {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, o.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
        o.x += o.dx;
        o.y += o.dy;
        if (o.x < -o.r || o.x > canvas.width + o.r) o.dx *= -1;
        if (o.y < -o.r || o.y > canvas.height + o.r) o.dy *= -1;
      });

      particles.forEach((p) => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030507]"
    >
      <ParticleCanvas />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)",
        }}
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-7 px-6 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariants}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5d5fef]/40 bg-[#5d5fef]/10 px-4 py-1.5 text-xs font-medium text-[#a5b4fc]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22d3ee] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22d3ee]" />
            </span>
            Open to new opportunities · Mumbai, India
          </span>
        </motion.div>

        {/* Name */}
        <motion.h2 variants={fadeUpVariants} className="text-lg font-medium text-[#6b7280] tracking-widest uppercase">
          Moulik Jain
        </motion.h2>

        {/* Headline */}
        <motion.h1 variants={fadeUpVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="shimmer-text">Growth & Demand Gen</span>
          <br />
          <span className="text-white">Leader</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={fadeUpVariants} className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#6b7280]">
          12+ years driving pipeline and revenue across{" "}
          <span className="text-[#22d3ee] font-medium">B2B SaaS</span>,{" "}
          <span className="text-[#5d5fef] font-medium">D2C</span>, and{" "}
          <span className="text-[#7c3aed] font-medium">global markets</span>. From founding an agency at 24 to
          scaling AI-native demand gen — I turn strategy into revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-[#5d5fef] px-8 py-3.5 text-sm font-semibold text-white"
            style={{ boxShadow: "0 0 30px rgba(93,95,239,0.5), 0 0 60px rgba(93,95,239,0.2)" }}
          >
            Let&apos;s Talk →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
          >
            See My Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-[#6b7280] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-[#5d5fef] to-transparent"
        />
      </motion.div>
    </section>
  );
}
