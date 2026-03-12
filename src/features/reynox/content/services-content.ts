import type { Service } from "@/features/reynox/types";

export const services: Service[] = [
  {
    id: "service-1",
    title: "Ingenieria y diseno industrial",
    description: "Definimos soluciones con enfoque funcional, sanitario y de continuidad operativa.",
    bullets: ["Levantamiento tecnico", "Diseno a medida", "Documentacion de alcance"],
    industry: ["Alimentos y bebidas", "Farmaceutica", "Manufactura avanzada"],
  },
  {
    id: "service-2",
    title: "Fabricacion en acero inoxidable",
    description:
      "Fabricamos equipos, estructuras y componentes con acabados premium y control dimensional.",
    bullets: ["Soldadura especializada", "Control de calidad", "Acabados industriales"],
    industry: ["Automotriz", "Logistica", "Alimentos y bebidas"],
  },
  {
    id: "service-3",
    title: "Instalacion e integracion en planta",
    description:
      "Integramos soluciones en sitio con metodologia segura y planificacion para minimizar paros.",
    bullets: ["Coordinacion en sitio", "Puesta en marcha", "Pruebas de funcionamiento"],
    industry: ["Farmaceutica", "Manufactura avanzada", "Quimica"],
  },
  {
    id: "service-4",
    title: "Mantenimiento y soporte tecnico",
    description:
      "Protegemos la inversion del cliente con programas preventivos y correctivos de alta respuesta.",
    bullets: ["Planes por criticidad", "Atencion prioritaria", "Mejora continua"],
    industry: ["Logistica", "Hospitalidad", "Alimentos y bebidas"],
  },
];
