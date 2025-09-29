import { cn } from "@/lib/utils"
import { CalendarCheck, Dumbbell, Sparkles, TrendingUp, Utensils } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Você envia um \"Oi\" no WhatsApp",
    description: "Início rápido, sem burocracia.",
  },
  {
    number: "2",
    title: "A Foquinha entende você",
    description: "Hábitos, metas e estilo de vida.",
  },
  {
    number: "3",
    title: "Plano personalizado",
    description: "Roteiro claro e possível para seguir.",
  },
  {
    number: "4",
    title: "Lembretes e tarefas diárias",
    description: "Orientações pontuais para manter o ritmo.",
  },
  {
    number: "5",
    title: "Reorganiza quando preciso",
    description: "Adaptação quando a rotina muda.",
  },
  {
    number: "6",
    title: "Relatório semanal",
    description: "Progresso semanal e mensal no seu WhatsApp.",
  },
] as const

const outcomes = [
  {
    icon: Sparkles,
    text: "Clareza no dia a dia",
  },
  {
    icon: CalendarCheck,
    text: "Rotina mais leve e organizada",
  },
  {
    icon: Utensils,
    text: "Alimentação equilibrada",
  },
  {
    icon: Dumbbell,
    text: "Treinos encaixando na sua realidade",
  },
  {
    icon: TrendingUp,
    text: "Evolução sem estresse",
  },
] as const

export function HowItWorksSection() {
  return (
    <section id="funciona" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            📅 Como funciona?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">Direto no WhatsApp, simples e prático.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            🌱 Em 14 dias você começa a sentir:
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome.text}
                className={cn(
                  "flex items-center justify-center gap-3 text-sm text-foreground",
                  index === outcomes.length - 1 ? "sm:col-span-2" : undefined,
                )}
              >
                <outcome.icon className="size-5 text-primary" />
                <span>{outcome.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
