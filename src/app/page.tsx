'use client'

import { useEffect } from 'react'
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { SecuritySection } from "@/components/landing/security-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSimple } from "@/components/landing/pricing-simple"
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar"
import { SiteFooter } from "@/components/landing/site-footer"
import { analytics } from '@/lib/analytics'

const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL ?? "https://pay.hub.la/sant8qQx3Y4G3sPn2iCg"

const getCheckoutUrl = (campaign: string) => {
  try {
    const url = new URL(checkoutBaseUrl)
    url.searchParams.set("utm_source", "landing")
    url.searchParams.set("utm_medium", "cta")
    url.searchParams.set("utm_campaign", campaign)
    return url.toString()
  } catch {
    return checkoutBaseUrl
  }
}

export default function Home() {
  const checkoutHero = getCheckoutUrl("hero")
  const checkoutBenefits = getCheckoutUrl("benefits")
  const checkoutPricing = getCheckoutUrl("pricing")
  const checkoutStickyBar = getCheckoutUrl("sticky_bar")

  useEffect(() => {
    // Track landing page view on mount
    analytics.trackLandingPageView()
  }, [])

  return (
    <div className="bg-white text-foreground">
      <main className="flex flex-col gap-0">
        <HeroSection ctaHref={checkoutHero} />
        <ProblemSection />
        <BenefitsSection ctaHref={checkoutBenefits} />
        <SecuritySection />
        <TestimonialsSection />
        <PricingSimple ctaHref={checkoutPricing} />
      </main>
      <SiteFooter />
      <StickyCtaBar ctaHref={checkoutStickyBar} />
    </div>
  )
}
