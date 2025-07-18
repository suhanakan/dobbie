"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Zap, Shield, ChevronDown, Rocket, Heart, Star } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"
import { LoadingScreen } from "@/components/loading-screen"
import { MiningSection } from "@/components/mining-section"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
    setTimeout(() => setIsLoaded(true), 100)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  if (showLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-x-hidden">
      <FloatingElements />

      {/* Header */}
      <header
        className={`border-b border-orange-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "shadow-lg" : ""
        } ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className={`flex items-center space-x-3 transition-all duration-500 delay-200 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative group">
              <Image
                src="/images/rudi-logo.png"
                alt="Based Good Rudi Logo"
                width={50}
                height={50}
                className="rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer">
                Based Good Rudi
              </h1>
              <p className="text-sm text-orange-500 animate-pulse">$GOODRUDI</p>
            </div>
          </div>
          <div
            className={`flex items-center space-x-4 transition-all duration-500 delay-400 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <Badge variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
              Base Network
            </Badge>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              Buy Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "radial-gradient(circle, orange 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-5xl md:text-7xl font-bold text-orange-600 mb-6 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Meet Rudi
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">The Based Fox Taking Crypto to the Moon 🚀</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <AnimatedSection animation="fadeInLeft" delay={400}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                  <Image
                    src="/images/rudi-car.jpg"
                    alt="Rudi driving to success"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <div className="text-left space-y-6">
                  <h3 className="text-3xl font-bold text-orange-600">Ready for the Ride?</h3>
                  <p className="text-lg text-gray-600">
                    Rudi isn't just another meme token - he's your guide to the Based ecosystem. With his orange hoodie
                    and determined spirit, he's driving the community towards financial freedom on Base Network.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg group"
                    >
                      <TrendingUp className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Chart
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent transform hover:scale-105 transition-all duration-200 group"
                    >
                      <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Community
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeInUp" delay={800}>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("features")}
                className="text-orange-600 hover:text-orange-700 animate-bounce"
              >
                <ChevronDown className="h-8 w-8" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection animation="fadeInUp">
            <h3 className="text-4xl font-bold text-center text-orange-600 mb-12">Why Choose Rudi?</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0}>
              <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-orange-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-600 mb-2">Based Network</h4>
                  <p className="text-gray-600">Built on Base for lightning-fast transactions and low fees</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Users className="h-8 w-8 text-orange-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-600 mb-2">Strong Community</h4>
                  <p className="text-gray-600">Join thousands of Rudi believers building the future together</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <Shield className="h-8 w-8 text-orange-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-600 mb-2">Safe & Secure</h4>
                  <p className="text-gray-600">Audited smart contract with locked liquidity for peace of mind</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mining Section */}
      <MiningSection />

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto">
          <AnimatedSection animation="fadeInUp">
            <h3 className="text-4xl font-bold text-center text-orange-600 mb-12">Rudi's Adventures</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection animation="fadeInLeft" delay={0}>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/rudi-chart.jpg"
                  alt="Rudi with trading chart"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end justify-center pb-6">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-2">To The Moon! 🚀</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/rudi-girl.jpg"
                  alt="Rudi with friends"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end justify-center pb-6">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-2">Community Love</p>
                    <Heart className="h-6 w-6 text-red-400 fill-current mx-auto animate-pulse" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/rudi-america.jpg"
                  alt="Rudi in politics"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end justify-center pb-6">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-2">Making Moves 🇺🇸</p>
                    <Rocket className="h-6 w-6 text-blue-400 mx-auto animate-bounce" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contract Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fadeInUp">
            <h3 className="text-4xl font-bold text-orange-600 mb-8">Contract Address</h3>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <Card className="max-w-2xl mx-auto border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-3xl font-bold text-orange-600 mb-4">Coming Soon!</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    The $GOODRUDI contract is being finalized and will be deployed on Base Network soon.
                  </p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <p className="text-sm text-orange-500 font-semibold">Stay tuned for the official launch!</p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg group"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    BaseScan (Soon)
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent transform hover:scale-105 transition-all duration-200 group"
                    disabled
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    DexScreener (Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fadeInUp">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative group">
                <Image
                  src="/images/rudi-logo.png"
                  alt="Based Good Rudi Logo"
                  width={40}
                  height={40}
                  className="rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute -inset-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <h4 className="text-2xl font-bold">Based Good Rudi</h4>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-orange-100 mb-6">Join Rudi on his journey to revolutionize the Base ecosystem</p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
              >
                Twitter
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
              >
                Telegram
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="mt-8 pt-8 border-t border-orange-500">
              <p className="text-orange-200 text-sm">
                © 2025 Based Good Rudi. Built on Base Network.
                <br />
                <span className="text-xs">This is a meme token for entertainment purposes. Always DYOR.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
