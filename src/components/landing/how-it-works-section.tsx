import { Card, CardContent } from "@/components/ui/card"

const beforeAfter = [
  {
    beforeLabel: "Antes",
    beforeMessage: `Você: "e aí, sumiu hein 😅"\nEla: [visualizado há 3 dias]`,
    afterLabel: "Com Resenhai",
    afterMessage: `Você: "teu feed tá estranho sem você por aqui 🙃"\nEla: "aaaa para 😂 desculpa, tava sem tempo msm"`,
  },
  {
    beforeLabel: "Antes",
    beforeMessage: `Você: [áudio de 3 minutos abrindo o coração]\nEla: print + 47 risadas`,
    afterLabel: "Com Resenhai",
    afterMessage: `Você: "tô percebendo um padrão: toda vez que você some, meu dia fica torto"\nEla: "nossa, sério? 😳"`,
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            Antes vs. depois real
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Quando você sabe o que dizer, o jogo vira.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            Resenhai não promete transformar ninguém em galã de novela. O foco é
            simples: evitar vacilos, manter a conversa viva e entrar na lista
            dos caras que ela responde primeiro.
          </p>
        </div>

        <div className="space-y-6">
          {beforeAfter.map((item) => (
            <Card
              key={item.beforeMessage}
              className="border border-white/10 bg-white/5 backdrop-blur"
            >
              <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-300">
                    {item.beforeLabel}
                  </span>
                  <pre className="whitespace-pre-wrap font-sans leading-relaxed text-slate-100">
                    {item.beforeMessage}
                  </pre>
                </div>
                <div className="space-y-3 rounded-2xl border border-secondary/40 bg-secondary/10 p-4 text-left text-sm text-secondary-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {item.afterLabel}
                  </span>
                  <pre className="whitespace-pre-wrap font-sans leading-relaxed text-white">
                    {item.afterMessage}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
