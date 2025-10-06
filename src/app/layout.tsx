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
  title: "DevPage - Minha Jornada no Código",
  description: "Blog pessoal de Michel Henrique, desenvolvedor apaixonado por tecnologia. Compartilhando conhecimento sobre Next.js, React, Python, AWS e muito mais.",
  keywords: ["desenvolvimento web", "programação", "javascript", "typescript", "react", "nextjs", "python", "aws"],
  authors: [{ name: "Michel Henrique" }],
  openGraph: {
    title: "DevPage - Minha Jornada no Código",
    description: "Blog pessoal de Michel Henrique, desenvolvedor apaixonado por tecnologia",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
