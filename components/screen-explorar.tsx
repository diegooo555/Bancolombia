"use client"

import { TrendingUp, Shield, Gift, PiggyBank, Landmark, BarChart3 } from "lucide-react"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { BottomNav } from "./bottom-nav"

const categorias = [
  { icon: TrendingUp, label: "Inversiones", color: "#ffce00" },
  { icon: Shield, label: "Seguros", color: "#3fbfe0" },
  { icon: Gift, label: "Beneficios", color: "#f26522" },
  { icon: PiggyBank, label: "Ahorro", color: "#5fd6a8" },
  { icon: Landmark, label: "Créditos", color: "#8b5cf6" },
  { icon: BarChart3, label: "Reportes", color: "#f4a97a" },
]

export function ScreenExplorar({ onSelect }: { onSelect: (tab: string) => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
        </div>

        <h1 className="px-6 pt-6 text-3xl font-medium text-foreground">Explorar</h1>

        <section className="mt-6 px-6">
          <div className="rounded-2xl bg-card p-5">
            <div className="grid grid-cols-3 gap-y-6">
              {categorias.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: c.color }}
                  >
                    <c.icon className="h-9 w-9 text-neutral-800" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 pb-8">
          <h2 className="text-xl text-foreground">Descubre</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-card p-5">
              <h3 className="text-lg font-bold text-foreground">Invierte tu plata</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Conoce las opciones de inversión que tenemos para ti y hace crecer tu dinero.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-5">
              <h3 className="text-lg font-bold text-foreground">Seguros disponibles</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Protege lo que más importa con nuestros planes de seguro.
              </p>
            </div>
          </div>
        </section>
      </div>

      <BottomNav active="Explorar" onSelect={onSelect} />
    </div>
  )
}
