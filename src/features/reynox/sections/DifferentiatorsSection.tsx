import { differentiators } from "@/features/reynox/content";
import { Reveal } from "@/features/reynox/shared/Reveal";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

export function DifferentiatorsSection() {
  return (
    <section className="section section-light">
      <div className="container-custom space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow="Benefits"
            title="Ventajas competitivas que impactan el negocio"
            description="Diseno y ejecucion con mentalidad de producto: menos friccion, menos riesgo y mejores indicadores operativos."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="card-hover rounded-2xl border border-[#2529431f] bg-white/80 p-5">
                <h3 className="text-lg font-semibold text-[#252943]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6585]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
