'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Flame,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wand2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/landing/site-footer"
import { analytics } from "@/lib/analytics"

const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL ?? "https://pay.hub.la/sant8qQx3Y4G3sPn2iCg"

const getCheckoutUrl = (campaign: string) => {
  try {
    const url = new URL(checkoutBaseUrl)
    url.searchParams.set("utm_source", "landing")
    url.searchParams.set("utm_medium", "cta")
    url.searchParams.set("utm_campaign", campaign)
    return url.toString()
  } catch {
    return checkoutBaseUrl
  }
}

const heroLines = [
  "Mas printou.",
  "Mandou no grupo.",
  'Soltou um "socorro HAHAHA".',
  "Riu. Fez as amigas rirem. Te expôs.",
]

const emotionalTruths = [
  "Nenhuma mulher busca amor primeiro.",
  "Ela testa se você tem VALOR — e só depois entrega desejo.",
  "Atração não nasce de bondade. Ela nasce de tensão.",
]

const arsenalItems = [
  {
    icon: "🔥",
    title: "Gatilhos de validação e dúvida",
    description: "Faz ela questionar se largar você foi a melhor escolha.",
  },
  {
    icon: "🧨",
    title: "Frases que confundem e excitam",
    description: "Respostas cirúrgicas para virar o papo a seu favor.",
  },
  {
    icon: "🪄",
    title: "Escassez emocional + ego invertido",
    description: "Você controla o ritmo, ela corre atrás da próxima mensagem.",
  },
]

const methodSteps = [
  {
    icon: <MessageCircle className="size-6 text-primary" />,
    title: "Manda o print",
    description:
      "Sem filtro, sem vergonha. Envie a conversa exata que está travada.",
  },
  {
    icon: <Brain className="size-6 text-primary" />,
    title: "Recebe a estratégia",
    description:
      "O Mago constrói a sequência perfeita: frase, intenção e gatilho emocional.",
  },
  {
    icon: <ArrowRight className="size-6 text-primary" />,
    title: "Copia, envia, vira o jogo",
    description:
      "Você pressiona o lugar certo. Ela responde, pede desculpa e te persegue.",
  },
]

const arsenalDeliverables = [
  "Frases prontas para direct, WhatsApp e stories",
  "Gatilhos para reacender conversa fria em segundos",
  "Roteiros de escassez, ciúme controlado e ego invertido",
  "Sequências para marcar encontro sem suplicar",
  "Checklist do que NUNCA dizer quando ela some",
  "Banco de respostas para testes, provocações e drama",
]

const comparisonRows = [
  {
    label: "Sua abordagem atual",
    before: ["Você insiste", "Se explica demais", "Entra como bonzinho", "Ela ignora", "Print pro grupo"],
    after: [
      "Você dispara tensão",
      "Faz ela tomar decisão",
      "Entrega mistério e controle",
      "Ela responde primeiro",
      "Ela defende você pras amigas",
    ],
  },
]

const liveMessages = [
  {
    heading: "Ela te deixou no vácuo",
    sent: "sumiu hein? tudo bem?",
    returned: "a vida ficou meio sem graça sem você nas minhas notificações. resolve isso ou deixo pra concorrência?",
  },
  {
    heading: "Ela te printou",
    sent: "tava lembrando de você",
    returned: "engraçado… você posta meme pra todo mundo mas some de propósito comigo. pode continuar jogando, só lembra que sempre venço.",
  },
  {
    heading: "Ela disse que não quer nada sério",
    sent: "ok, respeito",
    returned: "perfeito, porque 'nada sério' eu deixo pro resto. contigo sempre foi intensidade. decide se aguenta ou se abre espaço.",
  },
]

const testimonials = [
  {
    name: "Lucas, 21",
    quote:
      "Ela ria da minha cara. Usei as respostas do Mago e em 10 minutos tava pedindo pra me ver. Nunca tinha acontecido.",
  },
  {
    name: "Rafa, 27",
    quote:
      "Eu era previsível. Agora cada mensagem é uma bomba. Ela me chama de 'perigoso'… e não consegue parar.",
  },
  {
    name: "Gabriel, 24",
    quote:
      "Deixei de ser o cara legal que ninguém leva a sério. Hoje sou eu quem dita o ritmo. Impressionante.",
  },
]

