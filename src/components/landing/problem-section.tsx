import { SectionTracker } from "@/components/analytics/section-tracker"
import { Card, CardContent } from "@/components/ui/card"
import { Ban, Laugh, MessageSquareOff } from "lucide-react"

const painPoints = [
  {
    icon: Laugh,
    title: "Print no grupo das amigas",
    description:
      "Seu textão foi parar nos stories com “socorro 😂”. Você só percebe quando o visto não vira resposta.",
  },
  {
    icon: MessageSquareOff,
    title: "Vácuo eterno",
    description:
      "Cada tentativa cria outro silêncio e a autoestima vai junto. Parece que nada funciona.",
  },
  {
    icon: Ban,
    title: "Palpite errado",
    description:
      "YouTube lotado de coach 2015 dizendo para ser “alfa”. Você tenta, só piora o clima.",
  },
]

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-gradient-to-b from-slate-50 via-white to-white px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Ela printou. Não foi para elogiar.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              Mensagem caprichada? Virou meme. Cantada que parecia boa? Virou
              exemplo do que não fazer. E enquanto você espera resposta, ela
              está ensinando para as amigas onde você errou.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {painPoints.map((item) => (
              <Card key={item.title} className="h-full border border-slate-200 shadow-sm">
                <CardContent className="flex h-full flex-col items-center gap-4 p-6 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 shadow-lg">
            <CardContent className="space-y-3 p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-slate-900">
                A real? Ninguém nasce sabendo conversar com mina.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Escola não ensina, seu pai não ensinou e o YouTube só entrega
                maluquice. Cada tentativa sem direção vira mais um vácuo, mais
                um print, mais um “depois vejo”. Resenhai existe para parar essa
                espiral.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SectionTracker>
  )
}
