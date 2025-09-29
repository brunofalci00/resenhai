import { ShieldCheck } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CtaButton } from "@/components/landing/cta-button"

interface PricingSectionProps {
  ctaHref: string
}

export function PricingSection({ ctaHref }: PricingSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            💸 Quanto vale organizar sua vida de forma real?
          </h2>
          <div className="mx-auto mt-8 max-w-md space-y-2 text-left text-sm text-foreground">
            <p>Nutricionista? R00/mês</p>
            <p>Personal? R50/mês</p>
            <p>Consultoria de hábitos? R00/mês</p>
            <p>Planner físico? R50</p>
            <p className="mt-2 font-semibold">💣 Valor total: R00+ por mês</p>
          </div>

          <Card className="mx-auto mt-12 max-w-lg border border-slate-200 shadow-xl">
            <CardContent className="space-y-6 p-6 text-left sm:p-8">
              <div className="flex items-center justify-between text-sm font-medium text-foreground">
                <span>Mas você leva tudo isso por:</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <ShieldCheck className="size-3" />
                  Acompanhamento real
                </span>
              </div>
              <div>
                <div className="text-4xl font-semibold text-foreground sm:text-5xl">12x de R$ 7,25</div>
                <p className="mt-1 text-lg text-muted-foreground">ou R7 por ano</p>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Por menos do que você gasta em um pedido no iFood por ano, você recebe acompanhamento, organização e evolução real.
                </p>
                <p>Tudo isso, de forma segura, fácil e direta no seu WhatsApp.</p>
              </div>
              <CtaButton
                href={ctaHref}
                label="QUERO COMEÇAR AGORA COM A FOQUINHA IA"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
              />
              <Separator className="bg-slate-200" />
              <Alert className="border border-secondary/60 bg-secondary/10">
                <ShieldCheck className="size-5 text-secondary" />
                <AlertTitle>Garantia de 7 dias</AlertTitle>
                <AlertDescription>
                  Você pode testar por 7 dias. Se não sentir resultado, cancela sem compromisso. Simples, leve e sem burocracia.
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
              href={ctaHref}
              label="COMEÇAR AGORA COM A FOQUINHA IA"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-primary-foreground hover:bg-primary/90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
