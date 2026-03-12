type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${dark ? "text-[#8ec8ff]" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-[#f4f6ff]" : "text-[#252943]"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-[#dbe0ff]" : "text-[#5f6585]"}`}>
        {description}
      </p>
    </header>
  );
}
