import type { Metadata } from "next";

import { ReynoxLandingPage } from "@/features/reynox";

export const metadata: Metadata = {
  title: "Soluciones Industriales en Acero Inoxidable",
  description:
    "Reynox desarrolla soluciones industriales en acero inoxidable para empresas en Mexico: ingenieria, fabricacion, instalacion y soporte especializado.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reynox | Soluciones Industriales en Acero Inoxidable",
    description:
      "Empresa mexicana especializada en acero inoxidable, fabricacion industrial y soluciones a medida.",
    url: "https://www.reynox.mx",
    type: "website",
    siteName: "Reynox",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <ReynoxLandingPage />;
}
