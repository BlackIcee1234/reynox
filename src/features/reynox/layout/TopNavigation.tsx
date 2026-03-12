import { navItems } from "@/features/reynox/content";

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2529431f] bg-[#dee0edcc] backdrop-blur-xl">
      <div className="container-custom flex items-center justify-between py-3">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 rounded-md px-1 py-1 text-sm font-semibold tracking-[0.2em] text-[#252943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3a4efb]"
          aria-label="Ir a inicio"
        >
          <span className="h-2 w-2 rounded-full bg-[#3a4efb]" aria-hidden />
          REYNOX
        </a>

        <nav aria-label="Navegacion principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#4d5577] transition-colors hover:text-[#252943]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cotizacion" className="btn-primary text-sm">
          Agenda una llamada
        </a>
      </div>
    </header>
  );
}
