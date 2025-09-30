import Image from "next/image"
import { CtaButton } from "@/components/landing/cta-button"

interface HeroSectionProps {
  ctaHref: string
}

export function HeroSection({ ctaHref }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
            alt="Foquinha IA"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-secondary/10 px-5 py-2">
            <span className="text-sm font-semibold text-secondary">
              Conheça a Foquinha
            </span>
          </div>
        </div>

        {/* Headline Principal */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Organize sua vida,
            <br />
            <span className="text-slate-700">direto no seu</span>
            <br />
            <span className="text-secondary">WhatsApp!</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            A Foquinha nasceu pra simplificar sua rotina.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Ela registra e organiza todos os seus hábitos, metas e rotina direto no WhatsApp.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            <span className="font-semibold">Sem apps confusos, sem planilhas chatas, sem perder o controle.</span>
          </p>
        </div>

        {/* Imagem WhatsApp - GRANDE */}
        <div className="mb-12">
          <div className="relative mx-auto max-w-sm">
            <Image
              src="https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"
              alt="Interface da Foquinha IA no WhatsApp"
              width={600}
              height={1200}
              className="w-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-slate-700">
            Simples assim!
          </p>
        </div>

        {/* CTA Principal */}
        <div className="mb-6 flex justify-center">
          <CtaButton
            href={ctaHref}
            label="Quero ativar a Foquinha"
            className="w-full rounded-xl bg-[#25D366] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#20BA5A] sm:w-auto"
          />
        </div>

        {/* Garantia */}
        <div className="text-center">
          <p className="text-sm font-semibold text-secondary">
            7 dias de garantia!
          </p>
        </div>
      </div>
    </section>
  )
}
