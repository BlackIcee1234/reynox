"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/features/reynox/content";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

export function ProcessSection() {
  return (
    <section id="proceso" className="section">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Proceso de trabajo"
          title="Un flujo operacional claro en cinco etapas"
          description="Desde el diagnostico hasta el seguimiento, reducimos incertidumbre y aceleramos ejecucion con una metodologia trazable."
          centered
        />

        <div className="relative grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="card-hover relative rounded-2xl border border-[#2529431f] bg-white p-5"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#3a4efb]">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-[#252943]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6585]">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
