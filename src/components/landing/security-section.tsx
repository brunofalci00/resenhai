import { CheckCircle2, CircleSlash2 } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { Card, CardContent } from "@/components/ui/card"

const wins = [
  "Evitar o vácuo sem precisar mandar 5 mensagens seguidas",
  "Ter respostas prontas para texto, áudio, DM e story",
  "Aprender gatilhos de forma prática e direta",
  "Conversar com naturalidade, sem papo de “alpha” ou frase pronta de fórum",
]

const limits = [
  "Não fazemos milagre com número que você sumiu há 3 meses",
  "Não criamos sentimento onde não existe interesse",
  "Não prometemos virar galã — prometemos parar os vacilos",
]

export function SecuritySection() {
  return (
    <SectionTracker sectionId="security">
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Transparência total
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              O que o Resenhai faz (e o que não faz por você)
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              A proposta é simples: parar de passar vergonha, manter o papo vivo
              e aprender na prática. Sem promessas mirabolantes, só o que é real.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="size-5" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Você vai conseguir
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  {wins.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-red-500">
                  <CircleSlash2 className="size-5" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    O que não rola
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  {limits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block size-1.5 rounded-full bg-red-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-secondary/40 bg-secondary/10 shadow-inner">
            <CardContent className="space-y-4 p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-slate-900">
                7 dias para testar sem risco.
              </p>
              <p className="text-sm text-slate-700">
                Cancelou? Dinheiro de volta, sem perguntas. Acesso 100% pelo
                WhatsApp, sem app para baixar ou cadastro infinito.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SectionTracker>
  )
}
