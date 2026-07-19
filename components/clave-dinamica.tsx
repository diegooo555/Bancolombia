"use client"

import { useState, useEffect, useCallback } from "react"
import { Lock, ChevronRight } from "lucide-react"

function generateRandomCode(): string {
  const digits = Math.floor(100000 + Math.random() * 900000).toString()
  return `${digits.slice(0, 3)} ${digits.slice(3)}`
}

export function ClaveDinamica({ code: initialCode = "--- ---", interval = 60 }: { code?: string; interval?: number }) {
  const circumference = 2 * Math.PI * 19
  const [code, setCode] = useState(initialCode)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setCode(generateRandomCode())
  }, [])

  const reset = useCallback(() => {
    setCode(generateRandomCode())
    setProgress(0)
  }, [])

  useEffect(() => {
    const tick = 100
    const totalMs = interval * 1000

    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalMs) {
          reset()
          return 0
        }
        return prev + tick
      })
    }, tick)

    return () => clearInterval(id)
  }, [interval, reset])

  const offset = circumference - (progress / (interval * 1000)) * circumference

  return (
    <button
      type="button"
      className="flex w-fit items-center gap-3 rounded-full bg-secondary/80 py-2.5 pl-2.5 pr-4 text-left backdrop-blur-sm"
    >
      <span className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90">
          <circle cx="22" cy="22" r="19" fill="none" stroke="oklch(1 0 0 / 15%)" strokeWidth="3" />
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <Lock className="h-5 w-5 text-foreground" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm text-muted-foreground">Clave Dinámica</span>
        <span className="text-xl font-bold tracking-wide text-foreground">{code}</span>
      </span>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  )
}
