import { cn } from "@/lib/utils"

export function BancolombiaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-7", className)}
      aria-hidden="true"
    >
      <path d="M8 2 L38 2 L34 9 L4 9 Z" fill="currentColor" />
      <path d="M6 13 L34 13 L30 20 L2 20 Z" fill="currentColor" />
      <path d="M4 24 L30 24 L26 31 L0 31 Z" fill="currentColor" />
    </svg>
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
