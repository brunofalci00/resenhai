import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso – Resenhai",
  description:
    "Entenda como o Resenhai funciona, quais são as responsabilidades do serviço e como tratamos seus dados ao oferecer respostas personalizadas para suas conversas.",
}

export default function TermsPage() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-left text-slate-800">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
          <header className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Termos de Uso – Resenhai
            </h1>
            <p className="text-sm text-muted-foreground">
              Última atualização: 10 de outubro de 2025
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">1. Quem somos</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              O Resenhai é um serviço operado por Bruno Giorgio Kahn Falci (CNPJ
              59.393.438/0001-20), com sede na Rua Tanhacu, 226, Jardim Panorama,
              São Paulo – SP. Para contato e suporte utilize o e-mail
              contato@resenhai.com.br.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">2. O que oferecemos</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • Sugestões de mensagens, respostas e abordagens para conversas via
                WhatsApp, com base nos prints e contextos enviados por você.
              </li>
              <li>
                • Orientações de comunicação em tempo real, disponíveis 7 dias por
                semana, durante o período da assinatura.
              </li>
              <li>
                • Explicações resumidas sobre o motivo de cada sugestão, para que
                você aprenda no processo.
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              O Resenhai não garante resultados específicos, não cria sentimentos
              onde não existe interesse e não substitui aconselhamento profissional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">3. Planos, pagamento e cancelamento</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • O pagamento é processado pela Kiwify. Após a confirmação, você
                recebe o número oficial do WhatsApp do Resenhai.
              </li>
              <li>
                • Disponibilizamos 7 dias de teste. Durante esse período você pode
                cancelar diretamente pelo WhatsApp ou painel da Kiwify e receber
                reembolso integral.
              </li>
              <li>
                • Após o teste, a assinatura renova automaticamente na periodicidade
                escolhida. Você pode cancelar quando quiser antes da próxima
                cobrança.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">4. Uso responsável</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • Utilize o serviço apenas com contatos que consentem em conversar
                com você. Não enviamos mensagens em seu nome.
              </li>
              <li>
                • É proibido enviar conteúdo ilegal, preconceituoso, ofensivo ou
                que viole direitos de terceiros.
              </li>
              <li>
                • Podemos encerrar o acesso, sem reembolso, em caso de uso indevido
                ou violação destes termos.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">5. Privacidade e dados</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • As conversas são realizadas exclusivamente via WhatsApp. Os prints
                e mensagens enviados permanecem sob sua responsabilidade.
              </li>
              <li>
                • Utilizamos os dados apenas para entregar as respostas solicitadas,
                melhorar o serviço e cumprir obrigações legais.
              </li>
              <li>
                • Não compartilhamos ou vendemos suas conversas. Ao cancelar a
                assinatura, você pode solicitar a exclusão do histórico armazenado.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">6. Limitação de responsabilidade</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              O Resenhai fornece sugestões de mensagens baseadas em boas práticas de
              comunicação. A decisão final de envio é sempre sua. Não nos
              responsabilizamos por interpretações, consequências emocionais ou
              materiais decorrentes do uso das sugestões.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Alterações nestes termos
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Podemos atualizar estes termos a qualquer momento. As versões vigentes
              serão informadas neste endereço e, quando relevante, notificaremos os
              assinantes ativos por e-mail ou WhatsApp.
            </p>
          </section>

          <section className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-slate-900">Dúvidas?</p>
            <p>Envie um e-mail para contato@resenhai.com.br ou mande “suporte” no nosso WhatsApp.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
