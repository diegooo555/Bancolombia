"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"
import { StatusBar } from "./status-bar"
import { BancolombiaMark } from "./bancolombia-logo"
import { CLAVE_CAJERO } from "@/lib/auth-config"

export function ScreenClave({
  onEnter,
  onBack,
}: {
  onEnter: () => void
  onBack: () => void
}) {
  const [digits, setDigits] = useState(["", "", "", ""])
  const [error, setError] = useState(false)
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const filled = digits.every((d) => d !== "")

  function handleChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1)
    const next = [...digits]
    next[index] = digit
    setDigits(next)
    setError(false)
    if (digit && index < 3) {
      inputs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  function submit() {
    if (!filled) return
    if (digits.join("") === CLAVE_CAJERO) {
      onEnter()
    } else {
      setError(true)
      setDigits(["", "", "", ""])
      inputs.current[0]?.focus()
    }
  }

  return (
    <div className="flex min-h-full flex-col">

      <div className="relative flex-1 overflow-hidden">
        {/* small side accents */}
        <div className="absolute -left-2 top-40 h-4 w-16 -rotate-45 rounded-full bg-[#f26522]" />
        <div className="absolute -right-2 top-36 h-4 w-16 rotate-45 rounded-full bg-[#3fbfe0]" />
        <div className="absolute -right-3 top-40 h-4 w-16 rotate-45 rounded-full bg-[#f26522]" />

        {/* top bar */}
        <div className="relative flex items-center justify-between px-5 pt-3">
          <button type="button" onClick={onBack} className="flex items-center gap-1 text-lg text-foreground">
            <ChevronLeft className="h-6 w-6" />
            Volver
          </button>
          <BancolombiaMark className="h-7 w-8" />
          <button
            type="button"
            onClick={submit}
            className={`flex items-center gap-1 text-lg ${filled ? "text-foreground" : "text-muted-foreground"}`}
          >
            Ingresar
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <h1 className="relative pt-6 text-center text-4xl font-extrabold text-foreground">Iniciar sesión</h1>

        {/* card */}
        <div className="relative mt-8 px-5">
          <div className="rounded-2xl bg-card p-6">
            <div className="flex justify-center">
              <Lock className="h-8 w-8 text-foreground" strokeWidth={1.5} />
            </div>
            <p className="mt-3 text-center text-lg text-foreground">Ingresa la clave que usas en el cajero</p>

            <div className="mt-6 flex justify-center gap-4">
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputs.current[i] = el
                  }}
                  value={d ? "•" : ""}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Dígito ${i + 1}`}
                  className={`h-16 w-16 rounded-[18px] border-2 bg-transparent text-center text-3xl text-foreground outline-none ${error ? "border-destructive" : "border-muted-foreground/50 focus:border-primary"
                    }`}
                />
              ))}
            </div>

            {error && (
              <p className="mt-3 text-center text-sm text-destructive">Clave incorrecta. Intenta de nuevo.</p>
            )}
          </div>
        </div>

        {/* ingresar */}
        <div className="relative mt-6 px-5">
          <button
            type="button"
            onClick={submit}
            disabled={!filled}
            className={`w-full rounded-full py-4 text-xl font-bold transition-colors ${filled ? "bg-primary text-primary-foreground" : "bg-muted-foreground/40 text-neutral-300"
              }`}
          >
            Ingresar
          </button>
        </div>

        <button type="button" className="relative mt-8 block w-full text-center text-lg font-bold text-foreground underline">
          ¿Olvidaste tu usuario o clave?
        </button>
      </div>
    </div>
  )
}
