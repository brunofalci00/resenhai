"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

interface CtaButtonProps extends React.ComponentProps<typeof Button> {
  href: string
  label: string
  icon?: React.ReactNode
  trackingLocation?: 'hero' | 'benefits' | 'pricing_card' | 'pricing_final' | 'sticky_bar'
}

export function CtaButton({ href, label, icon, className, trackingLocation, ...props }: CtaButtonProps) {
  const handleClick = () => {
    // Track checkout click com location e campaign
    if (trackingLocation) {
      // Extrai o campaign da URL (utm_campaign)
      const url = new URL(href)
      const campaign = url.searchParams.get('utm_campaign') || 'unknown'

      analytics.trackCheckoutClick(trackingLocation, campaign)
    }
  }

  return (
    <Button asChild className={className} {...props}>
      <Link href={href} aria-label={label} prefetch={false} onClick={handleClick}>
        <span>{label}</span>
        {icon ? <span className="size-4">{icon}</span> : null}
      </Link>
    </Button>
  )
}
