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
  title: "Política de Privacidade – Resenhai",
  description:
    "Saiba como o Resenhai coleta, armazena, utiliza e protege seus dados pessoais de acordo com a LGPD e demais normas brasileiras.",
}

const sections: Section[] = [
  {
    title: "1. Introdução",
    intro: [
      "O Resenhai é um assistente de inteligência artificial via WhatsApp voltado a auxiliar usuários a criar mensagens de conquista e flerte. A proteção da sua privacidade e dos seus dados pessoais é prioridade para nós.",
      "Esta Política descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018), o CDC (Lei nº 8.078/1990) e o Marco Civil da Internet (Lei nº 12.965/2014).",
    ],
  },
  {
    title: "2. Controlador de Dados",
    intro: [
      "Controlador: Trendly Corp (Resenhai).",
      "CNPJ: 59.393.438/0001-20.",
      "Endereço: Rua Tanhacu, 336, Jardim Panorama D'Oeste, São Paulo – SP, Brasil.",
      "Contato: suporte@trendlycorp.com.",
      "Encarregado de dados (DPO): suporte@trendlycorp.com.",
    ],
  },
  {
    title: "3. Informações sobre o Serviço",
    bullets: [
      "Plataforma: WhatsApp.",
      "Modelo de negócio: assinatura anual de R$ 67,90.",
      "Público-alvo: homens maiores de 18 anos residentes no Brasil.",
      "Idioma: português (Brasil).",
      "Idade mínima: uso estritamente proibido para menores de 18 anos.",
    ],
  },
  {
    title: "4. Dados Pessoais Coletados",
    subsections: [
      {
        subtitle: "Dados coletados automaticamente",
        bullets: [
          "Número de telefone, nome e foto de perfil do WhatsApp.",
          "Mensagens e prints enviados.",
          "Data, hora das interações e tipo de dispositivo.",
          "Endereço IP, geolocalização aproximada (país/cidade) e idioma.",
        ],
        description: [
          "O Resenhai não acessa sua câmera, galeria ou lista de contatos sem que você envie conteúdo voluntariamente.",
        ],
      },
      {
        subtitle: "Dados fornecidos voluntariamente",
        bullets: [
          "Nome da pessoa de interesse e contexto do relacionamento.",
          "Objetivo da interação (ex.: marcar encontro).",
          "Histórico de conversas e prints.",
          "Feedback sobre sugestões.",
          "Dados de pagamento (processados pela Hubla).",
        ],
      },
      {
        subtitle: "Dados sensíveis",
        description: [
          "Podemos tratar dados sobre vida sexual e relacionamento. O tratamento ocorre mediante consentimento explícito, conforme Art. 11, I da LGPD.",
        ],
      },
      {
        subtitle: "Dados de terceiros",
        description: [
          "Você pode fornecer dados de outras pessoas ao enviar prints ou contexto. Utilize o serviço apenas com autorização e evite dados identificáveis. O Resenhai anonimiza informações sempre que possível, mas você é responsável pelo compartilhamento.",
        ],
      },
    ],
  },
  {
    title: "5. Finalidades do Tratamento",
    bullets: [
      "Gerar sugestões personalizadas via IA com base no contexto fornecido.",
      "Aprimorar o Serviço, treinar modelos e desenvolver novas funcionalidades.",
      "Prevenir fraudes, monitorar uso abusivo e garantir segurança.",
      "Atender obrigações legais, regulatórias e fiscais.",
      "Responder solicitações e oferecer suporte.",
    ],
  },
  {
    title: "6. Bases Legais",
    bullets: [
      "Consentimento (Art. 7º, I da LGPD).",
      "Execução do contrato (Art. 7º, V).",
      "Cumprimento de obrigação legal (Art. 7º, II).",
      "Legítimo interesse para melhoria e segurança (Art. 7º, IX).",
      "Proteção ao crédito quando necessário (Art. 7º, X).",
    ],
  },
  {
    title: "7. Compartilhamento de Dados",
    intro: [
      "Compartilhamos dados apenas quando necessário para operar o Serviço ou cumprir obrigações legais.",
    ],
    bullets: [
      "WhatsApp (Meta): transmissão das mensagens.",
      "OpenAI (EUA): geração das sugestões via IA.",
      "Supabase: armazenamento seguro de dados.",
      "Hubla (ou Kiwify): processamento de pagamentos.",
      "PostHog: métricas e analytics.",
      "Provedores de e-mail e suporte.",
      "Autoridades judiciais ou administrativas mediante ordem legal.",
    ],
  },
  {
    title: "8. Transferência Internacional",
    intro: [
      "Os dados podem ser transferidos para os Estados Unidos em razão do uso de OpenAI, WhatsApp, Supabase e PostHog.",
      "Adotamos cláusulas contratuais padrão, medidas técnicas de segurança e avaliamos provedores com políticas compatíveis à LGPD.",
    ],
  },
  {
    title: "9. Armazenamento e Segurança",
    bullets: [
      "Hospedagem em nuvem com criptografia em trânsito e em repouso.",
      "Controles de acesso baseados em função e autenticação de dois fatores.",
      "Monitoramento 24/7, firewall, auditorias e testes de segurança.",
      "Registro de logs e planos de resposta a incidentes.",
      "Segregação de ambientes (produção, testes, desenvolvimento).",
    ],
  },
  {
    title: "10. Retenção e Eliminação de Dados",
    intro: [
      "Mantemos dados enquanto a conta estiver ativa e pelo tempo necessário para cumprir obrigações legais e fiscais (mínimo de 5 anos).",
      "Você pode solicitar exclusão via suporte@trendlycorp.com. A exclusão pode ser diferida quando houver obrigação legal de retenção.",
    ],
  },
  {
    title: "11. Direitos do Titular",
    bullets: [
      "Confirmação da existência de tratamento.",
      "Acesso e correção de dados incompletos.",
      "Anonimização, bloqueio ou eliminação de dados desnecessários.",
      "Portabilidade, mediante regulamentação da ANPD.",
      "Eliminação dos dados tratados com consentimento.",
      "Informação sobre compartilhamento e possibilidade de revogar consentimento.",
      "Oposição a tratamento irregular.",
    ],
    intro: [
      "Solicitações podem ser feitas pelo e-mail suporte@trendlycorp.com. Responderemos em até 15 dias. Para segurança, podemos solicitar comprovação de identidade.",
    ],
  },
  {
    title: "12. Menores de Idade",
    intro: [
      "O Resenhai não atende menores. Contas identificadas como de menores terão uso bloqueado e dados excluídos.",
    ],
  },
  {
    title: "13. Dados de Terceiros",
    intro: [
      "Evite enviar dados identificáveis de terceiros sem autorização. Quando necessário, anonimizar nomes e detalhes sensíveis.",
    ],
  },
  {
    title: "14. Cookies e Tecnologias Similares",
    intro: [
      "Não usamos cookies diretamente porque o Serviço opera no WhatsApp. O site institucional utiliza cookies essenciais e analíticos, tratados com base no legítimo interesse ou consentimento.",
    ],
  },
  {
    title: "15. Comunicação de Incidentes",
    intro: [
      "Em caso de incidente de segurança notificaremos prontamente os titulares afetados e a ANPD, indicando riscos e medidas adotadas.",
      "Política de resposta inclui contenção, investigação, mitigação e comunicação transparente.",
    ],
  },
  {
    title: "16. Políticas Contra Uso Indevido",
    bullets: [
      "Proibição de assédio, discriminação, spam ou qualquer uso abusivo.",
      "Canal de denúncia: suporte@trendlycorp.com.",
      "Cooperação com autoridades mediante ordem judicial.",
    ],
  },
  {
    title: "17. Atualizações da Política",
    intro: [
      "Esta Política pode ser alterada. Notificaremos mudanças significativas por e-mail. A data da última atualização é indicada no topo do documento.",
      "Caso não concorde com as alterações, solicite cancelamento e exclusão dos dados.",
    ],
  },
  {
    title: "18. Contato",
    intro: [
      "E-mail: suporte@trendlycorp.com",
      "Website: https://resenhai.life",
      "Endereço: Rua Tanhacu, 336, Jardim Panorama D'Oeste, São Paulo – SP",
      "Prazo de resposta: até 15 dias úteis.",
    ],
  },
  {
    title: "19. Consentimento",
    bullets: [
      "Você declara ter lido e compreendido esta Política.",
      "Consente com o tratamento de dados pessoais e sensíveis para as finalidades descritas.",
      "Consente com a transferência internacional para os Estados Unidos.",
      "Afirmar ter 18 anos ou mais e ser responsável por dados de terceiros enviados.",
    ],
  },
  {
    title: "Versão Resumida (FAQ)",
    bullets: [
      "Quais dados coletamos? Número de telefone, mensagens, prints e informações de pagamento.",
      "Para que usamos? Para gerar sugestões personalizadas e melhorar o serviço.",
      "Compartilhamos dados? Sim, com provedores como OpenAI, WhatsApp, Supabase, Hubla e PostHog.",
      "Há transferência internacional? Sim, para os EUA com salvaguardas adequadas.",
      "Por quanto tempo guardamos? Enquanto a conta estiver ativa e pelo tempo exigido por lei.",
      "Como excluir dados? Solicite pelo e-mail suporte@trendlycorp.com.",
      "Menores podem usar? Não.",
      "Enviamos marketing? Não enviamos mensagens promocionais não solicitadas.",
      "Como protegemos? Criptografia, controles de acesso, monitoramento e auditorias.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-slate-800 sm:px-6">
        <div className="mb-6">
          <Button variant="ghost" asChild className="gap-2 text-sm text-slate-600 hover:text-primary">
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>

        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Política de Privacidade
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Política de Privacidade – Resenhai
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Última atualização: 10 de outubro de 2025 • Versão 1.0
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.title} className="border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>

                {section.intro?.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
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
                        className="text-sm leading-relaxed text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {subsection.bullets && (
                      <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700">
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
