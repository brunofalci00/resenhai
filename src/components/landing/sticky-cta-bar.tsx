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
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const url = new URL(ctaHref)
    const campaign = url.searchParams.get("utm_campaign") || "unknown"
    analytics.trackCheckoutClick("sticky_bar", campaign)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="bg-gradient-to-r from-primary via-primary/80 to-secondary shadow-2xl shadow-primary/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-sm font-bold text-white sm:text-base">
                Pare de virar print ainda hoje
              </p>
              <p className="text-xs text-white/90 sm:text-sm">
                Resposta certa no WhatsApp em minutos. Teste grátis por 7 dias.
              </p>
            </div>
          </div>

          <a
            href={ctaHref}
            onClick={handleClick}
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary transition-all hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl sm:px-6 sm:py-3 sm:text-sm"
          >
            <span>Começar teste</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
