import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const testimonials = [
  {
    name: "Juliana R.",
    role: "23 anos",
    quote:
      "Comecei a academia 5 vezes e sempre desisti. A Foquinha me ajudou a manter a rotina de treino e alimentação. Já perdi 8kg e não pretendo parar.",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "João S.",
    role: "19 anos",
    quote: "Eu queria estudar pra concurso mas nunca conseguia ser disciplinado. Com a Foquinha, criei rotina de estudos e finalmente estou vendo progresso.",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
  {
    name: "Gabriela M.",
    role: "29 anos",
    quote:
      "Depois da gravidez, não conseguia tempo pra nada. A Foquinha me ajudou a organizar minha rotina com a bebê e ainda sobra tempo pra mim.",
    image: "https://i.ibb.co/b5nSxRWm/mariana-designer.webp",
  },
] as const

export function TestimonialsSection() {
  return (
    <SectionTracker sectionId="testimonials">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Elas também achavam que não iam conseguir.
            Hoje, são outras pessoas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            E você pode ser a próxima.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-base leading-relaxed text-slate-700">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </SectionTracker>
  )
}
