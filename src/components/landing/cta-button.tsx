"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

interface CtaButtonProps extends React.ComponentProps<typeof Button> {
  href: string
  label: string
  icon?: React.ReactNode
}

export function CtaButton({ href, label, icon, className, ...props }: CtaButtonProps) {
  const handleClick = () => {
    // Track CTA click
    analytics.trackCTAClick(label)

    // Track WhatsApp click if it's a WhatsApp link
    if (href.includes('wa.me') || href.includes('whatsapp')) {
      analytics.trackWhatsAppClick(label)
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
