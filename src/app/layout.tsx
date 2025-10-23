import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Bebas_Neue, Inter, Montserrat, Playfair_Display } from "next/font/google"

import "./globals.css"
import { PostHogProvider } from "@/providers/posthog-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
})

const siteUrl = "https://resenhai.life"
const title = "Descubra Por Que Ela Não Responde | Teste Gratuito"
const description =
  "Descubra onde você perde o ritmo nas conversas. Teste gratuito mostra exatamente o que fazer para ela não te ignorar mais."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Mago da Sedução",
    images: [
      {
        url: "https://i.ibb.co/Z0v8Rhq/Chat-GPT-Image-22-de-out-de-2025-17-11-48.png",
        width: 1200,
        height: 630,
        alt: "Descubra Por Que Ela Não Responde | Teste Gratuito",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://i.ibb.co/Z0v8Rhq/Chat-GPT-Image-22-de-out-de-2025-17-11-48.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bebas.variable} ${montserrat.variable} ${playfair.variable} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}

