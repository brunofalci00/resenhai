import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
    title: "Clareza no dia a dia",
    description: "Rotina com foco no que importa e sem ruído mental.",
  },
  {
    icon: CalendarCheck,
    title: "Rotina leve e organizada",
    description: "Agenda que encaixa na sua semana – sem sobrecarregar.",
  },
  {
    icon: Utensils,
    title: "Alimentação equilibrada",
    description: "Sugestões acessíveis e possíveis para cada refeição.",
  },
  {
    icon: Dumbbell,
    title: "Treinos que cabem na sua realidade",
    description: "Planos rápidos, adaptados ao tempo e espaço que você tem.",
  },
  {
    icon: TrendingUp,
    title: "Evolução sem estresse",
    description: "Check-ins semanais mostrando progresso real sem pressão.",
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

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="text-center">
            <Badge className="mx-auto w-fit rounded-full bg-secondary/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
              🌱 em 14 dias
            </Badge>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Você começa a sentir resultados de verdade
            </h3>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Pequenas vitórias semanais que mostram que a Foquinha está funcionando.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {outcomes.map((outcome) => (
              <Card
                key={outcome.title}
                className="group h-full border-0 bg-white/90 shadow-sm ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="flex h-full flex-col gap-4 rounded-[1.25rem] bg-gradient-to-br from-white via-white to-secondary/10 p-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <outcome.icon className="size-5" />
                    </div>
                    <h4 className="text-base font-semibold text-foreground">
                      {outcome.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {outcome.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
