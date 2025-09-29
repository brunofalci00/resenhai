import { BarChart3, Bot, CheckCircle2, Flame, MessageCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CtaButton } from "@/components/landing/cta-button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  ctaHref: string
}

export function HeroSection({ ctaHref }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-12 lg:px-8">
        <div className="space-y-10 lg:col-span-6">
          <Badge className="rounded-full bg-secondary/15 px-4 py-1 text-secondary">14 dias para virar a chave</Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Foquinha IA —
              <span className="mt-2 block text-slate-700">Transforme a sua vida em 14 dias.</span>
              <span className="mt-2 block text-secondary">Direto no seu WhatsApp.</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Organize seus hábitos, melhore sua alimentação, comece a treinar e tire seus objetivos do papel.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <CtaButton
              href={ctaHref}
              label="QUERO USAR A FOQUINHA"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <Card className="relative overflow-hidden border-slate-200/70 bg-slate-900 text-white shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 bg-white/5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-400 to-slate-600">
                  <CheckCircle2 className="size-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  Foquinha no WhatsApp
                </CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-400/70" />
                <span className="size-2 rounded-full bg-yellow-400/70" />
                <span className="size-2 rounded-full bg-green-400/70" />
              </div>
            </CardHeader>
            <CardContent className="space-y-8 bg-gradient-to-b from-slate-900 to-slate-950/80 p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span className="font-medium text-white/90">Plano de Hoje</span>
                  <span>check-ins e lembretes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-secondary to-emerald-500" />
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-7 items-center justify-center rounded-full bg-secondary">
                      <CheckCircle2 className="size-4 text-white" />
                    </div>
                    <span className="font-medium text-white">Relatório semanal enviado</span>
                  </div>
                  <span className="text-xs text-slate-300">07:30</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-7 items-center justify-center rounded-full bg-secondary">
                      <CheckCircle2 className="size-4 text-white" />
                    </div>
                    <span className="font-medium text-white">Plano de treino do dia</span>
                  </div>
                  <span className="text-xs text-slate-300">08:15</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-7 rounded-full border-2 border-slate-400" />
                    <span className="font-medium text-white">Lembrete de hidratação</span>
                  </div>
                  <span className="text-xs text-amber-400">Pendente</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-7 rounded-full border-2 border-slate-400" />
                    <span className="font-medium text-white">Checklist de tarefas</span>
                  </div>
                  <span className="text-xs text-slate-300">17:00</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/90">
                  &quot;Ela vai estar ali pra te lembrar do que importa — e te ajudar a manter o que você decidiu começar.&quot;
                </p>
                <p className="mt-2 text-xs text-slate-300">Foquinha IA</p>
              </div>
            </CardContent>
            <div className="pointer-events-none absolute -right-6 -top-6 hidden size-24 place-items-center rounded-3xl bg-secondary/20 shadow-2xl lg:grid">
              <CheckCircle2 className="size-10 text-secondary" />
            </div>
            <div className="pointer-events-none absolute -left-4 -bottom-4 hidden size-16 place-items-center rounded-2xl bg-amber-100 shadow-lg lg:grid">
              <Flame className="size-8 text-amber-500" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
