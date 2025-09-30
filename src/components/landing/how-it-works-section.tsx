export function HowItWorksSection() {
  return (
    <section className="bg-[#E8F5E3] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Introdução */}
        <div className="mb-16 text-center">
          <p className="mb-6 text-base text-slate-700">
            Chegou a Foquinha — a IA feita pra gente como a gente.
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Como funciona?
          </h2>

          <p className="text-lg text-slate-700">
            É tão fácil que até a <span className="font-bold">Tia do Zap</span> usa pra se organizar. 📱
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-slate-900 text-white">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
              Garanta seu acesso
            </h3>
            <p className="mb-6 text-center text-base text-slate-700">
              Você vai receber um link direto pro WhatsApp. É só clicar e começar.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-slate-900 text-white">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
              Mande um &quot;oi&quot;
            </h3>
            <p className="mb-6 text-center text-base text-slate-700">
              A Foquinha te dá as boas-vindas e já pergunta como você quer organizar sua rotina — fácil e rápido.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-slate-900 text-white">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
              Pronto!
            </h3>
            <h4 className="mb-3 text-center text-lg font-bold text-slate-800">
              Rotinas, lembretes e relatórios direto no seu zap
            </h4>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                <span className="text-lg">❌</span>
                Nada de planilhas. Nada de apps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
