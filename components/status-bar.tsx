export function StatusBar({ time = "10:12" }: { time?: string }) {
  return (
    <div className="flex items-center justify-between px-6 pt-4 pb-1 text-foreground">
      <span className="text-lg font-semibold">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" opacity="0.4" />
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
          <path d="M8.5 11.5 8.5 11.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8.5 2C11.5 2 14.2 3.2 16 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M8.5 5.2C10.5 5.2 12.3 6 13.7 7.2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx="8.5" cy="10" r="1.4" fill="currentColor" />
        </svg>
        {/* battery */}
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="12" height="9" rx="2" fill="currentColor" />
          <rect x="24" y="4" width="1.6" height="5" rx="0.8" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}
