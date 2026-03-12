"use client";

import { motion } from "framer-motion";
import { Cog, DraftingCompass, ShieldCheck, Wrench } from "lucide-react";

import { services } from "@/features/reynox/content";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

const icons = [DraftingCompass, Cog, ShieldCheck, Wrench];

export function ServicesSection() {
  return (
    <section id="servicios" className="section section-dark border-y border-white/10">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Servicios"
          title="Arquitectura de servicios para operaciones criticas"
          description="Cada frente combina ingenieria, ejecucion y control para acelerar resultados sin comprometer calidad."
          dark
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/12 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="inline-flex rounded-xl border border-[#e3ff3b66] bg-[#e3ff3b22] p-2">
                  <Icon className="h-5 w-5 text-[#e3ff3b]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#f4f6ff]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d8ddfb]">{service.description}</p>

                <ul className="mt-4 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-[#dbe0ff]">
                      <span className="micro-accent mr-2">*</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
