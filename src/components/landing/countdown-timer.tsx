"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetHours?: number
}

export function CountdownTimer({ targetHours = 24 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Define o horário alvo (meia-noite do próximo dia)
    const getTargetTime = () => {
      const now = new Date()
      const target = new Date(now)
      target.setHours(23, 59, 59, 999)
      return target
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = getTargetTime().getTime()
      const difference = target - now

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetHours])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm sm:h-14 sm:w-14">
        <span className="text-xl font-bold text-white sm:text-2xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1 text-xs font-medium text-white/90 sm:text-sm">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <TimeUnit value={timeLeft.hours} label="horas" />
      <span className="text-2xl font-bold text-white">:</span>
      <TimeUnit value={timeLeft.minutes} label="min" />
      <span className="text-2xl font-bold text-white">:</span>
      <TimeUnit value={timeLeft.seconds} label="seg" />
    </div>
  )
}
