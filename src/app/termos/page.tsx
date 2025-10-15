import type { Metadata } from "next"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Section = {
  title: string
  intro?: string[]
  bullets?: string[]
  subsections?: {
    subtitle: string
    description?: string[]
    bullets?: string[]
  }[]
}

export const metadata: Metadata = {
  title: "Termos de Serviço – Resenhai",
  description:
    "Leia os Termos de Serviço do Resenhai, entenda como o assistente de IA opera, quais são seus direitos e responsabilidades ao utilizar o produto.",
}

const sections: Section[] = [
  {
    title: "1. Introdução e Aceitação dos Termos",
    intro: [
      "Bem-vindo ao Resenhai, um assistente de inteligência artificial disponível via WhatsApp que ajuda usuários a construir mensagens de conquista e flerte.",
      "Este documento constitui um acordo legal entre você (“Usuário”) e a Trendly Corp (“Resenhai”), CNPJ 59.393.438/0001-20, com sede na Rua Tanhacu, 336, Jardim Panorama D'Oeste, São Paulo – SP, Brasil.",
      "Ao utilizar o Resenhai você declara ter lido, compreendido e concordado integralmente com estes Termos de Serviço e com a Política de Privacidade. Caso não concorde com qualquer parte, interrompa o uso imediatamente.",
    ],
  },
  {
    title: "2. Definições",
    bullets: [
      "Serviço: o assistente de inteligência artificial Resenhai acessível via WhatsApp.",
      "Usuário: pessoa física maior de 18 anos que utiliza o Serviço.",
      "Conta: registro do Usuário identificado pelo número de telefone do WhatsApp.",
      "Conteúdo do Usuário: mensagens, prints, textos, imagens ou quaisquer informações enviadas pelo Usuário.",
      "Sugestões: recomendações de mensagens geradas pela IA do Resenhai.",
      "IA: modelo OpenAI GPT-4o utilizado para gerar Sugestões.",
      "Assinatura: plano pago anual no valor de R$ 67,90.",
    ],
  },
  {
    title: "3. Descrição do Serviço",
    intro: [
      "O Resenhai opera via WhatsApp oferecendo sugestões personalizadas de mensagens de flerte com base no contexto fornecido. A plataforma utiliza visão computacional e análise de texto para interpretar conversas e gerar três linhas de resposta (ousada, equilibrada e suave), permitindo refinamentos com feedback e personalização por perfil comportamental.",
    ],
    bullets: [
      "Plataforma: WhatsApp.",
      "Modelo de negócio: assinatura anual paga.",
      "Público-alvo: homens adultos (18+).",
      "Idioma: português (Brasil).",
      "Região de operação: Brasil.",
    ],
  },
  {
    title: "4. Elegibilidade e Requisitos",
    subsections: [
      {
        subtitle: "Idade mínima",
        description: [
          "O uso é estritamente proibido para menores de 18 anos. Ao utilizar o Serviço você garante possuir 18 anos ou mais, ter capacidade legal para contratar e não estar impedido de utilizar o Resenhai. Contas de menores serão suspensas e dados associados serão excluídos.",
        ],
      },
      {
        subtitle: "Requisitos técnicos",
        bullets: [
          "Número de telefone válido com WhatsApp ativo.",
          "Conexão à internet.",
          "Smartphone Android ou iOS compatível.",
        ],
      },
      {
        subtitle: "Região de operação",
        description: [
          "O Resenhai está disponível apenas no Brasil. A utilização a partir de outros países pode resultar em limitação de funcionalidades ou suspensão da conta.",
        ],
      },
    ],
  },
  {
    title: "5. Cadastro e Conta",
    subsections: [
      {
        subtitle: "Criação de conta",
        description: [
          "Não há formulário tradicional de cadastro. A conta é criada automaticamente quando você inicia uma conversa com o número oficial do Resenhai no WhatsApp e fica vinculada ao seu número.",
        ],
      },
      {
        subtitle: "Responsabilidade pela conta",
        description: [
          "Você é responsável por manter a segurança do seu dispositivo, por todas as ações realizadas a partir do seu número e por comunicar uso não autorizado. Compartilhar acesso ou credenciais é proibido e pode gerar suspensão.",
        ],
      },
      {
        subtitle: "Veracidade das informações",
        description: [
          "Você garante que as informações fornecidas são verdadeiras, atualizadas e completas. Dados falsos ou desatualizados podem levar à suspensão ou encerramento da conta.",
        ],
      },
    ],
  },
  {
    title: "6. Assinatura e Pagamento",
    intro: [
      "O Resenhai funciona por assinatura anual paga no valor de R$ 67,90. Não há período de teste gratuito.",
    ],
    subsections: [
      {
        subtitle: "Métodos de pagamento",
        description: [
          "Aceitamos pagamentos via cartão de crédito e PIX. Todos são processados pela Hubla, e o Resenhai não armazena dados completos de cartão.",
        ],
      },
      {
        subtitle: "Renovação automática",
        description: [
          "A assinatura é renovada automaticamente após 12 meses. Você será notificado e pode cancelar a renovação a qualquer momento antes da nova cobrança.",
        ],
      },
      {
        subtitle: "Reembolsos",
        description: [
          "Você pode solicitar reembolso integral em até 7 dias corridos após a contratação, conforme o Código de Defesa do Consumidor. Após esse prazo não há reembolso proporcional, salvo obrigação legal.",
        ],
      },
      {
        subtitle: "Cancelamento",
        description: [
          "Para cancelar, envie e-mail para suporte@trendlycorp.com informando o número de telefone utilizado. O cancelamento interrompe futuras renovações; o acesso permanece ativo até o fim do ciclo já pago.",
        ],
      },
    ],
  },
  {
    title: "7. Uso Permitido e Restrições",
    intro: [
      "O Resenhai deve ser utilizado apenas para finalidades pessoais e legais. É proibido utilizá-lo para atividades ilícitas, assédio, spam, engenharia reversa ou para compartilhar conteúdo ofensivo, discriminatório ou que viole direitos de terceiros.",
    ],
    bullets: [
      "Uso comercial sem autorização prévia é proibido.",
      "Não é permitido automatizar envios ou criar integrações não autorizadas.",
      "Burlar medidas de segurança ou explorar vulnerabilidades é vedado.",
      "O compartilhamento de conta implica suspensão imediata.",
      "Conteúdos ilegais e violações de direitos autorais são terminantemente proibidos.",
    ],
  },
  {
    title: "8. Conteúdo e Propriedade Intelectual",
    subsections: [
      {
        subtitle: "Conteúdo do Usuário",
        description: [
          "Você mantém a titularidade sobre o conteúdo que envia, mas concede ao Resenhai licença gratuita, mundial e não exclusiva para usar esse material com fins de operação, melhoria e treinamento do Serviço.",
        ],
      },
      {
        subtitle: "Sugestões geradas",
        description: [
          "As mensagens sugeridas permanecem propriedade da Trendly Corp. Você recebe licença perpétua para usá-las de forma pessoal, não exclusiva e intransferível.",
        ],
      },
      {
        subtitle: "Propriedade intelectual",
        description: [
          "Todas as marcas, algoritmos, prompts, interfaces e documentação são de propriedade exclusiva da Trendly Corp. É proibido reproduzir, modificar ou redistribuir qualquer parte do Serviço sem autorização.",
        ],
      },
    ],
  },
  {
    title: "9. Privacidade e Proteção de Dados",
    intro: [
      "A coleta e o tratamento de dados pessoais seguem a Política de Privacidade e a LGPD. O Resenhai utiliza serviços como WhatsApp, OpenAI, Supabase, PostHog e Hubla para executar o Serviço, com transferência internacional de dados para os Estados Unidos.",
    ],
    bullets: [
      "O tratamento de dados sensíveis (contexto de flerte, vida sexual) ocorre com consentimento explícito.",
      "Solicitamos que você não envie dados de terceiros sem autorização; caso o faça, assume plena responsabilidade.",
      "Medidas técnicas de segurança incluem criptografia, controles de acesso, monitoramento contínuo e auditorias.",
    ],
  },
  {
    title: "10. Disponibilidade e Suporte",
    intro: [
      "O Resenhai opera em regime 24/7, mas podem ocorrer indisponibilidades por manutenção, problemas na infraestrutura do WhatsApp ou fatores fora do nosso controle.",
    ],
    bullets: [
      "Suporte via e-mail (suporte@trendlycorp.com) com prazo de resposta de até 3 dias úteis.",
      "Reclamações podem ser encaminhadas para plataformas de defesa do consumidor, Procon ou canais oficiais da Trendly Corp.",
    ],
  },
  {
    title: "11. Suspensão e Encerramento de Conta",
    intro: [
      "Podemos suspender ou encerrar o acesso a qualquer momento em caso de violação destes Termos, uso ilegal, inadimplência, ordem judicial ou risco à integridade do Serviço.",
    ],
    bullets: [
      "Reservamo-nos o direito de recusar atendimento em caso de abuso ou violação repetida.",
      "Dados podem ser preservados para cumprimento de obrigações legais mesmo após o encerramento.",
    ],
  },
  {
    title: "12. Isenção de Garantias",
    intro: [
      "O Resenhai é fornecido “como está”, sem garantias de resultados específicos. O uso das sugestões é de inteira responsabilidade do Usuário.",
    ],
    bullets: [
      "Não garantimos compatibilidade com expectativas pessoais ou sucesso em interações.",
      "Não nos responsabilizamos por decisões tomadas com base nas sugestões fornecidas.",
      "Não asseguramos disponibilidade ininterrupta ou livre de erros.",
    ],
  },
  {
    title: "13. Limitação de Responsabilidade",
    intro: [
      "Na máxima extensão permitida pela lei, a responsabilidade da Trendly Corp fica limitada ao valor total pago pelo Usuário nos 12 meses anteriores ao evento que originou a reclamação.",
    ],
    bullets: [
      "Não respondemos por lucros cessantes, danos indiretos ou morais decorrentes do uso do Serviço.",
      "O Usuário assume os riscos relacionados ao uso das sugestões em interações reais.",
    ],
  },
  {
    title: "14. Legislação Aplicável e Foro",
    subsections: [
      {
        subtitle: "Lei aplicável",
        bullets: [
          "LGPD – Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
          "Código de Defesa do Consumidor (Lei nº 8.078/1990).",
          "Marco Civil da Internet (Lei nº 12.965/2014).",
          "Código Civil Brasileiro (Lei nº 10.406/2002).",
        ],
      },
      {
        subtitle: "Foro competente",
        description: [
          "Fica eleito o foro da Comarca de São Paulo – SP. Consumidores podem optar pelo foro do domicílio próprio, conforme o CDC.",
        ],
      },
    ],
  },
  {
    title: "15. Disposições Gerais",
    bullets: [
      "Estes Termos e a Política de Privacidade compõem o acordo integral entre você e o Resenhai.",
      "Se alguma cláusula for considerada inválida, as demais permanecem em vigor.",
      "A ausência de exercício de qualquer direito não implica renúncia.",
      "Você não pode ceder ou transferir obrigações sem consentimento; o Resenhai pode ceder em caso de fusão ou aquisição.",
      "Os Termos são redigidos em português do Brasil; em caso de tradução, prevalece a versão em português.",
    ],
  },
  {
    title: "16. Contato",
    intro: [
      "Para dúvidas, solicitações ou reclamações envie mensagem para:",
      "E-mail: suporte@trendlycorp.com",
      "Website: https://resenhai.life",
      "Endereço: Rua Tanhacu, 336, Jardim Panorama D'Oeste, São Paulo – SP, Brasil",
      "Prazo de resposta: até 15 dias úteis.",
    ],
  },
  {
    title: "17. Aceitação dos Termos",
    intro: [
      "Ao utilizar o Resenhai você declara que leu, compreendeu e concorda com estes Termos, com a Política de Privacidade e que:",
    ],
    bullets: [
      "Possui 18 anos ou mais.",
      "Utilizará o Serviço de forma ética e lícita.",
      "Assume responsabilidade pelas sugestões que aplicar.",
      "É responsável por quaisquer dados de terceiros compartilhados.",
    ],
  },
  {
    title: "Versão Resumida (FAQ)",
    bullets: [
      "Quem pode usar? Homens adultos (18+), residentes no Brasil.",
      "Quanto custa? Assinatura anual de R$ 67,90.",
      "Existe teste grátis? Não.",
      "Posso pedir reembolso? Sim, em até 7 dias.",
      "Como cancelo? Envie e-mail para suporte@trendlycorp.com.",
      "O Resenhai garante resultados? Não; decisões são de responsabilidade do Usuário.",
      "Posso usar comercialmente? Apenas com autorização prévia.",
      "Os dados vão para fora do Brasil? Sim, principalmente EUA (OpenAI, WhatsApp).",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.2),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.18),_transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-slate-100 sm:px-6">
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2 text-sm text-slate-200 hover:text-primary">
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>

        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
            Termos de Serviço
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Termos de Serviço – Resenhai
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Última atualização: 10 de outubro de 2025 • Versão 1.0
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.title} className="border border-white/10 bg-white/5 shadow-xl shadow-black/50 backdrop-blur-lg">
              <CardContent className="space-y-5 p-8">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>

                {section.intro?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-slate-200">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-200">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((subsection) => (
                  <div key={subsection.subtitle} className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {subsection.subtitle}
                    </h3>
                    {subsection.description?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-relaxed text-slate-200"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {subsection.bullets && (
                      <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-200">
                        {subsection.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