const pricingPlans = [
  {
    name: "Passe Mensal",
    badge: "Teste total",
    price: "12x R$ 12,90",
    description: "Receba o Mago quando quiser durante 30 dias.",
    perks: [
      "Acesso ilimitado ao estrategista no WhatsApp",
      "Frases calibradas para cada tipo de conversa",
      "Respostas sob demanda com explicação do gatilho",
      "Checklist anti-autossabotagem + sequências de follow-up",
    ],
  },
  {
    name: "Passe Anual",
    badge: "Mais escolhido",
    price: "R$ 119,00 à vista",
    description: "Estratégia 24/7 + bônus ocultos liberados todo mês.",
    perks: [
      "Tudo do plano mensal + arsenal vip de gatilhos",
      "Modelos extras para resfriar e reacender desejo",
      "Atualizações mensais com novas linhas e scripts",
      "Acesso prioritário: respostas mais rápidas",
    ],
    highlight: true,
  },
]

const faqItems = [
  {
    question: "O Mago funciona em conversa que já esfriou?",
    answer:
      "Sim. Você envia o print do último contato e o Mago devolve uma sequência de impacto para reabrir a janela emocional, sem parecer carente.",
  },
  {
    question: "Preciso fingir ser outra pessoa?",
    answer:
      "Não. As respostas são personalizadas conforme seu jeito e história com ela. O objetivo é amplificar sua vantagem, não criar personagem falso.",
  },
  {
    question: "Quanto tempo demora para receber a resposta?",
    answer:
      "Em média poucos minutos. Em horários de pico, até 30 minutos. Assinantes anuais têm fila prioritária.",
  },
  {
    question: "E se eu não gostar do serviço?",
    answer:
      "Você tem 7 dias de garantia total. Basta enviar “cancelar” no WhatsApp ou mandar e-mail para suporte@trendlycorp.com que devolvemos o investimento.",
  },
  {
    question: "Posso usar com mais de uma pessoa ao mesmo tempo?",
    answer:
      "Pode. O Mago estrutura estratégias diferentes pra cada contato, mantendo histórico e próximos passos organizados.",
  },
]

export default function Home() {
  const checkoutHero = useMemo(() => getCheckoutUrl("hero"), [])
  const checkoutCTA = useMemo(() => getCheckoutUrl("cta"), [])
  const checkoutPricing = useMemo(() => getCheckoutUrl("pricing"), [])

  const [hours, setHours] = useState(23)
  const [slots, setSlots] = useState(12)
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0]?.question ?? null)

  useEffect(() => {
    analytics.trackLandingPageView()
  }, [])

  useEffect(() => {
    const hoursInterval = setInterval(() => {
      setHours((prev) => (prev > 0 ? prev - 1 : 23))
    }, 3600000)

    const slotInterval = setInterval(() => {
      setSlots((prev) => (prev > 3 ? prev - 1 : 12))
    }, 300000)

    return () => {
      clearInterval(hoursInterval)
      clearInterval(slotInterval)
    }
  }, [])

  return (
    <div className="bg-background text-foreground">
      <UrgencyBar hours={hours} slots={slots} />
      <main className="flex flex-col">
        <HeroSection checkoutUrl={checkoutHero} />
        <PainSection />
        <SolutionSection checkoutUrl={checkoutHero} />
        <MethodSection />
        <DeliverablesSection />
        <ComparisonSection />
        <MessagesSection />
        <TestimonialsSection />
        <PricingSection checkoutUrl={checkoutPricing} />
        <GuaranteeSection />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <FinalCallToAction checkoutUrl={checkoutCTA} />
      </main>
      <SiteFooter />
    </div>
  )
}

