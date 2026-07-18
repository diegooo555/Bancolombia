import { Lock, ChevronRight } from "lucide-react"

export function ClaveDinamica({ code = "509 045" }: { code?: string }) {
  return (
    <button
      type="button"
      className="flex w-fit items-center gap-3 rounded-full bg-secondary/80 py-2.5 pl-2.5 pr-4 text-left backdrop-blur-sm"
    >
      <span className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90">
          <circle cx="22" cy="22" r="19" fill="none" stroke="oklch(1 0 0 / 15%)" strokeWidth="3" />
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="119"
            strokeDashoffset="45"
          />
        </svg>
        <Lock className="h-5 w-5 text-foreground" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm text-muted-foreground">Clave Dinámica</span>
        <span className="text-xl font-bold tracking-wide text-foreground">{code}</span>
      </span>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  )
}
