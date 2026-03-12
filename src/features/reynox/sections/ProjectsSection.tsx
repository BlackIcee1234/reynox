"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { industries, projectCases, serviceFilters } from "@/features/reynox/content";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

export function ProjectsSection() {
  const [industry, setIndustry] = useState("Todas");
  const [serviceType, setServiceType] = useState("Todos");
  const [query, setQuery] = useState("");

  const filteredCases = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return projectCases.filter((item) => {
      const byIndustry = industry === "Todas" || item.industry === industry;
      const byService = serviceType === "Todos" || item.serviceType === serviceType;
      const byQuery =
        normalized.length === 0 ||
        item.name.toLowerCase().includes(normalized) ||
        item.challenge.toLowerCase().includes(normalized) ||
        item.solution.toLowerCase().includes(normalized) ||
        item.result.toLowerCase().includes(normalized);

      return byIndustry && byService && byQuery;
    });
  }, [industry, query, serviceType]);

  return (
    <section id="casos-exito" className="section section-light">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Product preview"
          title="Casos de exito con impacto medible"
          description="Explora proyectos filtrando por industria y tipo de servicio para validar capacidades en contextos reales."
        />

        <div className="grid gap-3 rounded-2xl border border-[#2529431f] bg-white/80 p-4 shadow-[0_16px_30px_rgb(37_41_67_/_10%)] md:grid-cols-3">
          <label className="form-field">
            <span className="text-[#4e567a]">Industria</span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="rounded-xl border border-[#2529431f] bg-[#f7f8fd] text-[#252943]"
            >
              {industries.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="form-field">
            <span className="text-[#4e567a]">Tipo de servicio</span>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="rounded-xl border border-[#2529431f] bg-[#f7f8fd] text-[#252943]"
            >
              {serviceFilters.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="form-field">
            <span className="text-[#4e567a]">Busqueda dinamica</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por reto, solucion o resultado"
              className="rounded-xl border border-[#2529431f] bg-[#f7f8fd] text-[#252943] placeholder:text-[#8089b0]"
            />
          </label>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-6">
            {filteredCases.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="card-hover overflow-hidden rounded-2xl border border-[#2529431f] bg-white"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[240px]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-5 p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2 text-xs text-[#5f6585]">
                      <span className="rounded-full border border-[#3a4efb33] bg-[#3a4efb14] px-3 py-1 text-[#2f42e2]">
                        {item.industry}
                      </span>
                      <span className="rounded-full border border-[#2529431f] px-3 py-1">{item.serviceType}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#252943]">{item.name}</h3>

                    <div className="space-y-3 text-sm leading-relaxed text-[#5f6585]">
                      <p>
                        <strong className="text-[#252943]">Problema inicial:</strong> {item.challenge}
                      </p>
                      <p>
                        <strong className="text-[#252943]">Solucion Reynox:</strong> {item.solution}
                      </p>
                      <p>
                        <strong className="text-[#252943]">Resultado:</strong> {item.result}
                      </p>
                    </div>

                    <blockquote className="rounded-xl border border-[#2529431f] bg-[#f6f8fe] p-4 text-sm italic text-[#3b4367]">
                      &quot;{item.testimonial}&quot;
                      <footer className="mt-2 not-italic text-xs text-[#6f7697]">
                        {item.clientName}, {item.clientRole}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>

        {filteredCases.length === 0 ? (
          <p className="rounded-xl border border-[#2529431f] bg-white p-5 text-sm text-[#5f6585]">
            No hay resultados con los filtros actuales. Ajusta industria, servicio o termino de
            busqueda.
          </p>
        ) : null}
      </div>
    </section>
  );
}
