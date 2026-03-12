import { aboutText, pillars, stats } from "@/features/reynox/content";
import { Reveal } from "@/features/reynox/shared/Reveal";
import { SectionHeader } from "@/features/reynox/shared/SectionHeader";

export function AboutSection() {
  return (
    <section id="quienes-somos" className="section section-light">
      <div className="container-custom space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow="Quienes somos"
            title="Un partner tecnico para proyectos industriales de alto impacto"
            description={aboutText}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <article className="theme-panel card-hover rounded-2xl p-5">
                <p className="text-3xl font-semibold text-[#252943]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#5f6585]">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="card-hover rounded-2xl border border-[#2529431f] bg-white/80 p-5">
                <h3 className="text-lg font-semibold text-[#252943]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6585]">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
