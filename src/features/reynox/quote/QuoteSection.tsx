"use client";

import { motion } from "framer-motion";
import { SendHorizontal } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { quoteIndustries, quoteInitialState } from "@/features/reynox/quote/constants";
import type { QuoteFormErrors, QuoteFormState } from "@/features/reynox/quote/types";
import { validateQuoteForm } from "@/features/reynox/quote/validation";

export function QuoteSection() {
  const [form, setForm] = useState<QuoteFormState>(quoteInitialState);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateQuoteForm(form);
    setErrors(validation);
    setSubmitted(false);

    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 1300));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm(quoteInitialState);
  }

  return (
    <section id="cotizacion" className="section section-dark border-y border-white/10">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          <p className="eyebrow text-[#8ec8ff]">CTA</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#f5f7ff] sm:text-4xl">
            Hablemos de tu siguiente proyecto industrial
          </h2>
          <p className="text-sm leading-relaxed text-[#d8ddfb] sm:text-base">
            Comparte objetivos, restricciones y tiempos. En menos de 24 horas te enviamos una ruta
            tecnica inicial para evaluar viabilidad y alcance.
          </p>
          <div className="rounded-2xl border border-white/15 bg-white/8 p-4 text-sm text-[#e2e6ff]">
            Incluye: diagnostico rapido, propuesta preliminar y recomendacion de implementacion por
            etapas.
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 rounded-2xl border border-white/14 bg-[#2a2f4e] p-5 shadow-[0_24px_60px_rgb(0_0_0_/_20%)] sm:p-6"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="form-field">
              <span>Nombre</span>
              <input
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <small className="text-xs text-rose-300">{errors.name}</small> : null}
            </label>
            <label className="form-field">
              <span>Empresa</span>
              <input
                value={form.company}
                onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                aria-invalid={Boolean(errors.company)}
              />
              {errors.company ? <small className="text-xs text-rose-300">{errors.company}</small> : null}
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="form-field">
              <span>Industria</span>
              <select
                value={form.industry}
                onChange={(e) => setForm((prev) => ({ ...prev, industry: e.target.value }))}
                aria-invalid={Boolean(errors.industry)}
              >
                <option value="">Selecciona una opcion</option>
                {quoteIndustries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.industry ? <small className="text-xs text-rose-300">{errors.industry}</small> : null}
            </label>

            <label className="form-field">
              <span>Telefono</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <small className="text-xs text-rose-300">{errors.phone}</small> : null}
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="form-field sm:col-span-2">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <small className="text-xs text-rose-300">{errors.email}</small> : null}
            </label>
          </div>

          <label className="form-field">
            <span>Descripcion del proyecto</span>
            <textarea
              rows={5}
              value={form.projectDescription}
              onChange={(e) => setForm((prev) => ({ ...prev, projectDescription: e.target.value }))}
              aria-invalid={Boolean(errors.projectDescription)}
            />
            {errors.projectDescription ? (
              <small className="text-xs text-rose-300">{errors.projectDescription}</small>
            ) : null}
          </label>

          <button type="submit" disabled={isSubmitting} className="btn-primary min-h-11 w-full disabled:opacity-70">
            {isSubmitting ? "Enviando..." : "Enviar solicitud de cotizacion"}
            <SendHorizontal className="h-4 w-4" />
          </button>

          <motion.div
            initial={false}
            animate={{
              opacity: submitted ? 1 : 0,
              y: submitted ? 0 : 6,
              height: submitted ? "auto" : 0,
            }}
            className="overflow-hidden rounded-xl border border-[#e3ff3b66] bg-[#e3ff3b22] px-4 py-3 text-sm text-[#f4f6ff]"
            aria-live="polite"
          >
            Gracias. Tu solicitud fue enviada correctamente. Nuestro equipo te contactara pronto.
          </motion.div>

          {hasErrors ? (
            <p className="text-xs text-[#c6cbe8]">
              Revisa los campos marcados para continuar con una solicitud valida.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
