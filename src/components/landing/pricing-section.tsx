import { Coffee, CreditCard, ShieldCheck } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CtaButton } from "@/components/landing/cta-button"

interface PricingSectionProps {
  ctaHref: string
  secondaryCtaHref?: string
}

export function PricingSection({ ctaHref, secondaryCtaHref }: PricingSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            💸 Quanto vale organizar sua vida de forma real?
          </h2>
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$800</div>
                <div className="mt-1 text-sm text-muted-foreground">Nutricionista</div>
                <div className="text-xs text-muted-foreground">por mês</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$750</div>
                <div className="mt-1 text-sm text-muted-foreground">Personal</div>
                <div className="text-xs text-muted-foreground">por mês</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$600</div>
                <div className="mt-1 text-sm text-muted-foreground">Consultoria</div>
                <div className="text-xs text-muted-foreground">por mês</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$150</div>
                <div className="mt-1 text-sm text-muted-foreground">Planner</div>
                <div className="text-xs text-muted-foreground">físico</div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 text-center">
            <div className="text-3xl font-bold text-red-600">💣 R$2.300+</div>
            <div className="mt-1 text-sm font-medium text-red-700">Valor total por mês</div>
          </div>

          <Card className="mx-auto mt-12 max-w-lg border-2 border-secondary/20 bg-gradient-to-br from-white to-secondary/5 shadow-2xl">
            <CardContent className="space-y-8 p-8 text-center">
              <div className="space-y-2">
                <div className="text-lg font-medium text-foreground">
                  Mas você leva tudo isso por:
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground line-through">De R$29,00/mês</div>
                <div className="text-5xl font-bold text-foreground">12x de R$ 9,00</div>
                <div className="text-xl text-muted-foreground">ou R$87 por ano</div>
                <div className="mx-auto w-16 h-1 bg-secondary rounded-full"></div>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                <div className="flex items-center justify-center gap-2 text-amber-700">
                  <Coffee className="size-5" />
                  <span className="text-sm font-semibold">Menos que 1 café por mês!</span>
                </div>
                <p className="mt-2 text-xs text-amber-600">
                  R$ 0,30 por dia para ter sua vida organizada
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Por menos do que você gasta em <strong>um pãozinho com café por mês</strong>, você recebe acompanhamento, organização e evolução real.
                </p>
                <p className="font-medium">Tudo isso, de forma segura, fácil e direta no seu WhatsApp.</p>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CreditCard className="size-5 text-secondary" />
                  <span className="text-sm font-semibold text-slate-700">Formas de pagamento</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1 font-medium border border-slate-200">💳 Cartão de Crédito</span>
                  <span className="rounded-full bg-white px-3 py-1 font-medium border border-slate-200">🔐 PIX</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">Pagamento 100% seguro via Kiwify</p>
              </div>

              <CtaButton
                href={ctaHref}
                label="🚀 SIM! QUERO COMEÇAR AGORA COM 70% OFF"
                className="w-full flex-wrap whitespace-normal rounded-2xl bg-secondary px-6 py-5 text-center text-xs font-bold uppercase leading-tight tracking-wide text-white hover:scale-105 hover:bg-secondary/90 shadow-2xl shadow-secondary/20 transition-all duration-300 sm:text-sm"
              />

              <Separator className="bg-slate-200" />

              <Alert className="border-2 border-secondary/30 bg-secondary/5">
                <ShieldCheck className="size-5 text-secondary" />
                <AlertTitle className="text-secondary font-semibold">✅ Garantia de 7 dias ou seu dinheiro de volta</AlertTitle>
                <AlertDescription className="text-muted-foreground">
                  Teste por 7 dias sem compromisso. Se não sentir resultado, devolvemos 100% do valor. Simples, rápido e sem burocracia.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="mt-16 space-y-4">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Comece com leveza. Continue com resultado.
            </h3>
            <p className="mx-auto max-w-xl text-muted-foreground">
              A Foquinha IA não é sobre cobrança. É sobre clareza, constância e evolução no seu ritmo. Ela vai estar ali pra te lembrar do que importa — e te ajudar a manter o que você decidiu começar.
            </p>
            <CtaButton
              href={secondaryCtaHref ?? ctaHref}
              label="COMEÇAR AGORA COM A FOQUINHA IA"
              className="flex-wrap whitespace-normal rounded-full bg-primary px-6 py-3 text-center text-xs font-semibold leading-tight tracking-wide text-primary-foreground hover:bg-primary/90 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
