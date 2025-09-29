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

const title = "Foquinha IA — Transforme a sua vida em 14 dias."
const description =
  "Organize seus hábitos, melhore sua alimentação, comece a treinar e tire seus objetivos do papel. Tudo isso com ajuda da Foquinha direto no seu WhatsApp."

export const metadata: Metadata = {
  metadataBase: new URL("https://foquinha-landing.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Foquinha IA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "Foquinha IA no WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=1200&q=80&fit=crop"],
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
