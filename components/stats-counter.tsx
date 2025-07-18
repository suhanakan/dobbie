"use client"

import { useCounter } from "@/hooks/useCounter"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useEffect } from "react"

interface StatCounterProps {
  end: number
  label: string
  prefix?: string
  suffix?: string
}

export function StatCounter({ end, label, prefix = "", suffix = "" }: StatCounterProps) {
  const { ref, isVisible } = useScrollAnimation()
  const { count, startCounter } = useCounter(end)

  useEffect(() => {
    if (isVisible) {
      startCounter()
    }
  }, [isVisible, startCounter])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-orange-600 mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
