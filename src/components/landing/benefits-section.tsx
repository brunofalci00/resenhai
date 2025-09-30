"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const benefits = [
  {
    title: "Você envia um 'Oi' no WhatsApp",
    description: "Início rápido, sem burocracia.",
    image: "https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp",
  },
  {
    title: "A Foquinha entende você",
    description: "Hábitos, metas e estilo de vida.",
    image: "https://i.ibb.co/ccvrJvbP/foquinha-entende-voce.webp",
  },
  {
    title: "Plano personalizado",
    description: "Roteiro claro e possível para seguir.",
    image: "https://i.ibb.co/9kdmVsMs/Plano-personalizado.webp",
  },
  {
    title: "Lembretes e tarefas diárias",
    description: "Orientações pontuais para manter o ritmo.",
    image: "https://i.ibb.co/RpxYdP13/Lembretes-e-tarefas-di-rias.webp",
  },
  {
    title: "Reorganiza quando preciso",
    description: "Adaptação quando a rotina muda.",
    image: "https://i.ibb.co/ZRKFpdV9/Reorganiza-quando-preciso.webp",
  },
  {
    title: "Relatório semanal",
    description: "Progresso semanal e mensal no seu WhatsApp.",
    image: "https://i.ibb.co/RTrL3N3m/Relatorio.webp",
  },
]

export function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const current = benefits[currentIndex]

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-secondary/10 px-5 py-2">
            <span className="text-sm font-semibold text-secondary">
              Benefícios Principais
            </span>
          </div>
        </div>

        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            O Que a Foquinha Faz Por Você?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            A Foquinha organiza sua rotina como se fosse seu melhor amigo — mas com superpoderes de IA.
          </p>
          <p className="mx-auto mt-2 text-base font-semibold italic text-slate-700">
            Automático, simples, direto no WhatsApp.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Imagem */}
          <div className="mb-8">
            <div className="relative mx-auto max-w-sm">
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={1200}
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
              {current.title}
            </h3>
            <p className="text-base text-slate-600">{current.description}</p>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex size-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all hover:bg-secondary hover:text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`size-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-secondary" : "bg-slate-300"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex size-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all hover:bg-secondary hover:text-white"
              aria-label="Próximo"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
