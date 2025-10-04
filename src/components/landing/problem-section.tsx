import { X } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function ProblemSection() {
  return (
    <SectionTracker sectionId="problem">
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Por que se organizar é tão difícil?
          </h2>

          {/* Cards de problemas */}
          <div className="mx-auto mb-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex justify-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-red-50">
                  <X className="size-6 text-red-500" />
                </div>
              </div>
              <p className="text-base font-semibold text-slate-700">
                Metas ficam no papel
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex justify-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-red-50">
                  <X className="size-6 text-red-500" />
                </div>
              </div>
              <p className="text-base font-semibold text-slate-700">
                Planners abandonados
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex justify-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-red-50">
                  <X className="size-6 text-red-500" />
                </div>
              </div>
              <p className="text-base font-semibold text-slate-700">
                Apps não viram hábito
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 p-6 shadow-sm">
            <p className="text-lg font-bold text-slate-800">
              O resultado?
            </p>
            <p className="mt-2 text-base text-slate-700">
              Falta de tempo, atrasos e estresse diário.
            </p>
          </div>
        </div>
        </div>
      </section>
    </SectionTracker>
  )
}
