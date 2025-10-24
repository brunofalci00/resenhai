import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Poppins } from "next/font/google"

import "./globals.css"
import { PostHogProvider } from "@/providers/posthog-provider"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const siteUrl = "https://resenhai.life"
const title = "Frase Discreta | Quiz de Acesso"
const description =
  "Descubra a frase discreta que deixa ela obcecada por você. Responda o quiz rápido e libere o acesso exclusivo."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Frase Discreta",
    images: [
      {
        url: "https://i.ibb.co/Xf9tvjBy/pexels-rrodriguesim-16807593.jpg",
        width: 1200,
        height: 630,
        alt: "Frase Discreta | Quiz de Acesso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://i.ibb.co/Xf9tvjBy/pexels-rrodriguesim-16807593.jpg"],
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
      <body className={`${poppins.variable} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
