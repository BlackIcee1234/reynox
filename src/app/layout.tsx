import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reynox.mx"),
  title: {
    default: "Reynox | Soluciones Industriales en Acero Inoxidable",
    template: "%s | Reynox",
  },
  description:
    "Reynox desarrolla soluciones industriales en acero inoxidable para empresas en Mexico: ingenieria, fabricacion, instalacion y soporte especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0e13] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
