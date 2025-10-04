import { AlertCircle, Flame } from "lucide-react"
import { CountdownTimer } from "./countdown-timer"

interface UrgencyBannerProps {
  ctaHref: string
}

export function UrgencyBanner({ ctaHref }: UrgencyBannerProps) {
  return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#FFB020] via-[#FF9500] to-[#FFB020] shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Flame className="hidden size-5 animate-pulse text-white sm:block" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm font-bold text-white sm:text-base">
              🔥 VAGAS LIMITADAS:
            </span>
            <span className="text-xs text-white/90 sm:text-sm">
              Últimas ativações disponíveis
            </span>
          </div>
        </div>

        <CountdownTimer />

        <a
          href={ctaHref}
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#128C7E] transition-all hover:scale-105 hover:bg-[#128C7E] hover:text-white hover:shadow-xl sm:px-6 sm:text-sm"
        >
          <AlertCircle className="size-4 animate-pulse" />
          <span>GARANTIR VAGA</span>
        </a>
      </div>
    </div>
  )
}
