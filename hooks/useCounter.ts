"use client"

import { useEffect, useState } from "react"

export function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= end) {
          clearInterval(timer)
          return end
        }
        return next
      })
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, isActive])

  const startCounter = () => setIsActive(true)

  return { count: Math.floor(count), startCounter }
}
