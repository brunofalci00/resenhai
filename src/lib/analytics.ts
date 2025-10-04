import posthog from 'posthog-js'

export const analytics = {
  // Eventos de visualização de seções (para funil)
  trackSectionViewed: (section: 'hero' | 'problem' | 'solution' | 'security' | 'testimonials' | 'pricing') => {
    posthog.capture('section_viewed', {
      section,
      timestamp: new Date().toISOString(),
    })
  },

  // Eventos de clique nos CTAs (para conversão)
  trackCheckoutClick: (location: 'hero' | 'benefits' | 'pricing_card' | 'pricing_final' | 'sticky_bar', campaign: string) => {
    posthog.capture('checkout_clicked', {
      location,
      campaign,
      destination: 'kiwify',
      timestamp: new Date().toISOString(),
    })
  },

  // Evento de início de sessão
  trackLandingPageView: () => {
    posthog.capture('landing_page_viewed', {
      timestamp: new Date().toISOString(),
    })
  },

  // Eventos de engajamento
  trackScrollDepth: (depth: number) => {
    posthog.capture('scroll_depth', {
      depth,
      timestamp: new Date().toISOString(),
    })
  },

  // Evento genérico
  track: (eventName: string, properties?: Record<string, unknown>) => {
    posthog.capture(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    })
  },
}
