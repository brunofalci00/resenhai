import { AlertCircle, CheckCircle2, Clock, Repeat, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const objections = [
  {
    icon: Clock,
    objection: "\"Não tenho tempo pra mais uma coisa\"",
    response: "A Foquinha economiza seu tempo. 2 minutos de conversa no WhatsApp te poupa horas de planejamento. Ela organiza tudo pra você.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Repeat,
    objection: "\"Já tentei de tudo e nunca funciona\"",
    response: "Porque você tentou sozinho. A Foquinha te lembra, reorganiza quando você falha e adapta ao seu ritmo. 80% mantêm a rotina após 30 dias.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: AlertCircle,
    objection: "\"E se eu esquecer de usar?\"",
    response: "Ela não esquece de você! A Foquinha manda lembretes nos horários que você definir. Ela puxa conversa e te mantém no caminho.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Zap,
    objection: "\"Parece complicado demais\"",
    response: "É literalmente só mandar \"Oi\" no WhatsApp. Se você consegue pedir comida no iFood, consegue usar a Foquinha. Sem app novo, sem aprender nada.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Shield,
    objection: "\"E se não funcionar pra mim?\"",
    response: "Você tem 7 dias pra testar sem compromisso. Se não gostar, devolve 100% do dinheiro. Sem perguntas, sem burocracia.",
    color: "bg-red-500/10 text-red-600",
  },
]

export function ObjectionsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Você pode estar pensando...
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            E a gente entende. Veja como a Foquinha resolve isso:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {objections.map((item, index) => (
            <Card
              key={index}
              className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
            >
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start gap-3">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${item.color}`}>
                    <item.icon className="size-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-tight text-white">
                      {item.objection}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.response}
                </p>

                <div className="mt-auto flex items-center gap-2 text-secondary">
                  <CheckCircle2 className="size-4" />
                  <span className="text-xs font-medium">Problema resolvido</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
