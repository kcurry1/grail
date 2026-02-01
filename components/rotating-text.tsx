"use client"

import { useState, useEffect } from "react"

const words = [
  "grail.",
  "Jordan.",
  "Brady.",
  "Kobe.",
  "LeBron.",
  "Messi.",
  "Ohtani.",
  "Trout.",
  "Gretzky.",
  "Jeter.",
]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative">
      <span
        className={`inline-block text-primary transition-all duration-300 ease-out ${
          isAnimating
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
