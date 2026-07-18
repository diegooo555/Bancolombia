"use client"

import { Bell, HelpCircle, Headphones, LogIn, FileText, Send, CreditCard, ScanLine, Laptop, Target, Home as HomeIcon, Car, Star } from "lucide-react"
import { StatusBar } from "./status-bar"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { ClaveDinamica } from "./clave-dinamica"
import { BottomNav } from "./bottom-nav"
import { HomeRibbons } from "./ribbons"

const transacciones = [
  { icon: FileText, label: "Ver saldos y\nmovimientos" },
  { label: "Tus\nllaves", breb: true },
  { icon: Send, label: "Transferir\nplata" },
  { icon: CreditCard, label: "Pagar tarjetas\ny créditos" },
]

const opciones = [
  { icon: Laptop, label: "Sucursal\nVirtual\nPersonas", color: "#f4c7d9" },
  { icon: Target, label: "Organiza tu\nplata", color: "#b79cf0" },
  { icon: HomeIcon, label: "Hogar y\nservicios", color: "#5fd6a8" },
  { icon: Car, label: "Transporte", color: "#ffd84d" },
  { icon: Star, label: "Beneficios y", color: "#f4a97a" },
  { icon: FileText, label: "Trámites y", color: "#7fd4e8" },
]

export function ScreenHome({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <StatusBar time="10:10" />

      <div className="relative flex-1 overflow-hidden">
        <HomeRibbons />

        {/* header */}
        <div className="relative flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
          <div className="flex items-center gap-4 text-foreground">
            <Bell className="h-6 w-6" strokeWidth={1.6} />
            <HelpCircle className="h-6 w-6" strokeWidth={1.6} />
            <Headphones className="h-6 w-6" strokeWidth={1.6} />
          </div>
        </div>

        {/* greeting */}
        <h1 className="relative px-6 pt-8 text-4xl font-medium text-foreground">Buenas noches</h1>

        <div className="relative mt-5 flex items-center justify-end px-6">
          <button
            type="button"
            onClick={onLogin}
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-lg font-medium text-background"
          >
            Iniciar sesión
            <LogIn className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mt-3 px-6">
          <ClaveDinamica code="957 133" />
        </div>

        {/* transacciones principales */}
        <section className="relative mt-8 px-6">
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

        {/* mas opciones */}
        <section className="relative mt-8 px-6 pb-8">
          <h2 className="text-2xl text-foreground">Más opciones</h2>
          <div className="mt-4 rounded-2xl bg-card p-5">
            <div className="grid grid-cols-3 gap-y-6">
              {opciones.map((o) => (
                <div key={o.label} className="flex flex-col items-center gap-2 text-center">
                  <span
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: o.color }}
                  >
                    <o.icon className="h-9 w-9 text-neutral-800" strokeWidth={1.5} />
                  </span>
                  <span className="whitespace-pre-line text-sm leading-tight text-foreground">{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* floating QR */}
        <button
          type="button"
          className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-background"
        >
          <ScanLine className="h-7 w-7 text-foreground" />
        </button>
      </div>

      <BottomNav />
    </div>
  )
}
