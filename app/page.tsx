"use client"

import { useState } from "react"
import { ScreenHome } from "@/components/screen-home"
import { ScreenUsuario } from "@/components/screen-usuario"
import { ScreenClave } from "@/components/screen-clave"
import { ScreenDashboard } from "@/components/screen-dashboard"
import { ScreenCuenta } from "@/components/screen-cuenta"
import { ScreenTransacciones } from "@/components/screen-transacciones"
import { ScreenExplorar } from "@/components/screen-explorar"
import { ScreenTramites } from "@/components/screen-tramites"
import { ScreenAjustes } from "@/components/screen-ajustes"

type Step = "login" | "home" | "usuario" | "clave" | "dashboard" | "cuenta"
type NavTab = "Inicio" | "Transacciones" | "Explorar" | "Trámites y\nsolicitudes" | "Ajustes"

export default function Page() {
  const [step, setStep] = useState<Step>("home")
  const [navTab, setNavTab] = useState<NavTab>("Inicio")

  const handleNavSelect = (tab: string) => {
    setNavTab(tab as NavTab)
  }

  const handleLogout = () => {
    setStep("home")
    setNavTab("Inicio")
  }

  return (
    <main className="flex min-h-dvh justify-center bg-neutral-950">
      <div className="relative flex min-h-dvh w-full max-w-md flex-col bg-background">
        {step === "home" && (
          <ScreenHome
            onLogin={() => setStep("usuario")}
            navTab={navTab}
            onNavSelect={handleNavSelect}
          />
        )}
        {step === "usuario" && (
          <ScreenUsuario onContinue={() => setStep("clave")} onClose={() => setStep("home")} />
        )}
        {step === "clave" && (
          <ScreenClave onEnter={() => setStep("dashboard")} onBack={() => setStep("usuario")} />
        )}
        {step === "dashboard" && navTab === "Inicio" && (
          <ScreenDashboard
            onCuenta={() => setStep("cuenta")}
            onLogout={handleLogout}
            navTab={navTab}
            onNavSelect={handleNavSelect}
          />
        )}
        {step === "dashboard" && navTab === "Transacciones" && (
          <ScreenTransacciones onSelect={handleNavSelect} />
        )}
        {step === "dashboard" && navTab === "Explorar" && (
          <ScreenExplorar onSelect={handleNavSelect} />
        )}
        {step === "dashboard" && navTab === "Trámites y\nsolicitudes" && (
          <ScreenTramites onSelect={handleNavSelect} />
        )}
        {step === "dashboard" && navTab === "Ajustes" && (
          <ScreenAjustes onSelect={handleNavSelect} onLogout={handleLogout} />
        )}
        {step === "cuenta" && <ScreenCuenta onBack={() => setStep("dashboard")} />}
      </div>
    </main>
  )
}
