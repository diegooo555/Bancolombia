"use client"

import { FileText, Clock, CheckCircle, AlertCircle, Upload, HelpCircle } from "lucide-react"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { BottomNav } from "./bottom-nav"

const tramites = [
  { icon: FileText, label: "Certificado\nde movimientos", estado: "Disponible" },
  { icon: Upload, label: "Descargar\nextracto", estado: "Disponible" },
  { icon: AlertCircle, label: "Reportar\nun cargo", estado: "Disponible" },
  { icon: HelpCircle, label: "Solicitar\nayuda", estado: "Disponible" },
]

const historial = [
  { titulo: "Solicitud de tarjeta", fecha: "15 Jul 2026", estado: "Aprobado" },
  { titulo: "Aumento de cupo", fecha: "10 Jul 2026", estado: "En proceso" },
  { titulo: "Cancelación duplicado", fecha: "05 Jul 2026", estado: "Aprobado" },
]

export function ScreenTramites({ onSelect }: { onSelect: (tab: string) => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
        </div>

        <h1 className="px-6 pt-6 text-3xl font-medium text-foreground">Trámites y solicitudes</h1>

        <section className="mt-6 px-6">
          <h2 className="text-lg text-muted-foreground">¿Qué necesitas?</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {tramites.map((t) => (
              <button
                key={t.label}
                type="button"
                className="flex items-center gap-3 rounded-2xl bg-card p-4 text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <t.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </span>
                <div>
                  <span className="whitespace-pre-line text-sm font-medium text-foreground">{t.label}</span>
                  <p className="text-xs text-muted-foreground">{t.estado}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 px-6 pb-8">
          <h2 className="text-xl text-foreground">Historial</h2>
          <div className="mt-4 space-y-3">
            {historial.map((h) => (
              <div key={h.titulo} className="flex items-center justify-between rounded-2xl bg-card p-4">
                <div className="flex items-center gap-3">
                  {h.estado === "Aprobado" ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-400" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{h.titulo}</p>
                    <p className="text-sm text-muted-foreground">{h.fecha}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium ${h.estado === "Aprobado" ? "text-green-400" : "text-yellow-400"}`}
                >
                  {h.estado}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav active="Trámites y\nsolicitudes" onSelect={onSelect} />
    </div>
  )
}
