"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { analytics } from "@/lib/analytics"

interface StickyCtaBarProps {
  ctaHref: string
}

export function StickyCtaBar({ ctaHref }: StickyCtaBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após rolar 400px
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    // Extrai o campaign da URL
    const url = new URL(ctaHref)
    const campaign = url.searchParams.get('utm_campaign') || 'unknown'
    analytics.trackCheckoutClick('sticky_bar', campaign)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="bg-gradient-to-r from-[#25D366] via-[#25D366] to-[#20BA5A] shadow-2xl shadow-[#25D366]/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-sm font-bold text-white sm:text-base">
                ⚡ Vagas limitadas
              </p>
              <p className="text-xs text-white/90 sm:text-sm">
                As ativações são liberadas em lotes. Garanta seu acesso agora.
              </p>
            </div>
          </div>

          <a
            href={ctaHref}
            onClick={handleClick}
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#128C7E] transition-all hover:scale-105 hover:bg-[#128C7E] hover:text-white hover:shadow-xl sm:px-6 sm:py-3 sm:text-sm"
          >
            <span>Começar agora</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
