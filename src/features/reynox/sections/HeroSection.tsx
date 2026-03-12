"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { heroSlides } from "@/features/reynox/content";
import { cn } from "@/lib/utils";

const SLIDE_DELAY = 4600;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DELAY);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#3a4efb33] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#33a4fa45] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3a4efb26] bg-[#3a4efb12] px-3 py-1 text-xs font-medium text-[#2f42e2]">
            <Factory className="h-3.5 w-3.5" />
            Ingenieria industrial premium para equipos de alto rendimiento
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#252943] sm:text-5xl lg:text-6xl">
            Soluciones en acero inoxidable para operaciones que no pueden fallar
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[#5f6585] sm:text-lg">
            Disenamos, fabricamos e implementamos sistemas industriales con enfoque en eficiencia
            operativa, cumplimiento normativo y continuidad de negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#cotizacion" className="btn-primary">
              Solicitar diagnostico
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#casos-exito" className="btn-secondary">
              Ver casos de exito
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-[#4f5678] sm:text-sm">
            {["18+ anos de experiencia", "420+ proyectos", "98% cumplimiento en entregas"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#3a4efb]" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="glass-panel rounded-[20px] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6585]">
              Performance Snapshot
            </p>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#e3ff3b] px-2.5 py-1 text-[11px] font-semibold text-[#252943]">
              <Sparkles className="h-3 w-3" />
              Enterprise Ready
            </span>
          </div>
          <motion.div
            key={heroSlides[current].id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <h2 className="text-xl font-semibold text-[#252943]">{heroSlides[current].title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#596084]">{heroSlides[current].description}</p>
          </motion.div>
          <div className="mt-5 flex gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir al mensaje ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === current ? "w-9 bg-[#3a4efb]" : "w-5 bg-[#a9b0d6] hover:bg-[#8690c8]",
                )}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-[#2529431f] bg-white/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#697196]">Time to value</p>
              <p className="mt-1 text-lg font-semibold text-[#252943]">-27%</p>
            </article>
            <article className="rounded-xl border border-[#2529431f] bg-white/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#697196]">Uptime</p>
              <p className="mt-1 text-lg font-semibold text-[#252943]">99.2%</p>
            </article>
            <article className="rounded-xl border border-[#2529431f] bg-white/70 p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#697196]">NPS promedio</p>
              <p className="mt-1 text-lg font-semibold text-[#252943]">72</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
