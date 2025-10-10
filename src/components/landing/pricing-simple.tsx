import { Check, Shield } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { CtaButton } from "@/components/landing/cta-button"
import { Card, CardContent } from "@/components/ui/card"

interface PricingSimpleProps {
  ctaHref: string
}

const inclusions = [
  "Acesso imediato ao WhatsApp do Resenhai",
  "Respostas sob medida para cada print, áudio ou story",
  "Orientações com contexto — você entende o porquê",
  "Sugestões para follow-up, convite e retomada de papo",
  "Suporte 24/7 (não some, não dorme, não tem ressaca)",
]

export function PricingSimple({ ctaHref }: PricingSimpleProps) {
  return (
    <SectionTracker sectionId="pricing">
      <section id="pricing" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Teste o Resenhai por 7 dias. Zero risco, só conversa boa.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Se em uma semana você continuar tomando vácuo, cancela com um
              “valeu” e pronto. Sem formulário, sem explicação, sem drama.
            </p>
          </div>

          <Card className="mx-auto w-full max-w-xl border border-primary/30 shadow-xl shadow-primary/10">
            <CardContent className="space-y-8 p-8">
              <div className="text-center">
                <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Plano único
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  Acesso completo + 7 dias grátis
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Depois do teste, a cobrança continua automaticamente (via
                  Kiwify). Mantenha se fizer sentido — cancele quando quiser.
                </p>
              </div>

              <ul className="space-y-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-1 size-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <CtaButton
                href={ctaHref}
                label="Começar meu teste de 7 dias agora"
                trackingLocation="pricing_card"
                className="w-full rounded-xl bg-primary px-8 py-4 text-center text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
              />

              <div className="flex flex-col items-center gap-3 rounded-2xl border border-secondary/40 bg-secondary/10 p-4 text-center">
                <Shield className="size-6 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Garantia “sem vaidade”
                  </p>
                  <p className="text-xs text-slate-600">
                    Achou furada? Mensagem simples no WhatsApp e pronto — reembolso
                    integral.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Em minutos você recebe:
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Primeira resposta calibrada para a conversa atual",
                "Sugestões de próximos passos (sem virar stalker)",
                "Checklist para nunca mais mandar textão desesperado",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Bônus: desbloqueie modelos de mensagens para stories, áudios e
              situações de “ela sumiu”.
            </p>
            <CtaButton
              href={ctaHref}
              label="Entrar no Resenhai agora"
              trackingLocation="pricing_final"
              className="mx-auto w-full rounded-full bg-secondary px-8 py-4 text-center text-sm font-semibold text-secondary-foreground shadow-lg transition-all hover:scale-105 hover:bg-secondary/90 sm:w-auto"
            />
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
