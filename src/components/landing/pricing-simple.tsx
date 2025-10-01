import Image from "next/image"
import { Check, Shield } from "lucide-react"
import { CtaButton } from "@/components/landing/cta-button"

interface PricingSimpleProps {
  ctaHref: string
}

export function PricingSimple({ ctaHref }: PricingSimpleProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Badge + Social Proof */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-slate-900">+2.347</span>
              <span className="text-sm text-slate-600">usuários</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="size-6 text-secondary" />
              <span className="text-sm font-semibold text-slate-700">Tecnologia Segura</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-5 py-2">
              <span className="text-sm font-semibold text-secondary">
                Tenha sua I.A de Produtividade agora!
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Chegou a hora de você organizar sua vida.
          </h2>
          <p className="text-base text-slate-700">
            Comece hoje! Acesse direto no WhatsApp.
          </p>
          <p className="mt-2 text-sm font-semibold text-secondary">
            7 dias de garantia!
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mb-12 max-w-lg">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-2 ring-secondary/20">
            {/* Preço */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm text-slate-600">
                Valor de um <span className="font-semibold">☕ cafezinho</span> por mês para organizar sua rotina.
              </p>
              <div className="mb-4">
                <span className="text-5xl font-bold text-slate-900">12x</span>
                <span className="ml-2 text-5xl font-bold text-secondary">R$9,00</span>
              </div>
              <p className="text-sm text-slate-600">
                ou <span className="font-semibold text-secondary">R$87</span> por ano
              </p>
            </div>

            {/* Benefícios */}
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <Check className="size-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-slate-700">Acesso ilimitado à Foquinha</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-slate-700">Organização de hábitos e rotinas</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-slate-700">Relatórios semanais de progresso</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-slate-700">Lembretes personalizados</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-slate-700">Suporte direto no WhatsApp</span>
              </div>
            </div>

            {/* CTA */}
            <CtaButton
              href={ctaHref}
              label="Quero organizar minha vida"
              className="w-full rounded-xl bg-[#25D366] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#20BA5A]"
            />
          </div>

          {/* Garantia */}
          <div className="mt-8 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-3">
              <Shield className="size-5 text-secondary" />
              <span className="text-sm font-bold text-secondary">
                GARANTIA! Experimente a Foquinha por 7 dias.
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Se não estiver 100% satisfeito(a), devolvemos seu dinheiro sem complicações.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-amber-50 px-5 py-2">
              <span className="text-sm font-semibold text-amber-700">
                Oportunidade
              </span>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            Você já ouviu falar de I.A.
            <br />
            Agora é hora de usar uma que muda sua vida de verdade.
          </h3>

          <div className="mb-8 flex justify-center">
            <Image
              src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
              alt="Foquinha IA"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          <p className="mb-8 text-base text-slate-700">
            Experimente a Foquinha.
            <br />
            <span className="font-semibold">A I.A mais útil que você já conheceu.</span>
          </p>

          <div className="mb-6">
            <p className="text-sm font-bold text-secondary">7 dias de garantia!</p>
          </div>

          <CtaButton
            href={ctaHref}
            label="Quero experimentar agora"
            className="mx-auto w-full rounded-xl bg-[#25D366] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#20BA5A] sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
