import posthog from 'posthog-js'

export const analytics = {
  // Eventos de conversão
  trackCTAClick: (location: string) => {
    posthog.capture('cta_clicked', {
      location,
      timestamp: new Date().toISOString(),
    })
  },

  trackWhatsAppClick: (source: string) => {
    posthog.capture('whatsapp_clicked', {
      source,
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

  trackSectionView: (section: string) => {
    posthog.capture('section_viewed', {
      section,
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
