import { Home, CreditCard, LayoutGrid, FileText, Settings } from "lucide-react"

const items = [
  { icon: Home, label: "Inicio" },
  { icon: CreditCard, label: "Transacciones" },
  { icon: LayoutGrid, label: "Explorar" },
  { icon: FileText, label: "Trámites y\nsolicitudes" },
  { icon: Settings, label: "Ajustes" },
]

export function BottomNav() {
  return (
    <nav className="flex items-stretch border-t border-border bg-background">
      {items.map((item, i) => {
        const active = i === 0
        const Icon = item.icon
        return (
          <button
            key={item.label}
            type="button"
            className={`flex flex-1 flex-col items-center justify-center gap-1 py-3 text-center ${
              active ? "bg-primary text-primary-foreground" : "text-foreground"
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
