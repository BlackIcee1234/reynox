const partnerLogos = [
  "Grupo NutraMX",
  "FarmaVida Labs",
  "Linea Industrial del Bajio",
  "Nexus Logistics",
  "Apex Manufacturing",
];

export function SocialProofSection() {
  return (
    <section aria-label="Empresas que confian en Reynox" className="pb-12 pt-2 sm:pb-16">
      <div className="container-custom">
        <div className="rounded-2xl border border-[#2529431a] bg-white/70 px-5 py-5 shadow-[0_18px_44px_rgb(37_41_67_/_8%)] sm:px-7">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#687093]">
            Empresas que confian en nuestras soluciones
          </p>
          <div className="mt-4 grid gap-3 text-center text-sm font-semibold text-[#252943b2] sm:grid-cols-2 lg:grid-cols-5">
            {partnerLogos.map((name) => (
              <div key={name} className="rounded-xl border border-[#25294314] bg-white/70 px-3 py-2">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
