'use client'

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import posthog from "posthog-js"
import useEmblaCarousel from "embla-carousel-react"

const CHECKOUT_URL = "https://pay.hub.la/IpQ0Q6aIfeXfSVNqrl5z"

const cardImages = [
  { src: "https://i.ibb.co/FkW4xvMj/card1.png", alt: "Mensagem desesperada 1" },
  { src: "https://i.ibb.co/HLkR4KSn/card2.png", alt: "Mensagem desesperada 2" },
  { src: "https://i.ibb.co/zV1HQNGC/card3.png", alt: "Mensagem desesperada 3" },
] as const

const mockupImages = [
  { src: "https://i.ibb.co/8LGs8Zns/Telas-Foquinha-3.png", alt: "Exemplo de conversa com O Mago da Sedução 1" },
  { src: "https://i.ibb.co/pv35FQCr/Telas-Foquinha-1.png", alt: "Exemplo de conversa com O Mago da Sedução 2" },
] as const

const solutionHighlights = [
  {
    icon: "🔥",
    strong: "Gatilhos de validação e dúvida.",
    text: "Frases que confundem e excitam.",
  },
  {
    icon: "🧠",
    strong: "Técnicas de escassez emocional + ego invertido.",
    text: "Você faz ela pensar em você.",
  },
  {
    icon: "⚡",
    strong: "Você vira o único homem que ela NÃO entende",
    text: "— e por isso, quer entender.",
  },
] as const

const steps = [
  {
    number: "1",
    title: "Você paga",
    description: "Acesso imediato ao número secreto do Mago da Sedução™",
  },
  {
    number: "2",
    title: "Recebe o número secreto",
    description: "Seu canal direto com o estrategista de conversas",
  },
  {
    number: "3",
    title: "Manda print",
    description: "Envia a conversa que você quer virar",
  },
  {
    number: "4",
    title: "Recebe a resposta",
    description: "Frase perfeita para implantar dúvida + desejo",
  },
] as const

const testimonials = [
  {
    name: "Rafael M.",
    text: "“Cara, eu não acreditei quando ela respondeu em 5 minutos. A frase que o Mago mandou foi CIRÚRGICA. Ela que chamou pra sair.”",
    image: "https://i.ibb.co/ymtr2dXj/1f06a26647d98a81a249484eedcd6fa1.jpg",
  },
  {
    name: "Lucas T.",
    text: "“Finalmente entendi como funciona a cabeça delas. Agora eu controlo a conversa. Nunca mais fiquei no vácuo.”",
    image: "https://i.ibb.co/JwQ9zZ3s/download-47.jpg",
  },
  {
    name: "André S.",
    text: "“Testei com 3 minas diferentes. Funcionou com TODAS. O segredo não é o que você fala, é COMO você fala.”",
    image: "https://i.ibb.co/hFkKc841/foto.jpg",
  },
  {
    name: "Matheus L.",
    text: "“Eu era o cara que sempre era visto como 'amigo'. Hoje eu sou o cara que elas QUEREM. Mudou tudo.”",
    image: "https://i.ibb.co/yB6xrVB4/e8e251451aa910fad4fc169d15a5b2e2.jpg",
  },
] as const

const bonuses = [
  {
    title: "Guia dos 10 Gatilhos Mentais",
    description: "Os 10 gatilhos psicológicos que fazem qualquer mulher responder. Aplicável em qualquer situação.",
    value: "Valor: R$97",
    image: "https://i.ibb.co/5gGyXnh6/Chat-GPT-Image-14-de-out-de-2025-16-37-25.png",
  },
  {
    title: "50 Frases Prontas",
    description:
      "Biblioteca com 50 frases testadas e aprovadas para diferentes contextos: primeira mensagem, reaproximação, virada de jogo.",
    value: "Valor: R$147",
    image: "https://i.ibb.co/nNmtmjTD/50-frases.png",
  },
  {
    title: "Masterclass: Psicologia da Atração",
    description: "Aula completa sobre como funciona a atração feminina e por que alguns homens sempre vencem.",
    value: "Valor: R$197",
    image: "https://i.ibb.co/kg0Mfpgj/masterclass.png",
  },
] as const

