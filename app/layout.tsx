import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDForge — Generador de identidades ficticias",
  description:
    "IDForge genera una identidad 100% ficticia al azar: nombre, teléfono, tarjeta decorativa, avatar procedural y una biografía inventada. Solo para ficción, juegos y pruebas.",
  keywords: [
    "IDForge",
    "generador de identidades",
    "identidad ficticia",
    "personaje",
    "lore",
    "roleplay",
  ],
};

export const viewport: Viewport = {
  themeColor: "#06060a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
