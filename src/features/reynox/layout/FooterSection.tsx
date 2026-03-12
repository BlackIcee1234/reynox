export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#20243d] py-12">
      <div className="container-custom grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8ec8ff]">REYNOX</p>
          <p className="mt-3 text-sm text-[#d8ddfb]">
            Soluciones industriales en acero inoxidable para empresas globales con operacion en
            Mexico.
          </p>
        </div>

        <nav aria-label="Footer" className="space-y-2 text-sm text-[#d8ddfb]">
          <a href="#quienes-somos" className="block hover:text-white">
            Quienes somos
          </a>
          <a href="#servicios" className="block hover:text-white">
            Servicios
          </a>
          <a href="#casos-exito" className="block hover:text-white">
            Casos de exito
          </a>
          <a href="#cotizacion" className="block hover:text-white">
            Solicitar cotizacion
          </a>
        </nav>

        <div className="space-y-2 text-sm text-[#d8ddfb]">
          <p>Contacto: contacto@reynox.mx</p>
          <p>Telefono: +52 33 0000 0000</p>
          <p>Ubicacion: Guadalajara, Jalisco, Mexico</p>
          <p>Redes: LinkedIn - YouTube - Instagram</p>
          <a href="#" className="inline-block text-[#bfc6ea] underline-offset-4 hover:text-white hover:underline">
            Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
