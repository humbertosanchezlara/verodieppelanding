import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vero Dieppe - Psicología | Compás Mental",
  description: "Servicios psicológicos profesionales para ayudarte a ti y a tu familia a vivir una vida mejor. Terapia individual, consejería familiar y terapia de parejas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <meta name="theme-color" content="#8B95C9" />
      </head>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
