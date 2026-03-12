"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Cpu,
  Factory,
  Gauge,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import { heroSlides } from "@/features/reynox/content";
import { cn } from "@/lib/utils";

const SLIDE_DELAY = 4600;

const mobileHeroSlides = [
  { id: "precision", Icon: ScanSearch, metric: "0.02", unit: "mm", glow: "#3a4efb66" },
  { id: "speed", Icon: Gauge, metric: "27", unit: "%", glow: "#33a4fa66" },
  { id: "uptime", Icon: ShieldCheck, metric: "99.2", unit: "%", glow: "#e3ff3b66" },
];

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

      <div className="container-custom relative">
        <h1 className="sr-only">
          Soluciones en acero inoxidable para operaciones industriales de alto rendimiento
        </h1>

        <div className="lg:hidden">
          <div className="mx-auto max-w-sm">
            <motion.div
              className="glass-panel relative overflow-hidden rounded-[28px] border border-white/45 px-5 pb-5 pt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#3a4efb1f] to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full border border-[#3a4efb2e] bg-[#3a4efb12] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3246e6]">
                  <Factory className="h-3 w-3" />
                  Reynox
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e3ff3b] px-2.5 py-1 text-[10px] font-semibold text-[#252943]">
                  <Sparkles className="h-3 w-3" />
                  Pro
                </span>
              </div>

              <motion.div
                key={mobileHeroSlides[current].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-[24px] border border-[#25294317] bg-white/78 px-4 pb-6 pt-5"
              >
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-4 h-28 w-28 -translate-x-1/2 rounded-full blur-2xl"
                  style={{ backgroundColor: mobileHeroSlides[current].glow }}
                  animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[22px] border border-[#3a4efb2a] bg-gradient-to-br from-[#3a4efb] to-[#33a4fa] text-white shadow-[0_16px_36px_rgb(58_78_251_/_35%)]">
                  {(() => {
                    const Icon = mobileHeroSlides[current].Icon;
                    return <Icon className="h-11 w-11" />;
                  })()}
                </div>

                <div className="mt-6 flex items-end justify-center gap-1 text-[#252943]">
                  <span className="text-5xl font-semibold leading-none">
                    {mobileHeroSlides[current].metric}
                  </span>
                  <span className="pb-1 text-lg font-semibold text-[#5a638c]">
                    {mobileHeroSlides[current].unit}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[Activity, Cpu, ShieldCheck].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center rounded-xl border border-[#25294317] bg-white/75 py-2"
                    >
                      <Icon className="h-4 w-4 text-[#3a4efb]" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {mobileHeroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Cambiar visual ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === current ? "w-9 bg-[#3a4efb]" : "w-5 bg-[#a9b0d6] hover:bg-[#8690c8]",
                    )}
                  />
                ))}
              </div>

              <a href="#cotizacion" className="btn-primary mt-5 min-h-11 w-full text-base">
                Cotizar ahora
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="hidden gap-10 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3a4efb26] bg-[#3a4efb12] px-3 py-1 text-xs font-medium text-[#2f42e2]">
              <Factory className="h-3.5 w-3.5" />
              Ingenieria industrial premium para equipos de alto rendimiento
            </div>

            <h2 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-[#252943]">
              Soluciones en acero inoxidable para operaciones que no pueden fallar
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#5f6585]">
              Disenamos, fabricamos e implementamos sistemas industriales con enfoque en eficiencia
              operativa, cumplimiento normativo y continuidad de negocio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cotizacion" className="btn-primary">
                Solicitar diagnostico
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#casos-exito" className="btn-secondary">
                Ver casos de exito
              </a>
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
              <h3 className="text-xl font-semibold text-[#252943]">{heroSlides[current].title}</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}
