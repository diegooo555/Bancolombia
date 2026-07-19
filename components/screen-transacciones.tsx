"use client"

import { Send, Download, ArrowLeftRight, CreditCard, Receipt, Smartphone } from "lucide-react"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { BottomNav } from "./bottom-nav"

const acciones = [
  { icon: Send, label: "Transferir", color: "#ffce00" },
  { icon: Download, label: "Recibir", color: "#3fbfe0" },
  { icon: ArrowLeftRight, label: "Entre mis\ncuentas", color: "#f26522" },
  { icon: CreditCard, label: "Pagar\ntarjeta", color: "#8b5cf6" },
  { icon: Receipt, label: "Pagar\nservicios", color: "#5fd6a8" },
  { icon: Smartphone, label: "Recargar\ncelular", color: "#f4a97a" },
]

const recientes = [
  { nombre: "Juan Pérez", tipo: "Transferencia", monto: "-$ 150.000" },
  { nombre: "María López", tipo: "Recarga", monto: "-$ 50.000" },
  { nombre: "Carlos García", tipo: "Transferencia", monto: "+$ 200.000" },
]

export function ScreenTransacciones({ onSelect }: { onSelect: (tab: string) => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
        </div>

        <h1 className="px-6 pt-6 text-3xl font-medium text-foreground">Transacciones</h1>

        <section className="mt-6 px-6">
          <h2 className="text-lg text-muted-foreground">¿Qué deseas hacer?</h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {acciones.map((a) => (
              <button
                key={a.label}
                type="button"
                className="flex flex-col items-center gap-3 rounded-2xl bg-card p-4"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: a.color }}
                >
                  <a.icon className="h-7 w-7 text-neutral-800" strokeWidth={1.5} />
                </span>
                <span className="whitespace-pre-line text-center text-sm font-medium leading-tight text-foreground">
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 px-6 pb-8">
          <h2 className="text-xl text-foreground">Últimos movimientos</h2>
          <div className="mt-4 space-y-3">
            {recientes.map((r) => (
              <div key={r.nombre} className="flex items-center justify-between rounded-2xl bg-card p-4">
                <div>
                  <p className="font-medium text-foreground">{r.nombre}</p>
                  <p className="text-sm text-muted-foreground">{r.tipo}</p>
                </div>
                <span
                  className={`text-lg font-bold ${r.monto.startsWith("+") ? "text-green-400" : "text-foreground"}`}
                >
                  {r.monto}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav active="Transacciones" onSelect={onSelect} />
    </div>
  )
}
