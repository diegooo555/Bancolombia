import { cn } from "@/lib/utils"

export function BancolombiaMark({ className }: { className?: string }) {
  return (
    <img src="/bancolombia.png" alt="" />
  )
}

export function BancolombiaWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <BancolombiaMark />
      <span className="text-2xl font-extrabold tracking-tight">Bancolombia</span>
    </div>
  )
}
