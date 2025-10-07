import { Check, Shield } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function SecuritySection() {
  return (
    <SectionTracker sectionId="security">
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-5 py-2">
            <Shield className="size-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">
              Segurança e Confiança
            </span>
          </div>
        </div>

        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            É seguro?
          </h2>
        </div>

        {/* Bullets */}
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <Check className="size-6 flex-shrink-0 text-secondary" />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Seus dados ficam no WhatsApp
              </p>
              <p className="mt-1 text-sm text-slate-600">
                A Foquinha usa a infraestrutura segura do WhatsApp para todas as conversas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <Check className="size-6 flex-shrink-0 text-secondary" />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                +2.300 pessoas confiam na Foquinha todos os dias
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Uma comunidade crescente que recuperou a paz e o controle da rotina.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <Check className="size-6 flex-shrink-0 text-secondary" />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                7 dias de garantia: você testa sem risco
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Devolvemos 100% do valor se não gostar. Simples assim.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </SectionTracker>
  )
}
