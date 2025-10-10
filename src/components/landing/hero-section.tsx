import { SectionTracker } from "@/components/analytics/section-tracker"
import { CtaButton } from "@/components/landing/cta-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquareText, Share2 } from "lucide-react"

interface HeroSectionProps {
  ctaHref: string
}

export function HeroSection({ ctaHref }: HeroSectionProps) {
  return (
    <SectionTracker sectionId="hero">
      <section
        id="hero"
        className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          {/* Intro badge */}
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <Badge className="rounded-full bg-secondary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary dark:bg-secondary/30">
              Resenhai chegou
            </Badge>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Pare de ser printado do jeito errado
            </p>
          </div>

          {/* Headline */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Chega de errar na resposta e virar piada no grupo delas
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              Manda o print, recebe a resposta certa. Resenhai é o amigo que
              nunca erra o timing, evita o vácuo e te dá argumentos prontos em
              tempo real no WhatsApp.
            </p>
          </div>

          {/* Conversation mock */}
          <div className="mb-12">
            <Card className="mx-auto w-full max-w-md border border-slate-200 shadow-lg shadow-primary/20">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Share2 className="size-5" />
                  </div>
                  <div className="rounded-2xl bg-primary text-sm text-primary-foreground shadow-lg shadow-primary/40">
                    <p className="px-4 py-3">
                      “Ela mandou teu textão no grupo rindo, irmão.”
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <MessageSquareText className="size-5" />
                  </div>
                  <div className="rounded-2xl border border-secondary/40 bg-white text-sm text-slate-700 shadow-sm">
                    <p className="px-4 py-3">
                      Resenhai: “Respira. Manda agora — ‘teu feed tá sem graça
                      sem você por aqui 🙃’”
                    </p>
                  </div>
                </div>
                <div className="ml-auto rounded-full bg-muted px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Vácuo evitado ✅
                </div>
              </CardContent>
            </Card>
            <p className="mt-6 text-center text-base font-semibold text-slate-700">
              Você manda o print. A gente devolve o argumento certeiro.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-6 flex justify-center">
            <CtaButton
              href={ctaHref}
              label="Quero parar de passar vergonha"
              trackingLocation="hero"
              className="w-full rounded-xl bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
            />
          </div>

          {/* Guarantee */}
          <div className="text-center">
            <p className="text-sm font-semibold text-secondary">
              7 dias de teste. Cancelou? Zero perguntas.
            </p>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
