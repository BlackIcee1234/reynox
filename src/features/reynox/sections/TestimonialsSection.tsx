"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { testimonials } from "@/features/reynox/content";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

const ROTATE_MS = 5200;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const active = testimonials[index];

  return (
    <section className="section section-dark border-y border-white/10">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Testimonios"
          title="Confianza construida en proyectos reales"
          description="Resenas de lideres industriales que eligieron a Reynox para transformar operaciones criticas."
          centered
          dark
        />

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm sm:p-8">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-[#f7f8ff] sm:text-xl">&quot;{active.quote}&quot;</p>
              <footer className="text-sm text-[#d8ddfb]">
                <p className="font-semibold text-[#f5f7ff]">{active.name}</p>
                <p>
                  {active.role} - {active.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Mostrar testimonio ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index ? "w-8 bg-[#e3ff3b]" : "w-4 bg-[#8f97bf] hover:bg-[#c4cbf2]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
