import { SectionTracker } from "@/components/analytics/section-tracker"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Pedro, 24",
    label: "voltou a receber resposta",
    quote:
      "“Eu era o cara do textão dramático. Mandei o primeiro print pro Resenhai e já veio uma resposta curtinha que ela replicou na hora. A sensação de não tomar vácuo é surreal.”",
    initials: "P",
  },
  {
    name: "Rafa, 27",
    label: "agora marca encontro",
    quote:
      "“Fiquei semanas forçando assunto. O Resenhai me mostrou como transformar o papo em convite sem parecer desesperado. No mesmo dia ela topou sair.”",
    initials: "R",
  },
  {
    name: "Leo, 21",
    label: "aprendeu a jogar leve",
    quote:
      "“Eu inventava frase pronta de fórum e só virava piada. Agora eu mando os prints, entendo o motivo das respostas e não fico mais travado no celular.”",
    initials: "L",
  },
] as const

export function TestimonialsSection() {
  return (
    <SectionTracker sectionId="testimonials">
      <section id="testimonials" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              História real de quem parou de virar meme
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Depoimentos anônimos (claro) de assinantes que só queriam conversar
              melhor. O foco não é virar conquistador de filme — é deixar de fazer
              feio.
            </p>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12 bg-primary/10 text-primary">
                      <AvatarFallback className="font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-secondary">
                        {testimonial.label}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-slate-700">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
