import { readFileSync } from "fs"
import path from "path"

import { QuizClient } from "./quiz-client"

const htmlFilePath = path.join(process.cwd(), "lp-v2.html")
const rawHtml = readFileSync(htmlFilePath, "utf8")

export default function Page() {
  return <QuizClient rawHtml={rawHtml} />
}
