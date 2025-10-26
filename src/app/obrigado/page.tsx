import { readFileSync } from "fs"
import path from "path"
import type { Metadata } from "next"

import { QuizClient } from "../quiz-client"

const htmlFilePath = path.join(process.cwd(), "obrigado.html")
const rawHtml = readFileSync(htmlFilePath, "utf8")

export const metadata: Metadata = {
  title: "Compra Confirmada | Frases Discretas",
  description: "Pedido aprovado. Veja as proximas instrucoes para acessar as Frases Discretas.",
}

export default function ObrigadoPage() {
  return <QuizClient rawHtml={rawHtml} />
}
