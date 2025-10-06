import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/providers/posthog-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://foquinhaai.life"
const title = "Foquinha IA — Organize sua vida direto no WhatsApp"
const description =
  "A Foquinha é a mão invisível que te coloca no trilho: organiza sua rotina direto no WhatsApp, sem esforço e sem complicação. Teste por 7 dias!"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "https://i.ibb.co/Kzr3VMvx/foquiai-logo.png",
    apple: "https://i.ibb.co/Kzr3VMvx/foquiai-logo.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Foquinha IA",
    images: [
      {
        url: "https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp",
        width: 1200,
        height: 630,
        alt: "Foquinha IA - Organize sua vida no WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"],
  },
  alternates: {
    canonical: siteUrl,
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
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
