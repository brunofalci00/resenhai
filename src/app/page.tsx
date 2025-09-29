import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ContextSection } from "@/components/landing/context-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { SiteFooter } from "@/components/landing/site-footer"

const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Oi%20quero%20come%C3%A7ar%20com%20a%20Foquinha" // TODO: Atualize com o número real do WhatsApp.

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader ctaHref={WHATSAPP_LINK} ctaLabel="COMEÇAR AGORA" />
      <main className="flex flex-col gap-0">
        <HeroSection ctaHref={WHATSAPP_LINK} />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection ctaHref={WHATSAPP_LINK} />
        <PricingSection ctaHref={WHATSAPP_LINK} />
      </main>
      <SiteFooter />
    </div>
  )
}
