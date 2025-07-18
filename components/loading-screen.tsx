"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 500)

    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 1200)

    // Simulate loading progress over 6 seconds
    const totalDuration = 6000 // 6 seconds
    const intervalTime = 50 // Update every 50ms
    const totalSteps = totalDuration / intervalTime
    let currentStep = 0

    const progressInterval = setInterval(() => {
      currentStep++
      const newProgress = (currentStep / totalSteps) * 100

      setProgress(newProgress)

      if (currentStep >= totalSteps) {
        clearInterval(progressInterval)
        setProgress(100)

        // Start exit animation after reaching 100%
        setTimeout(() => {
          setIsExiting(true)
          // Complete loading after exit animation
          setTimeout(() => onLoadingComplete(), 800)
        }, 200)
      }
    }, intervalTime)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(textTimer)
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 transition-all duration-800 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating coins */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-yellow-300 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Floating rockets */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`rocket-${i}`}
            className="absolute text-2xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            🚀
          </div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo container */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            showLogo ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"
          }`}
        >
          <div className="relative">
            {/* Glowing ring around logo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full opacity-70 animate-pulse"></div>

            {/* Logo */}
            <div className="relative bg-white p-4 rounded-full shadow-2xl">
              <Image
                src="/images/rudi-logo.png"
                alt="Based Good Rudi Logo"
                width={80}
                height={80}
                className="rounded-full animate-spin-slow"
                style={{
                  animation: "spin 4s linear infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">Based Good Rudi</h1>
          <p className="text-xl text-orange-100 mb-4">$GOODRUDI</p>
          <p className="text-orange-200 animate-bounce">Loading the future...</p>
        </div>

        {/* Progress bar */}
        <div
          className={`w-80 max-w-sm mx-auto transition-all duration-1000 delay-500 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-orange-800/30 rounded-full h-3 mb-4 overflow-hidden backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-300 h-full rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Progress text with dynamic messages */}
          <div className="flex justify-between text-orange-200 text-sm">
            <span>
              {progress < 20 && "Initializing Rudi..."}
              {progress >= 20 && progress < 40 && "Loading Base Network..."}
              {progress >= 40 && progress < 60 && "Connecting to blockchain..."}
              {progress >= 60 && progress < 80 && "Preparing for takeoff..."}
              {progress >= 80 && progress < 95 && "Almost ready..."}
              {progress >= 95 && "Welcome aboard! 🚀"}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div
          className={`flex justify-center space-x-2 mt-8 transition-all duration-1000 delay-700 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
