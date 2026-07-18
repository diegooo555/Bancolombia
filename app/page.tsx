"use client"

import { useState } from "react"
import { ScreenHome } from "@/components/screen-home"
import { ScreenUsuario } from "@/components/screen-usuario"
import { ScreenClave } from "@/components/screen-clave"
import { ScreenDashboard } from "@/components/screen-dashboard"
import { ScreenCuenta } from "@/components/screen-cuenta"

type Step = "home" | "usuario" | "clave" | "dashboard" | "cuenta"

export default function Page() {
  const [step, setStep] = useState<Step>("home")

  return (
    <main className="flex min-h-dvh justify-center bg-neutral-950">
      <div className="relative flex min-h-dvh w-full max-w-md flex-col bg-background">
        {step === "home" && <ScreenHome onLogin={() => setStep("usuario")} />}
        {step === "usuario" && (
          <ScreenUsuario onContinue={() => setStep("clave")} onClose={() => setStep("home")} />
        )}
        {step === "clave" && (
          <ScreenClave onEnter={() => setStep("dashboard")} onBack={() => setStep("usuario")} />
        )}
        {step === "dashboard" && (
          <ScreenDashboard onCuenta={() => setStep("cuenta")} onLogout={() => setStep("home")} />
        )}
        {step === "cuenta" && <ScreenCuenta onBack={() => setStep("dashboard")} />}
      </div>
    </main>
  )
}
