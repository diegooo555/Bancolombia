"use client"

import { User, Bell, Shield, Palette, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { BancolombiaWordmark } from "./bancolombia-logo"
import { BottomNav } from "./bottom-nav"

const opciones = [
  { icon: User, label: "Mi perfil", description: "Datos personales y contacto" },
  { icon: Bell, label: "Notificaciones", description: "Alertas y mensajes" },
  { icon: Shield, label: "Seguridad", description: "Clave y autenticación" },
  { icon: Palette, label: "Apariencia", description: "Tema y personalización" },
  { icon: HelpCircle, label: "Ayuda", description: "Preguntas frecuentes y soporte" },
]

export function ScreenAjustes({
  onSelect,
  onLogout,
}: {
  onSelect: (tab: string) => void
  onLogout: () => void
}) {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-3">
          <BancolombiaWordmark />
        </div>

        <h1 className="px-6 pt-6 text-3xl font-medium text-foreground">Ajustes</h1>

        <section className="mt-6 px-6">
          <div className="overflow-hidden rounded-2xl bg-card">
            {opciones.map((o, i) => (
              <button
                key={o.label}
                type="button"
                className={`flex w-full items-center gap-4 px-5 py-4 text-left ${
                  i !== opciones.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <o.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{o.label}</p>
                  <p className="text-sm text-muted-foreground">{o.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 px-6 pb-8">
          <button
            type="button"
            onClick={onLogout}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 py-4 text-lg font-medium text-red-400"
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Bancolombia App v2.0.0
          </p>
        </section>
      </div>

      <BottomNav active="Ajustes" onSelect={onSelect} />
    </div>
  )
}
