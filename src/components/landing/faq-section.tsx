"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Como funciona a Foquinha IA no WhatsApp?",
    answer:
      "Você adiciona o número da Foquinha no WhatsApp e ela conversa com você de forma natural. Ela entende seus objetivos, monta um plano personalizado e envia lembretes diários. Tudo direto no app que você já usa todo dia.",
  },
  {
    question: "Preciso ter conhecimento técnico pra usar?",
    answer:
      "Não! Se você sabe usar WhatsApp, você sabe usar a Foquinha. É só conversar normalmente, como você faz com seus amigos. Ela entende português brasileiro e se adapta ao seu jeito de falar.",
  },
  {
    question: "E se eu não tiver tempo pra treinar todos os dias?",
    answer:
      "A Foquinha cria rotinas realistas baseadas no tempo que VOCÊ TEM. Se você só consegue 15 minutos, ela monta treinos de 15 minutos. Ela se adapta à sua realidade, não o contrário.",
  },
  {
    question: "Funciona pra quem nunca conseguiu manter rotina?",
    answer:
      "Sim! A Foquinha foi criada justamente pra isso. Ela não te cobra, ela te lembra. Ela reorganiza quando você perde um dia. O foco é constância leve, não perfeição impossível. Mais de 80% dos usuários mantêm a rotina após 30 dias.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, sem burocracia. Você tem 7 dias de garantia pra testar. Se não gostar, é só pedir o dinheiro de volta. E pode cancelar a qualquer momento depois, sem taxas ou penalidades.",
  },
  {
    question: "A Foquinha substitui nutricionista ou personal trainer?",
    answer:
      "Não substitui profissionais de saúde. A Foquinha é uma assistente de organização e hábitos que oferece sugestões gerais. Se você tem condições de saúde específicas, sempre consulte um profissional.",
  },
  {
    question: "Quantas vezes por dia a Foquinha me envia mensagem?",
    answer:
      "Você controla! A Foquinha envia lembretes nos horários que você definir (geralmente 2-3 por dia). Você pode ajustar a frequência a qualquer momento. Nada de spam ou mensagens demais.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Todas as conversas são criptografadas pelo WhatsApp. Não vendemos, compartilhamos ou usamos seus dados pessoais pra nada além de melhorar sua experiência com a Foquinha. Sua privacidade é prioridade.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            ❓ Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-slate-200 transition-all hover:border-secondary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "size-5 flex-shrink-0 text-secondary transition-transform duration-200",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <CardContent className="px-6 pb-6 pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.answer}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="#hero"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Entre em contato com a gente
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
