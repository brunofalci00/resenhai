'use client'

import { useEffect, useRef } from 'react'
import { analytics } from '@/lib/analytics'

interface SectionTrackerProps {
  sectionId: 'hero' | 'problem' | 'solution' | 'security' | 'testimonials' | 'pricing'
  children: React.ReactNode
}

export function SectionTracker({ sectionId, children }: SectionTrackerProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasTracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Rastreia quando 50% da seção está visível e ainda não foi rastreada
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasTracked.current) {
            analytics.trackSectionViewed(sectionId)
            hasTracked.current = true
          }
        })
      },
      {
        threshold: 0.5, // Dispara quando 50% da seção está visível
        rootMargin: '0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [sectionId])

  return <div ref={sectionRef}>{children}</div>
}
