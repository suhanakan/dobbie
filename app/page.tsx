"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-x-hidden">
      <FloatingElements />

      {/* Header */}
      <header
        className={`border-b border-blue-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                Based Good Rudi
              </h1>
              <p className="text-sm text-blue-500 animate-pulse">$GOODRUDI</p>
            </div>
          </div>
          <div
            className={`flex items-center space-x-4 transition-all duration-500 delay-400 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
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
            backgroundImage: "radial-gradient(circle, blue 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Meet Rudi
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                The Based Fox Taking Crypto to the Moon 🚀<br />
                Mine Free Tokens Every 24 Hours!
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <AnimatedSection animation="fadeInLeft" delay={400}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
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
                  <h3 className="text-3xl font-bold text-blue-600">Ready to Mine & Ride?</h3>
                  <p className="text-lg text-gray-600">
                    Rudi isn't just another meme token - he's your guide to the Based ecosystem! Start mining free
                    $GOODRUDI tokens every 24 hours while Rudi drives the community towards financial freedom on Base
                    Network. No investment needed, just pure mining rewards!
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeInUp" delay={800}>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("features")}
                className="text-blue-600 hover:text-blue-700 animate-bounce"
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
            <h3 className="text-4xl font-bold text-center text-blue-600 mb-12">Why Choose Rudi?</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0}>
              <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-blue-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Based Network</h4>
                  <p className="text-gray-600">Built on Base for lightning-fast transactions and low fees</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Users className="h-8 w-8 text-blue-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Strong Community</h4>
                  <p className="text-gray-600">Join thousands of Rudi believers building the future together</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Shield className="h-8 w-8 text-blue-500 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Safe & Secure</h4>
                  <p className="text-gray-600">Audited smart contract with locked liquidity for peace of mind</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mining Section */}
      <MiningSection />

      {/* Community Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-blue-600 mb-4">JOIN COMMUNITY</h3>
              <p className="text-lg text-gray-700">Connect with fellow Rudi believers and stay updated!</p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-600 mb-3">Telegram</h4>
                    <p className="text-gray-600 mb-6">
                      Join our active community for real-time updates, mining tips, and exclusive announcements!
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg group-hover:shadow-xl">
                      Join Telegram
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-600 mb-3">Twitter</h4>
                    <p className="text-gray-600 mb-6">
                      Follow us for the latest news, memes, and community highlights from the Rudi universe!
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg group-hover:shadow-xl">
                      Follow Twitter
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <AnimatedSection animation="fadeInUp">
            <h3 className="text-4xl font-bold text-center text-blue-600 mb-12">Rudi's Adventures</h3>
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
            <h3 className="text-4xl font-bold text-blue-600 mb-8">Contract Address</h3>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <Card className="max-w-2xl mx-auto border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-3xl font-bold text-blue-600 mb-4">Coming Soon!</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    The $GOODRUDI contract is being finalized and will be deployed on Base Network soon.
                  </p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <p className="text-sm text-blue-500 font-semibold">Stay tuned for the official launch!</p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg group"
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
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
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
            <p className="text-blue-100 mb-6">
              Join Rudi on his journey to revolutionize the Base ecosystem - Mine free tokens daily!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                Twitter
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                Telegram
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-blue-200 text-sm">
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
