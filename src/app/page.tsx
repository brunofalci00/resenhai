import { readFileSync } from "fs"
import path from "path"

import { QuizClient } from "./quiz-client"

const htmlFilePath = path.join(process.cwd(), "LP_Mago_Quizz.html")
const rawHtml = readFileSync(htmlFilePath, "utf8")

const styleMatch = rawHtml.match(/<style>([\s\S]*?)<\/style>/)
const scriptMatch = rawHtml.match(/<script>([\s\S]*?)<\/script>/)
const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/)

const styleContent = styleMatch?.[1] ?? ""
const scriptContent = scriptMatch?.[1] ?? ""
const bodyContent = bodyMatch?.[1] ?? ""

export default function Page() {
  return <QuizClient bodyContent={bodyContent} styleContent={styleContent} scriptContent={scriptContent} />
}