function UrgencyBar({ hours, slots }: { hours: number; slots: number }) {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-primary/40 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-2 text-xs font-semibold uppercase sm:text-sm">
        <span className="hidden sm:inline-flex items-center gap-2">
          <Flame className="size-4" aria-hidden="true" />
          alerta
        </span>
        <span className="flex items-center gap-2">
          Oferta expira em <span className="text-secondary text-lg font-bold">{hours}h</span>
        </span>
        <span className="flex items-center gap-2">
          últimas <span className="text-secondary text-lg font-bold">{slots}</span> vagas
        </span>
      </div>
    </div>
  )
}

function HeroSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 pb-16 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1f2937_0%,#050505_55%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
        <span className="text-7xl md:text-8xl animate-pulse text-primary">😵‍💫</span>
        <h1 className="font-heading text-5xl leading-none text-white md:text-7xl lg:text-8xl">
          <span className="inline-block bg-primary/10 px-4 py-2 text-primary">ELA NÃO TE RESPONDEU</span>
        </h1>
        <PhoneMockup />
        <div className="space-y-4 text-xl text-muted-foreground md:text-2xl">
          {heroLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-4 text-2xl text-white md:text-3xl">
            E você? Ficou lá… esperando. <span className="text-primary font-semibold">Como sempre.</span>
          </p>
        </div>
        <div className="pt-8">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-10 py-6 text-lg font-semibold uppercase tracking-widest shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:scale-105 hover:bg-primary/90"
            onClick={() => analytics.trackCheckoutClick("hero", "hero")}
          >
            <Link href={checkoutUrl}>Quero virar o jogo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[320px] animate-float">
      <div className="rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-white">
          <div className="flex items-center justify-between bg-[#075e54] px-6 py-3 text-xs text-white">
            <span>14:23</span>
            <span className="font-semibold">Ela 👀</span>
            <div className="flex gap-1">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          <div className="space-y-3 bg-[#e5ddd5] p-4">
            <div className="flex justify-end">
              <div className="rounded-2xl bg-[#dcf8c6] px-4 py-2 text-sm text-slate-900 shadow">
                Oi, tudo bem?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="rounded-2xl bg-[#dcf8c6] px-4 py-2 text-sm text-slate-900 shadow">
                E aí, viu minha mensagem?
              </div>
            </div>
            <p className="text-right text-[11px] text-[#667781]">Visualizado ✅✅ 23:45</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PainSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="mx-auto max-w-4xl space-y-10">
        <h2 className="text-center font-heading text-4xl text-primary md:text-6xl">
          VOCÊ JÁ SENTIU ISSO?
        </h2>
        <Card className="border border-primary/40 bg-black/60 p-8 md:p-12">
          <CardContent className="space-y-6 text-lg text-muted-foreground md:text-2xl">
            <p>Você pensa, repensa, escreve e apaga.</p>
            <p>Acha que está mandando bem…</p>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              Ela vê, <span className="text-primary">te ignora</span> e ainda ri de você com as amigas.
            </p>
            <div className="space-y-4 border-t border-primary/30 pt-6">
              <p>A dor não é só rejeição. É humilhação.</p>
              <div className="rounded-3xl border-2 border-primary bg-primary/10 px-6 py-8 text-center font-heading text-3xl md:text-4xl">
                É o cérebro dela dizendo:
                <span className="block text-5xl text-primary md:text-6xl">“ESSE É FRACO.”</span>
              </div>
              <p className="text-center text-2xl text-white md:text-3xl">
                No fundo você sabe: perdeu o controle.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-secondary/40 bg-black/60 p-8 md:p-12">
          <CardContent className="space-y-4 text-lg text-muted-foreground md:text-xl">
            <h3 className="text-center font-heading text-3xl text-secondary">A VERDADE</h3>
            {emotionalTruths.map((truth) => (
              <p key={truth} className="text-center text-white">
                {truth}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function SolutionSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#111827_0%,#050505_100%)]" />
      <div className="mx-auto max-w-5xl space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="font-heading text-5xl text-white md:text-6xl">
            MAS E SE <span className="text-primary">VOCÊ TIVESSE O CONTROLE?</span>
          </h2>
          <div className="inline-block rounded-3xl border border-primary/40 bg-black/60 px-10 py-8 shadow-lg">
            <div className="text-6xl md:text-7xl">🧙‍♂️</div>
            <p className="font-heading text-4xl text-primary md:text-5xl">O MAGO DA SEDUÇÃO™</p>
          </div>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-black/60 p-8 md:p-12">
          <div className="space-y-4 text-xl text-muted-foreground md:text-2xl">
            <p className="text-white">
              Um estrategista. Um manipulador emocional. Um ghostwriter do desejo — direto no seu WhatsApp.
            </p>
            <p className="text-primary md:text-3xl">
              Você manda o print. Ele devolve a frase perfeita para virar o jogo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {arsenalItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary/40 bg-primary/10 px-6 py-8 text-left transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-2 text-xl text-muted-foreground md:text-2xl">
            <p>Você faz ela pensar em você.</p>
            <p>Você faz ela duvidar das escolhas.</p>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              Você vira o único homem que ela não entende — e por isso, não consegue largar.
            </p>
          </div>
        </div>
        <Button
          asChild
          size="lg"
          className="rounded-full bg-primary px-10 py-6 text-lg font-semibold uppercase tracking-widest shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:scale-105 hover:bg-primary/90"
          onClick={() => analytics.trackCheckoutClick("hero", "control")}
        >
          <Link href={checkoutUrl}>Quero dominar a conversa agora</Link>
        </Button>
      </div>
    </section>
  )
}

function MethodSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center">
          <Badge className="rounded-full bg-primary/10 text-primary">Como funciona em 30 segundos</Badge>
          <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">
            O Mago salva seu papo em três passos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {methodSteps.map((step) => (
            <Card key={step.title} className="border border-primary/30 bg-black/60">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <div className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeliverablesSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.2),_transparent_60%)]" />
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-black/70 px-6 py-12 md:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge className="rounded-full bg-primary/10 text-primary">O que chega na sua mão</Badge>
          <h2 className="font-heading text-4xl text-white md:text-5xl">Seu arsenal particular</h2>
          <p className="max-w-2xl text-muted-foreground">
            Cada acesso libera o cofre do Mago com scripts, gatilhos e respostas sob medida para você nunca mais
            deixar uma conversa morrer.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {arsenalDeliverables.map((line) => (
            <div key={line} className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <Check className="mt-1 size-5 text-primary" />
              <p className="text-sm text-muted-foreground">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-primary/30 bg-black/70 p-6 md:p-10">
        <h2 className="text-center font-heading text-4xl text-white md:text-5xl">
          Antes do Mago vs. Depois do Mago
        </h2>
        {comparisonRows.map((row) => (
          <div key={row.label} className="grid gap-6 md:grid-cols-2">
            <Card className="border border-muted bg-black/50">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-muted-foreground">Antes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {row.before.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Star className="size-4 text-muted-foreground/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-primary/40 bg-primary/10">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-primary-foreground">Depois</h3>
                <ul className="space-y-2 text-sm text-primary-foreground">
                  {row.after.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

function MessagesSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(220,38,38,0.2),_transparent_60%)]" />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center">
          <Badge className="rounded-full bg-primary/10 text-primary">Mensagens reais</Badge>
          <h2 className="mt-3 font-heading text-4xl text-white md:text-5xl">
            O que o Mago manda pra você enviar
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {liveMessages.map((message) => (
            <Card key={message.heading} className="border border-primary/30 bg-black/70">
              <CardContent className="space-y-4 p-6 text-sm text-muted-foreground">
                <h3 className="text-base font-semibold text-white">{message.heading}</h3>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-xs uppercase text-muted-foreground/70">Você mandou</p>
                  <p className="font-semibold text-white">{message.sent}</p>
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs uppercase text-primary">O Mago manda você dizer</p>
                  <p className="font-semibold text-white">{message.returned}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge className="rounded-full bg-primary/10 text-primary">Prova social</Badge>
          <h2 className="font-heading text-4xl text-white md:text-5xl">Eles já chamaram o Mago</h2>
          <p className="text-muted-foreground">
            Depoimentos anônimos de quem cansou de ser o cara legal e agora dita o ritmo da conversa.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border border-primary/30 bg-black/70">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Users className="size-6 text-primary" />
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
                <p className="text-sm italic text-muted-foreground">“{testimonial.quote}”</p>
                <div className="text-xs font-semibold uppercase text-secondary">Depoimento autenticado</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
          +340 homens já estão usando
        </div>
      </div>
    </section>
  )
}

function PricingSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(248,113,113,0.18),_transparent_70%)]" />
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <Badge className="rounded-full bg-primary/10 text-primary">Escolha o arsenal</Badge>
          <h2 className="font-heading text-4xl text-white md:text-5xl">Como você quer chamar o Mago?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ambos os planos desbloqueiam o estrategista direto no WhatsApp e entregam garantia total de 7 dias.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden border ${
                plan.highlight
                  ? "border-secondary bg-black/80 shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                  : "border-primary/30 bg-black/70"
              }`}
            >
              {plan.highlight ? (
                <div className="absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  Mais escolhido
                </div>
              ) : (
                <div className="absolute right-3 top-3 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {plan.badge}
                </div>
              )}
              <CardContent className="space-y-6 p-8">
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{plan.badge}</p>
                  <p className="text-3xl font-bold text-primary md:text-4xl">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Sparkles className="mt-1 size-4 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl bg-primary py-5 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90"
                  onClick={() => analytics.trackCheckoutClick("pricing_card", plan.name)}
                >
                  <Link href={checkoutUrl}>Chamar o Mago agora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function GuaranteeSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-black/80 px-6 py-12 text-center md:px-16">
        <div className="flex justify-center">
          <ShieldCheck className="size-10 text-secondary" />
        </div>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">7 dias de garantia</h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Use o Mago sem medo. Se não sentir que assumiu o controle das conversas, mande “cancelar” e devolvemos
          100% do valor. Sem perguntas. Sem condicionais.
        </p>
      </div>
    </section>
  )
}

function FaqSection({
  openFaq,
  setOpenFaq,
}: {
  openFaq: string | null
  setOpenFaq: (value: string | null) => void
}) {
  return (
    <section className="relative px-4 py-20" id="faq">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(148,163,184,0.2),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <Badge className="rounded-full bg-primary/10 text-primary">Perguntas frequentes</Badge>
          <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Antes de chamar o Mago…</h2>
          <p className="mt-2 text-muted-foreground">
            Dúvidas reais dos novos assinantes respondidas diretamente pelo estrategista.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openFaq === item.question
            return (
              <div key={item.question} className="rounded-2xl border border-primary/30 bg-black/70">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-white"
                  onClick={() => setOpenFaq(isOpen ? null : item.question)}
                >
                  {item.question}
                  <ArrowRight
                    className={`size-5 transition-transform ${isOpen ? "rotate-90 text-primary" : "text-muted-foreground"}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-primary/20 px-6 py-4 text-sm text-muted-foreground">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCallToAction({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="relative px-4 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.18),_transparent_65%)]" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-primary/40 bg-black/80 px-6 py-16 text-center md:px-12">
        <div className="flex items-center gap-3">
          <Wand2 className="size-8 text-primary" />
          <span className="font-heading text-3xl text-white md:text-4xl">
            Pronto pra ser o cara que ela não entende?
          </span>
        </div>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Aperte o botão, manda o print e deixa o Mago reescrever a conversa. Ela vai se perguntar o que mudou —
          e por que não consegue parar de pensar em você.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full bg-primary px-12 py-6 text-lg font-semibold uppercase tracking-widest hover:bg-primary/90"
          onClick={() => analytics.trackCheckoutClick("pricing_final", "final_cta")}
        >
          <Link href={checkoutUrl}>Chamar o Mago agora</Link>
        </Button>
      </div>
    </section>
  )
}