const faqItems = [
  {
    question: "Como funciona exatamente?",
    answer:
      "Você recebe um número de WhatsApp exclusivo. Quando precisar de ajuda em uma conversa, manda o print. O Mago analisa e te envia a resposta perfeita para você enviar. Simples e direto.",
  },
  {
    question: "Funciona mesmo?",
    answer:
      "Sim. As estratégias são baseadas em psicologia comportamental e gatilhos mentais comprovados. Centenas de homens já usaram e tiveram resultados. Por isso oferecemos 7 dias de garantia.",
  },
  {
    question: "Quanto tempo demora para receber a resposta?",
    answer:
      "Geralmente entre 5 a 15 minutos. Em horários de pico pode levar até 30 minutos. Mas sempre dentro do contexto da conversa.",
  },
  {
    question: "Posso usar quantas vezes quiser?",
    answer: "Sim. Durante o período de acesso, você pode enviar quantos prints precisar. Sem limites.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se não funcionar pra você, é só pedir o reembolso. Sem perguntas, sem burocracia.",
  },
  {
    question: "É seguro? Minha privacidade está protegida?",
    answer:
      "Totalmente. Todas as conversas são confidenciais. Nenhuma informação é compartilhada ou armazenada além do necessário para te ajudar.",
  },
] as const

const finalOptions = [
  {
    number: "1",
    text: 'Continuar criando mensagens do zero, gastando horas, travando, publicando "qualquer coisa"...',
    variant: "wrong",
  },
  {
    number: "2",
    text: "Ter um estrategista criando PRA você, em minutos, com técnicas comprovadas e resultados reais.",
    variant: "right",
  },
] as const

const CTA_TEXTS = {
  hero: "QUERO VIRAR O JOGO",
  valueBox: "GARANTIR ACESSO AGORA",
  final: "QUERO USAR O MAGO DA SEDUÇÃO™ AGORA",
} as const

const valueSummary = {
  productLabel: "Valor do Produto:",
  productValue: "R$297",
  bonusesLabel: "Valor Total dos Bônus:",
  bonusesValue: "R$441",
  totalLabel: "Valor Total Normal:",
  totalValue: "R$738",
  highlight: "🔥 VOCÊ PAGA APENAS 🔥",
  price: "R$47,90",
  bonusText: "E leva mais de R$441 em bônus grátis!",
  guarantee: "🛡️ 7 dias de garantia total | Acesso imediato",
}

