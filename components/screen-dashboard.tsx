"use client"

import { Bell, HelpCircle, Headphones, LogOut, ChevronRight, EyeOff, FileText, Send, CreditCard, ScanLine } from "lucide-react"
import { StatusBar } from "./status-bar"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { ClaveDinamica } from "./clave-dinamica"
import { BottomNav } from "./bottom-nav"
import { DashboardRibbons } from "./ribbons"

const transacciones = [
  { icon: FileText, label: "Ver movimientos" },
  { label: "Tus\nllaves", breb: true },
  { icon: Send, label: "Transferir\nplata" },
  { icon: CreditCard, label: "Pagar tarjetas\ny créditos" },
]

export function ScreenDashboard({
  onCuenta,
  onLogout,
  navTab = "Inicio",
  onNavSelect,
}: {
  onCuenta: () => void
  onLogout: () => void
  navTab?: string
  onNavSelect?: (tab: string) => void
}) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="relative flex-1 overflow-hidden">
        <DashboardRibbons />

        {/* header */}
        <div className="relative flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
          <div className="flex items-center gap-3 text-foreground">
            <Bell className="h-6 w-6" strokeWidth={1.6} />
            <HelpCircle className="h-6 w-6" strokeWidth={1.6} />
            <Headphones className="h-6 w-6" strokeWidth={1.6} />
            <button type="button" onClick={onLogout} aria-label="Cerrar sesión">
              <LogOut className="h-6 w-6" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* greeting */}
        <button type="button" className="relative mt-6 flex items-center gap-2 px-6">
          <span className="text-4xl font-medium text-foreground">Hola, Maradona</span>
          <ChevronRight className="h-8 w-8 text-foreground" />
        </button>

        <div className="relative mt-5 px-6">
          <ClaveDinamica code="509 045" />
        </div>

        {/* tus cuentas */}
        <section className="relative mt-8 px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-foreground">Tus cuentas</h2>
            <button type="button" className="flex items-center gap-2 text-lg font-bold text-foreground underline">
              <EyeOff className="h-5 w-5" strokeWidth={1.6} />
              Ocultar saldos
            </button>
          </div>

          <div className="mt-4 flex gap-3 overflow-hidden">
            <div className="w-[88%] shrink-0 rounded-2xl bg-card p-5">
              <div className="flex items-start justify-between" onClick={onCuenta}>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Cuenta de Ahorros</h3>
                  <p className="mt-1 text-muted-foreground">Ahorros 912 - 846779 - 57</p>
                </div>
                <ChevronRight className="h-6 w-6 text-foreground" />
              </div>
              <div className="mt-4 text-right">
                <p className="text-muted-foreground">Saldo disponible</p>
                <p className="text-3xl font-light text-foreground">
                  $ 804.302<span className="text-xl">,53</span>
                </p>
              </div>
              <button
                type="button"
                onClick={onCuenta}
                className="mx-auto mt-4 block rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground"
              >
                Conoce más de tu cuenta
              </button>
            </div>
            <div className="flex w-[30%] shrink-0 items-center rounded-2xl bg-card p-5">
              <p className="text-lg text-foreground">Ir a pr...</p>
            </div>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-8 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground" />
          </div>
        </section>

        {/* transacciones principales */}
        <section className="relative mt-6 px-6 pb-8">
          <h2 className="text-2xl text-foreground">Transacciones principales</h2>
          <div className="mt-4 flex gap-3 overflow-hidden">
            {transacciones.map((t) => (
              <div
                key={t.label}
                className="flex h-28 w-[23%] shrink-0 flex-col items-start justify-between rounded-2xl bg-card p-3"
              >
                {t.breb ? (
                  <span className="text-lg font-bold text-foreground">
                    Bre<span className="text-primary">·</span>B
                  </span>
                ) : (
                  t.icon && <t.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                )}
                <span className="whitespace-pre-line text-sm leading-tight text-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative px-6 pb-10">
          <h2 className="text-2xl text-foreground">Más opciones</h2>
        </div>

        {/* floating QR */}
        <button
          type="button"
          className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-background"
        >
          <ScanLine className="h-7 w-7 text-foreground" />
        </button>
      </div>

      <BottomNav active={navTab} onSelect={onNavSelect} />
    </div>
  )
}
