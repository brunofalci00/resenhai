'use client'

import { useEffect, useRef } from "react"

type QuizClientProps = {
  rawHtml: string
}

export function QuizClient({ rawHtml }: QuizClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    const parser = new DOMParser()
    const parsedDocument = parser.parseFromString(rawHtml, "text/html")

    const appendedStyles: HTMLStyleElement[] = []
    const appendedLinks: HTMLLinkElement[] = []
    const appendedScripts: HTMLScriptElement[] = []

    const head = parsedDocument.head
    const body = parsedDocument.body

    if (body) {
      container.innerHTML = body.innerHTML
    }

    head?.querySelectorAll("style").forEach((styleNode, index) => {
      const content = styleNode.textContent
      if (!content) {
        return
      }
      const styleElement = document.createElement("style")
      styleElement.setAttribute("data-lp-style", `lp-mago-${index}`)
      styleElement.textContent = content
      document.head.appendChild(styleElement)
      appendedStyles.push(styleElement)
    })

    head?.querySelectorAll("link").forEach((linkNode, index) => {
      const rel = linkNode.getAttribute("rel")
      const href = linkNode.getAttribute("href")
      if (!rel || !href) {
        return
      }

      if (!["stylesheet", "preload", "prefetch", "preconnect"].includes(rel)) {
        return
      }

      const existingSelector = `link[rel="${rel}"][href="${href}"]`
      if (document.head.querySelector(existingSelector)) {
        return
      }

      const linkElement = document.createElement("link")
      Array.from(linkNode.attributes).forEach((attribute) => {
        if (attribute.value === "") {
          linkElement.setAttribute(attribute.name, "")
        } else {
          linkElement.setAttribute(attribute.name, attribute.value)
        }
      })
      linkElement.setAttribute("data-lp-link", `lp-mago-${index}`)
      document.head.appendChild(linkElement)
      appendedLinks.push(linkElement)
    })

    parsedDocument.querySelectorAll("script").forEach((scriptNode, index) => {
      const scriptElement = document.createElement("script")

      Array.from(scriptNode.attributes).forEach((attribute) => {
        if (attribute.value === "") {
          scriptElement.setAttribute(attribute.name, "")
        } else {
          scriptElement.setAttribute(attribute.name, attribute.value)
        }
      })

      const scriptContent = scriptNode.textContent?.trim()
      if (scriptContent) {
        scriptElement.textContent = scriptContent
      }

      scriptElement.setAttribute("data-lp-script", `lp-mago-${index}`)
      document.body.appendChild(scriptElement)
      appendedScripts.push(scriptElement)
    })

    return () => {
      container.innerHTML = ""
      appendedStyles.forEach((styleElement) => styleElement.remove())
      appendedLinks.forEach((linkElement) => linkElement.remove())
      appendedScripts.forEach((scriptElement) => scriptElement.remove())
    }
  }, [rawHtml])

  return <div ref={containerRef} />
}

