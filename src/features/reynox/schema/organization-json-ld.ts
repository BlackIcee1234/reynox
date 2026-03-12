export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reynox",
  url: "https://www.reynox.mx",
  description:
    "Empresa mexicana especializada en acero inoxidable, fabricacion industrial y proyectos a medida para empresas globales.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+52-33-0000-0000",
    areaServed: "MX",
    availableLanguage: ["es-MX"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
};
