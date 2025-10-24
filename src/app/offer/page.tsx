import { readFileSync } from "fs"
import path from "path"
import type { Metadata } from "next"

import { QuizClient } from "../quiz-client"

const htmlFilePath = path.join(process.cwd(), "offer.html")
const rawHtml = readFileSync(htmlFilePath, "utf8")

export const metadata: Metadata = {
  title: "Frases Discretas | Oferta Oficial",
  description: "Envie as frases discretas para ela e faça com que ela fique obcecada por você sem joguinhos ou humilhação.",
}

export default function OfferPage() {
  return <QuizClient rawHtml={rawHtml} />
}
