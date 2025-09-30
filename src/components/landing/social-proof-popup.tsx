"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, X } from "lucide-react"
import { Card } from "@/components/ui/card"

const recentPurchases = [
  { name: "Maria Silva", location: "São Paulo - SP", time: "3 minutos atrás" },
  { name: "João Pedro", location: "Rio de Janeiro - RJ", time: "8 minutos atrás" },
  { name: "Ana Costa", location: "Belo Horizonte - MG", time: "12 minutos atrás" },
  { name: "Carlos Santos", location: "Curitiba - PR", time: "15 minutos atrás" },
  { name: "Juliana Lima", location: "Porto Alegre - RS", time: "18 minutos atrás" },
  { name: "Pedro Oliveira", location: "Brasília - DF", time: "22 minutos atrás" },
  { name: "Fernanda Souza", location: "Salvador - BA", time: "25 minutos atrás" },
  { name: "Lucas Martins", location: "Fortaleza - CE", time: "30 minutos atrás" },
]

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPurchase, setCurrentPurchase] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (hasInteracted) return

    // Primeiro popup aparece após 5 segundos
    const initialTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(initialTimeout)
  }, [hasInteracted])

  useEffect(() => {
    if (!isVisible || hasInteracted) return

    // Auto-fecha após 5 segundos
    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    // Próximo popup aparece entre 15-25 segundos depois
    const nextTimeout = setTimeout(
      () => {
        setCurrentPurchase((prev) => (prev + 1) % recentPurchases.length)
        setIsVisible(true)
      },
      Math.random() * 10000 + 20000,
    )

    return () => {
      clearTimeout(hideTimeout)
      clearTimeout(nextTimeout)
    }
  }, [isVisible, hasInteracted])

  const handleClose = () => {
    setIsVisible(false)
    setHasInteracted(true)
  }

  if (!isVisible) return null

  const purchase = recentPurchases[currentPurchase]

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <Card className="relative w-80 border-2 border-secondary/30 bg-white shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-start gap-3 p-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-secondary/15">
            <CheckCircle2 className="size-5 text-secondary" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              {purchase.name}
            </p>
            <p className="text-xs text-muted-foreground">{purchase.location}</p>
            <p className="mt-1 text-xs font-medium text-secondary">
              Acabou de garantir a vaga 🎉
            </p>
            <p className="mt-1 text-xs text-slate-400">{purchase.time}</p>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 px-4 py-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-600">
              <span className="font-semibold text-secondary">+2.347</span> pessoas já garantiram
            </p>
            <div className="flex gap-1">
              <div className="size-1.5 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500">Ao vivo</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
