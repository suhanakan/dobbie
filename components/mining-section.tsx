"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMining } from "@/hooks/useMining"
import { Pickaxe, Coins, Timer, TrendingUp, Zap, Gift } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function MiningSection() {
  const {
    balance,
    totalMined,
    miningCount,
    canMine,
    timeUntilNextMining,
    formatTimeRemaining,
    mine,
    isLoaded,
    MINING_REWARD,
  } = useMining()
  const [isMining, setIsMining] = useState(false)
  const [showReward, setShowReward] = useState(false)
  const [rewardAmount, setRewardAmount] = useState(0)

  const handleMine = async () => {
    if (!canMine || isMining) return

    setIsMining(true)

    // Mining animation
    setTimeout(() => {
      const success = mine()
      if (success) {
        setRewardAmount(MINING_REWARD)
        setShowReward(true)

        // Hide reward after 3 seconds
        setTimeout(() => {
          setShowReward(false)
        }, 3000)
      }
      setIsMining(false)
    }, 2000)
  }

  if (!isLoaded) {
    return (
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">Loading mining data...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          >
            ⛏️
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-orange-600 mb-4">Mine $GOODRUDI</h3>
            <p className="text-lg text-gray-700">Earn free tokens every 24 hours by mining with Rudi!</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mining Card */}
          <AnimatedSection animation="fadeInLeft">
            <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-orange-600">
                  <Pickaxe className="h-6 w-6" />
                  <span>Mining Station</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                {/* Mining Button */}
                <div className="relative">
                  <Button
                    onClick={handleMine}
                    disabled={!canMine || isMining}
                    size="lg"
                    className={`w-full h-16 text-lg font-bold transition-all duration-300 ${
                      canMine && !isMining
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } ${isMining ? "animate-pulse" : ""}`}
                  >
                    {isMining ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin">⛏️</div>
                        <span>Mining...</span>
                      </div>
                    ) : canMine ? (
                      <div className="flex items-center space-x-2">
                        <Pickaxe className="h-5 w-5" />
                        <span>Mine {MINING_REWARD.toLocaleString()} $GOODRUDI</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Timer className="h-5 w-5" />
                        <span>Next mining in {formatTimeRemaining(timeUntilNextMining)}</span>
                      </div>
                    )}
                  </Button>

                  {/* Reward popup */}
                  {showReward && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                        <Gift className="h-4 w-4" />
                        <span>+{rewardAmount.toLocaleString()} $GOODRUDI!</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Countdown Timer */}
                {!canMine && (
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 text-orange-600">
                      <Timer className="h-5 w-5" />
                      <span className="font-mono text-xl">{formatTimeRemaining(timeUntilNextMining)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Until next mining opportunity</p>
                  </div>
                )}

                {/* Mining Status */}
                <div className="flex justify-center">
                  <Badge variant={canMine ? "default" : "secondary"} className={canMine ? "bg-green-500" : ""}>
                    {canMine ? "Ready to Mine" : "Cooling Down"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Stats Card */}
          <AnimatedSection animation="fadeInRight" delay={200}>
            <Card className="border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-orange-600">
                  <TrendingUp className="h-6 w-6" />
                  <span>Mining Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Balance */}
                <div className="text-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Coins className="h-6 w-6 text-orange-500" />
                    <span className="text-lg font-semibold text-gray-700">Current Balance</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{balance.toLocaleString()} $GOODRUDI</div>
                </div>

                {/* Mining Statistics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-orange-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-600">{totalMined.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Mined</div>
                  </div>
                  <div className="text-center bg-yellow-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-600">{miningCount}</div>
                    <div className="text-sm text-gray-600">Mining Sessions</div>
                  </div>
                </div>

                {/* Reward Info */}
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold text-gray-700">Mining Reward</span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {MINING_REWARD.toLocaleString()} $GOODRUDI per 24h
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Mine once every 24 hours to earn free tokens!</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Mining Tips */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-orange-600 mb-4">🎯 Mining Tips</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Mine every 24 hours to maximize rewards</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Set a daily reminder to never miss mining</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Share with friends to build the community</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500">•</span>
                    <span>Hold your tokens for potential future rewards</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
