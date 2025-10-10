import { SectionTracker } from "@/components/analytics/section-tracker"
import { CtaButton } from "@/components/landing/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { ListChecks, Smartphone, Sparkles, Timer } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    title: "1. Você manda o print",
    description:
      "Qualquer conversa, print, áudio ou dúvida. Basta encaminhar no WhatsApp do Resenhai.",
  },
  {
    icon: Timer,
    title: "2. Resposta em tempo real",
    description:
      "Em minutos você recebe exatamente o que falar. Nada de textão. É só copiar e colar.",
  },
  {
    icon: Sparkles,
    title: "3. Mantém a conversa viva",
    description:
      "A gente te guia no ritmo certo: follow-up, quebra de gelo, piada na medida, convite.",
  },
  {
    icon: ListChecks,
    title: "4. Aprende no processo",
    description:
      "Toda orientação vem com o motivo. Você pega o jeito e para de testar no escuro.",
  },
]

const bulletPoints = [
  "Copie a resposta, adapte com sua vibe e evite o vácuo",
  "Sugestões para stories, directs e mensagens longas",
  "Nada de papo de “alpha”: conversa real, na linguagem dela",
  "Disponível 24/7 — sem amigo dormindo ou sumindo",
  "7 dias de teste. Se odiar, aperta cancelar e acabou",
]

interface BenefitsSectionProps {
  ctaHref?: string
}

export function BenefitsSection({ ctaHref }: BenefitsSectionProps) {
  return (
    <SectionTracker sectionId="solution">
      <section id="solution" className="bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Como o Resenhai funciona?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Pensado para mobile first: tudo acontece direto no WhatsApp. Sem
              app extra, sem cadastro, sem enrolação. Você manda o contexto,
              recebe a resposta pronta e nunca mais fica sem saber o que dizer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <Card
                key={step.title}
                className="border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto max-w-2xl space-y-4">
            {bulletPoints.map((text) => (
              <div key={text} className="flex items-start gap-3 text-left">
                <span className="mt-1 block size-2 rounded-full bg-secondary" />
                <p className="text-base text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          {ctaHref && (
            <div className="flex justify-center">
              <CtaButton
                href={ctaHref}
                label="Quero testar 7 dias agora"
                trackingLocation="benefits"
                className="w-full rounded-xl bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
              />
            </div>
          )}
        </div>
      </section>
    </SectionTracker>
  )
}
