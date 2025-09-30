import Image from "next/image"

const testimonials = [
  {
    name: "Juliana R.",
    role: "universitária",
    quote:
      "Nunca consegui manter uma rotina de estudos e treinos. A Foquinha me ajuda a organizar tudo sem pressão. Finalmente me sinto no controle!",
    image: "https://i.ibb.co/wF2zkBZt/julia-psicologa.webp",
  },
  {
    name: "Gabriela M.",
    role: "influencer",
    quote:
      "Com a correria das redes sociais, eu vivia desorganizada. A Foquinha me mantém focada e produtiva direto pelo WhatsApp. Amei demais!",
    image: "https://i.ibb.co/b5nSxRWm/mariana-designer.webp",
  },
  {
    name: "João S.",
    role: "empreendedor",
    quote: "Testei vários apps de produtividade e nada funcionava. A Foquinha é simples e funciona de verdade. Melhor investimento que fiz!",
    image: "https://i.ibb.co/spy6CscW/Luan-estudante.webp",
  },
] as const

export function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            São +2.347 pessoas se organizando diariamente com a Foquinha
          </p>
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-5 py-2">
              <span className="text-sm font-semibold text-secondary">
                Depoimentos de Usuários
              </span>
            </div>
          </div>
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
                "{testimonial.quote}"
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
  )
}
