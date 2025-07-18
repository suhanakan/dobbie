"use client"

import { useState, useEffect, useCallback } from "react"

interface MiningData {
  balance: number
  lastMiningTime: number
  totalMined: number
  miningCount: number
}

export function useMining() {
  const [balance, setBalance] = useState(0)
  const [lastMiningTime, setLastMiningTime] = useState(0)
  const [totalMined, setTotalMined] = useState(0)
  const [miningCount, setMiningCount] = useState(0)
  const [timeUntilNextMining, setTimeUntilNextMining] = useState(0)
  const [canMine, setCanMine] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const MINING_COOLDOWN = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  const MINING_REWARD = 1000 // 1000 GOODRUDI per mining

  // Load mining data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("goodrudi-mining")
    if (savedData) {
      const data: MiningData = JSON.parse(savedData)
      setBalance(data.balance)
      setLastMiningTime(data.lastMiningTime)
      setTotalMined(data.totalMined)
      setMiningCount(data.miningCount)
    }
    setIsLoaded(true)
  }, [])

  // Save mining data to localStorage
  const saveMiningData = useCallback((data: MiningData) => {
    localStorage.setItem("goodrudi-mining", JSON.stringify(data))
  }, [])

  // Update countdown timer
  useEffect(() => {
    if (!isLoaded) return

    const updateTimer = () => {
      const now = Date.now()
      const timeSinceLastMining = now - lastMiningTime
      const timeLeft = MINING_COOLDOWN - timeSinceLastMining

      if (timeLeft <= 0) {
        setCanMine(true)
        setTimeUntilNextMining(0)
      } else {
        setCanMine(false)
        setTimeUntilNextMining(timeLeft)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [lastMiningTime, isLoaded, MINING_COOLDOWN])

  // Mine function
  const mine = useCallback(() => {
    if (!canMine) return false

    const now = Date.now()
    const newBalance = balance + MINING_REWARD
    const newTotalMined = totalMined + MINING_REWARD
    const newMiningCount = miningCount + 1

    const newData: MiningData = {
      balance: newBalance,
      lastMiningTime: now,
      totalMined: newTotalMined,
      miningCount: newMiningCount,
    }

    setBalance(newBalance)
    setLastMiningTime(now)
    setTotalMined(newTotalMined)
    setMiningCount(newMiningCount)
    saveMiningData(newData)

    return true
  }, [canMine, balance, totalMined, miningCount, saveMiningData, MINING_REWARD])

  // Format time remaining
  const formatTimeRemaining = useCallback((ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }, [])

  return {
    balance,
    totalMined,
    miningCount,
    canMine,
    timeUntilNextMining,
    formatTimeRemaining,
    mine,
    isLoaded,
    MINING_REWARD,
  }
}
