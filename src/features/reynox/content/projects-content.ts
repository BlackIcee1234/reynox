import type { ProjectCase } from "@/features/reynox/types";

export const projectCases: ProjectCase[] = [
  {
    id: "case-1",
    name: "Optimizacion de linea sanitaria en planta lactea",
    industry: "Alimentos y bebidas",
    serviceType: "Ingenieria y fabricacion",
    clientName: "Laura Rojas",
    clientRole: "Gerente de Operaciones",
    challenge:
      "La planta sufria cuellos de botella en transferencia de producto y altos tiempos de limpieza.",
    solution:
      "Rediseniamos estaciones sanitarias, fabricamos componentes inox y ejecutamos instalacion por fases sin detener la operacion completa.",
    result:
      "Disminucion del 27% en cambio de linea y mejora del 18% en eficiencia de limpieza en 90 dias.",
    testimonial:
      "Reynox opero como una extension de nuestro equipo de ingenieria con gran rigor tecnico.",
    image: "/images/reynox/case-1.svg",
    imageAlt: "Planta de alimentos con equipamiento de acero inoxidable",
  },
  {
    id: "case-2",
    name: "Actualizacion de area de formulacion farmaceutica",
    industry: "Farmaceutica",
    serviceType: "Diseno higienico e instalacion",
    clientName: "Carlos Medina",
    clientRole: "Director de Planta",
    challenge:
      "Se requeria elevar cumplimiento sanitario y ampliar capacidad sin incrementar riesgos operativos.",
    solution:
      "Implementamos estaciones inox modulares, rutas de trabajo optimizadas y superficies de limpieza rapida.",
    result:
      "Conformidad total en auditoria interna y aumento de 22% en capacidad de produccion.",
    testimonial:
      "El balance entre cumplimiento normativo y productividad fue sobresaliente.",
    image: "/images/reynox/case-2.svg",
    imageAlt: "Area farmaceutica moderna con estaciones inox",
  },
  {
    id: "case-3",
    name: "Centro de preparacion para operador logistico nacional",
    industry: "Logistica",
    serviceType: "Fabricacion y mantenimiento",
    clientName: "Andrea Fuentes",
    clientRole: "Lider de Ingenieria",
    challenge:
      "Las estaciones previas fallaban por desgaste prematuro y afectaban la continuidad en temporadas pico.",
    solution:
      "Sustituimos con estructuras de mayor resistencia e integramos un plan de mantenimiento preventivo.",
    result:
      "Reduccion del 35% en incidencias no programadas y mayor estabilidad operativa.",
    testimonial:
      "Pasamos de reaccionar a prevenir. La mejora operativa fue inmediata.",
    image: "/images/reynox/case-3.svg",
    imageAlt: "Centro logistico con estaciones industriales de acero inoxidable",
  },
];

export const industries = ["Todas", "Alimentos y bebidas", "Farmaceutica", "Logistica"];

export const serviceFilters = [
  "Todos",
  "Ingenieria y fabricacion",
  "Diseno higienico e instalacion",
  "Fabricacion y mantenimiento",
];
