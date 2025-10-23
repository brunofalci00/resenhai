'use client'

import { useEffect, useRef } from "react"

type QuizClientProps = {
  bodyContent: string
  styleContent: string
  scriptContent: string
}

export function QuizClient({ bodyContent, styleContent, scriptContent }: QuizClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    container.innerHTML = bodyContent

    let styleElement: HTMLStyleElement | null = null
    if (styleContent) {
      const existingStyle = document.head.querySelector<HTMLStyleElement>('style[data-lp-style="lp-mago-quizz"]')
      existingStyle?.remove()

      styleElement = document.createElement("style")
      styleElement.setAttribute("data-lp-style", "lp-mago-quizz")
      styleElement.textContent = styleContent
      document.head.appendChild(styleElement)
    }

    if (scriptContent) {
      try {
        const scriptRunner = new Function(scriptContent)
        scriptRunner()
      } catch (error) {
        console.error("Erro ao executar o script da landing page:", error)
      }
    }

    return () => {
      if (container) {
        container.innerHTML = ""
      }
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [bodyContent, scriptContent, styleContent])

  return <div ref={containerRef} />
}
