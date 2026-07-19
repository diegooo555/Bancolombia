"use client"

import { Home, CreditCard, LayoutGrid, FileText, Settings } from "lucide-react"

const items = [
  { icon: Home, label: "Inicio" },
  { icon: CreditCard, label: "Transacciones" },
  { icon: LayoutGrid, label: "Explorar" },
  { icon: FileText, label: "Trámites y\nsolicitudes" },
  { icon: Settings, label: "Ajustes" },
]

export function BottomNav({
  active = "Inicio",
  onSelect,
}: {
  active?: string
  onSelect?: (tab: string) => void
}) {
  return (
    <nav className="flex items-stretch border-t border-border bg-background">
      {items.map((item) => {
        const isActive = item.label === active
        const Icon = item.icon
        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onSelect?.(item.label)}
            className={`flex flex-1 flex-col items-center justify-center gap-1 py-3 text-center ${
              isActive ? "bg-primary text-primary-foreground" : "text-foreground"
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={1.6} />
            <span className="whitespace-pre-line text-[11px] font-medium leading-tight">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
