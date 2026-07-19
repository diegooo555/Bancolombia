"use client"

import { useState } from "react"
import { X, ChevronRight, User, ScanFace } from "lucide-react"
import { StatusBar } from "./status-bar"
import { BancolombiaMark } from "./bancolombia-logo"
import { LoginRibbons } from "./ribbons"
import { DEFAULT_USUARIO } from "@/lib/auth-config"

export function ScreenUsuario({
  onContinue,
  onClose,
}: {
  onContinue: () => void
  onClose: () => void
}) {
  const [usuario, setUsuario] = useState(DEFAULT_USUARIO)
  const canContinue = usuario.trim().length > 0

  return (
    <div className="flex min-h-full flex-col">

      <div className="relative flex-1 overflow-hidden">
        <LoginRibbons />

        {/* top bar */}
        <div className="relative flex items-center justify-between px-5 pt-3">
          <button type="button" onClick={onClose} className="flex items-center gap-1 text-lg text-foreground">
            <X className="h-6 w-6" />
            Cerrar
          </button>
          <BancolombiaMark className="h-7 w-8" />
          <button
            type="button"
            onClick={() => canContinue && onContinue()}
            className={`flex items-center gap-1 text-lg ${canContinue ? "text-foreground" : "text-muted-foreground"}`}
          >
            Continuar
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <h1 className="relative pt-6 text-center text-4xl font-extrabold text-foreground">¡Hola!</h1>

        {/* input card */}
        <div className="relative mt-10 px-5">
          <div className="rounded-2xl bg-card p-4">
            <label className="flex items-center gap-3 rounded-xl border border-foreground/60 px-4 py-4">
              <User className="h-6 w-6 shrink-0 text-foreground" strokeWidth={1.5} />
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingresa tu usuario"
                className="w-full bg-transparent text-xl text-foreground outline-none placeholder:text-muted-foreground"
                autoComplete="off"
              />
            </label>
          </div>
        </div>

        {/* continuar button */}
        <div className="relative mt-6 px-5">
          <button
            type="button"
            onClick={() => canContinue && onContinue()}
            disabled={!canContinue}
            className={`w-full rounded-full py-4 text-xl font-bold transition-colors ${canContinue ? "bg-primary text-primary-foreground" : "bg-muted-foreground/40 text-neutral-300"
              }`}
          >
            Continuar
          </button>
        </div>

        <button type="button" className="relative mt-6 block w-full text-center text-lg font-bold text-foreground underline">
          ¿Olvidaste tu usuario o clave?
        </button>

        {/* face id */}
        <div className="relative mt-16 flex justify-center">
          <div className="flex h-52 w-52 flex-col items-center justify-center gap-3 rounded-full bg-secondary/70">
            <ScanFace className="h-14 w-14 text-foreground" strokeWidth={1.3} />
            <span className="text-lg text-foreground">Ingresa con Face ID</span>
          </div>
        </div>

        <button type="button" className="relative mt-10 block w-full pb-8 text-center text-lg font-bold text-foreground underline">
          ¿Aún no tienes usuario o cuenta?
        </button>
      </div>
    </div>
  )
}