type CtaLocation = "hero_section" | "value_box" | "final_cta"

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [selectedSlide, setSelectedSlide] = useState(0)

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const updateSelected = () => {
      setSelectedSlide(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", updateSelected)
    emblaApi.on("reInit", updateSelected)
    updateSelected()

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)

    return () => {
      if (typeof emblaApi.off === "function") {
        emblaApi.off("select", updateSelected)
        emblaApi.off("reInit", updateSelected)
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [emblaApi])

  useEffect(() => {
    if (typeof window === "undefined") return

    posthog?.capture("page_view", { page: "landing_page_mago_da_seducao" })

    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>(".lp-final [data-animate]"))
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )
    animatedElements.forEach((el) => animateObserver.observe(el))

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".lp-final [data-section]"))
    const viewedSections = new Set<string>()
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const sectionName = entry.target.getAttribute("data-section")
          if (sectionName && !viewedSections.has(sectionName)) {
            viewedSections.add(sectionName)
            posthog?.capture("section_viewed", { section_name: sectionName })
          }
        })
      },
      { threshold: 0.5 },
    )
    sections.forEach((section) => sectionObserver.observe(section))

    const milestones = new Set<number>()
    const milestoneValues = [25, 50, 75, 100]
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (docHeight <= 0) return
      const depth = Math.round((scrollTop / docHeight) * 100)
      milestoneValues.forEach((milestone) => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone)
          posthog?.capture("scroll_depth", { depth: `${milestone}%` })
        }
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    const startTime = Date.now()
    let timeReported = false
    const reportTime = () => {
      if (timeReported) return
      timeReported = true
      const seconds = Math.round((Date.now() - startTime) / 1000)
      posthog?.capture("time_on_page", { seconds })
    }

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        reportTime()
      }
    }

    window.addEventListener("beforeunload", reportTime)
    window.addEventListener("pagehide", reportTime)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      animateObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("beforeunload", reportTime)
      window.removeEventListener("pagehide", reportTime)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  const handleFaqToggle = (question: string, index: number) => {
    setActiveFaq((current) => (current === question ? null : question))
    posthog?.capture("faq_clicked", {
      question,
      question_index: index + 1,
    })
  }

  const handleCtaClick = (location: CtaLocation, buttonText: string) => {
    posthog?.capture("cta_button_clicked", {
      button_text: buttonText,
      button_location: location,
    })
  }

  return (
    <div className="lp-final">
      <div className="countdown-bar">
        ⏰ OFERTA POR TEMPO LIMITADO <span>| 7 DIAS DE GARANTIA TOTAL</span>
      </div>

      <div className="logo-container">
        <img src="https://i.ibb.co/ZzHT8GC9/logo-mago.png" alt="O Mago da Sedução" loading="lazy" />
      </div>

      <section className="hero" data-section="hero" data-animate>
        <div className="container">
          <span className="hero-emoji" aria-hidden="true">
            😳
          </span>
          <h1>
            ELA NÃO TE <span>RESPONDEU</span>
          </h1>
          <p className="subheadline">Mas printou. Mandou no grupo. Soltou um &quot;socorro HAHAHAHA&quot;.</p>
          <p className="tagline">Riu. Fez as amigas rirem. Te expôs. E você? Ficou lá… esperando. Como sempre.</p>
          <a
            href={CHECKOUT_URL}
            className="cta-button"
            onClick={() => handleCtaClick("hero_section", CTA_TEXTS.hero)}
          >
            <span>{CTA_TEXTS.hero}</span>
          </a>
        </div>
      </section>

      <section className="content-section" data-animate>
        <div className="section-content">
          <div className="section-image">
            <div className="stacked-cards">
              {cardImages.map((card) => (
                <div className="card-stack" key={card.src}>
                  <img src={card.src} alt={card.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="section-text">
            <h2>
              VOCÊ JÁ <span>SENTIU ISSO...</span>
            </h2>
            <p>Tu pensa, repensa, escreve e apaga. Acha que tá mandando bem...</p>
            <p>Ela vê, te ignora, e ainda usa como piada pros outros.</p>
            <p>
              A dor? Não é só rejeição. <strong>É humilhação.</strong>
            </p>
            <p>
              É o cérebro dela dizendo: <em>&quot;Esse aqui é fraco.&quot;</em>
            </p>
            <p>E no fundo você sente. Sente que perdeu o controle.</p>
          </div>
        </div>
      </section>

      <section className="content-section" data-animate>
        <div className="container">
          <div
            className="section-text"
            style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 60px" }}
          >
            <h2>
              MAS E SE VOCÊ TIVESSE O <span>CONTROLE?</span>
            </h2>
            <h3 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px", color: "var(--accent)" }}>
              🧙‍♂️ O MAGO DA SEDUÇÃO™
            </h3>
            <p>Um estrategista. Um manipulador emocional.</p>
            <p>Um ghostwriter do desejo — direto no seu WhatsApp.</p>
          </div>

          <div className="mockup-images-grid">
            {mockupImages.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>

          <div
            className="section-text"
            style={{ textAlign: "center", maxWidth: "900px", margin: "60px auto 0" }}
          >
            <ul style={{ textAlign: "left" }}>
              {solutionHighlights.map((highlight) => (
                <li key={highlight.strong}>
                  <i aria-hidden="true">{highlight.icon}</i>
                  <span>
                    <strong>{highlight.strong}</strong> {highlight.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: "var(--bg-primary)" }} data-animate>
        <div className="container">
          <div
            className="section-text"
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}
          >
            <h2>
              COMO <span>FUNCIONA:</span>
            </h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" data-animate key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section" data-section="testimonials">
        <div className="container">
          <h2>O QUE OS HOMENS ESTÃO DIZENDO</h2>
          <div className="swiper testimonialsSwiper">
            <div className="swiper-viewport" ref={emblaRef}>
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <div className="swiper-slide" data-animate key={testimonial.name}>
                    <div className="testimonial-card">
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">
                          <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                        </div>
                        <div className="testimonial-info">
                          <h4>{testimonial.name}</h4>
                          <div className="stars" aria-hidden="true">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-text">{testimonial.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`swiper-pagination-bullet${selectedSlide === index ? " swiper-pagination-bullet-active" : ""}`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bonus-section" data-section="bonus">
        <div className="container">
          <h2>
            3 SUPER <span>BÔNUS EXCLUSIVOS</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "var(--accent)",
              marginBottom: "20px",
            }}
          >
            🎁 TOTALMENTE GRÁTIS 🎁
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginBottom: "60px",
              color: "var(--text-secondary)",
            }}
          >
            Ao garantir seu acesso hoje, você leva TODOS esses bônus sem pagar nada a mais!
          </p>
          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <div className="bonus-card" data-animate key={bonus.title}>
                <div className="bonus-image">
                  <img src={bonus.image} alt={bonus.title} loading="lazy" />
                </div>
                <h3>{bonus.title}</h3>
                <p>{bonus.description}</p>
                <div className="bonus-value">{bonus.value}</div>
              </div>
            ))}
          </div>

          <div className="value-summary-box" data-animate>
            <p className="value-label">{valueSummary.productLabel}</p>
            <p className="value-striked">{valueSummary.productValue}</p>

            <p className="value-label" style={{ marginTop: "30px" }}>
              {valueSummary.bonusesLabel}
            </p>
            <p className="value-striked">{valueSummary.bonusesValue}</p>

            <div className="value-divider" />

            <p className="value-total-label">{valueSummary.totalLabel}</p>
            <p className="value-total-striked">{valueSummary.totalValue}</p>

            <p className="value-fire-text">{valueSummary.highlight}</p>
            <p className="value-price">{valueSummary.price}</p>
            <p className="value-bonus-text">
              E LEVA MAIS DE <span className="value-bonus-highlight">R$441 EM BÔNUS GRÁTIS!</span>
            </p>

            <a
              href={CHECKOUT_URL}
              className="cta-button"
              style={{ fontSize: "20px", padding: "22px 50px", display: "inline-block", margin: "0 auto" }}
              onClick={() => handleCtaClick("value_box", CTA_TEXTS.valueBox)}
            >
              <span>{CTA_TEXTS.valueBox}</span>
            </a>

            <p className="value-guarantee">{valueSummary.guarantee}</p>
          </div>
        </div>
      </section>

      <section className="guarantee-section" data-section="guarantee">
        <div className="container">
          <div className="guarantee-badge">
            <i aria-hidden="true">🛡️</i>
          </div>
          <h2>GARANTIA DE 7 DIAS</h2>
          <p>Testa. Usa. Implanta.</p>
          <p>Se não rolar? Cancela.</p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)" }}>
            Mas se funcionar... Ela nunca mais vai conseguir te ignorar do mesmo jeito.
          </p>
        </div>
      </section>

      <section className="faq-section" data-section="faq">
        <div className="container">
          <h2>PERGUNTAS FREQUENTES</h2>
          <div className="faq-container">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === item.question
              return (
                <div className={`faq-item${isOpen ? " active" : ""}`} data-animate key={item.question}>
                  <div
                    className="faq-question"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => handleFaqToggle(item.question, index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        handleFaqToggle(item.question, index)
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <i aria-hidden="true">⌄</i>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">{item.answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="oferta" data-section="final_cta">
        <div className="container">
          <h2>VOCÊ TEM DUAS OPÇÕES:</h2>
          <div className="options-grid">
            {finalOptions.map((option) => (
              <div className={`option-card ${option.variant}`} key={option.number}>
                <div className="option-number">{option.number}</div>
                <h3>{option.text}</h3>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "24px", fontWeight: 700, marginBottom: "50px" }}>
            A diferença entre quem conquista e quem fica esperando está na estratégia.
          </p>

          <a
            href={CHECKOUT_URL}
            className="cta-button"
            style={{ fontSize: "22px", padding: "25px 60px" }}
            onClick={() => handleCtaClick("final_cta", CTA_TEXTS.final)}
          >
            <span>{CTA_TEXTS.final}</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-logo">
            <img src="https://i.ibb.co/ZzHT8GC9/logo-mago.png" alt="O Mago da Sedução" loading="lazy" />
          </div>
          <div className="footer-links">
            <Link href="/politica">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
            <a href="mailto:contato@magodaseducao.com.br">Contato</a>
          </div>
          <div className="footer-contact">
            💬 Dúvidas: <a href="mailto:contato@magodaseducao.com.br">contato@magodaseducao.com.br</a>
          </div>
          <div className="footer-copyright">
            © 2025 O Mago da Sedução™ - Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  )
}
