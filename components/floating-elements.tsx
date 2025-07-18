"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating coins */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-bounce"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
            transform: `translate(${mousePosition.x * 0.01 * (i + 1)}px, ${mousePosition.y * 0.01 * (i + 1)}px)`,
          }}
        />
      ))}

      {/* Floating rockets */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`rocket-${i}`}
          className="absolute text-2xl opacity-30 animate-pulse"
          style={{
            left: `${70 + i * 10}%`,
            top: `${30 + i * 25}%`,
            animationDelay: `${i * 1}s`,
            transform: `translate(${mousePosition.x * 0.005 * (i + 1)}px, ${mousePosition.y * 0.005 * (i + 1)}px)`,
          }}
        >
          🚀
        </div>
      ))}
    </div>
  )
}
