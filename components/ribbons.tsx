// Decorative colored ribbon accents used across Bancolombia screens.

export function DashboardRibbons() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-14 h-40 w-full"
      viewBox="0 0 400 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M-20 120 C 60 60, 120 60, 180 90" stroke="#3fbfe0" strokeWidth="14" strokeLinecap="round" />
      <path d="M40 90 C 120 30, 200 30, 270 70" stroke="#ffce00" strokeWidth="16" strokeLinecap="round" />
      <path d="M250 80 C 300 55, 330 60, 360 110" stroke="#f26522" strokeWidth="15" strokeLinecap="round" />
      <path d="M340 120 C 370 70, 400 60, 430 40" stroke="#8b5cf6" strokeWidth="14" strokeLinecap="round" />
      <path d="M140 70 C 180 45, 220 45, 250 60" stroke="#3fbfe0" strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export function HomeRibbons() {
  return (
    <svg
      className="pointer-events-none absolute -right-4 top-8 h-48 w-2/3"
      viewBox="0 0 260 200"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 150 C 60 120, 90 120, 130 130" stroke="#3fbfe0" strokeWidth="14" strokeLinecap="round" />
      <path d="M60 150 C 120 40, 200 10, 260 -30" stroke="#ffce00" strokeWidth="16" strokeLinecap="round" />
      <path d="M120 150 C 170 90, 210 60, 260 30" stroke="#f26522" strokeWidth="15" strokeLinecap="round" />
    </svg>
  )
}

export function LoginRibbons() {
  return (
    <svg
      className="pointer-events-none absolute bottom-24 left-0 h-64 w-full"
      viewBox="0 0 400 260"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M-10 120 C 100 220, 140 230, 200 210" stroke="#ffce00" strokeWidth="16" strokeLinecap="round" />
      <path d="M40 150 C 120 230, 160 235, 200 215" stroke="#8b5cf6" strokeWidth="16" strokeLinecap="round" />
      <path d="M200 215 C 260 235, 320 200, 410 120" stroke="#f26522" strokeWidth="16" strokeLinecap="round" />
      <path d="M330 150 C 370 120, 390 90, 410 70" stroke="#ffce00" strokeWidth="14" strokeLinecap="round" />
    </svg>
  )
}
