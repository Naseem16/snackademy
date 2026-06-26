import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from './Icons'

export function ProgressBar({
  pct,
  className = '',
  gradient = 'from-brand-500 to-amber-400',
}: {
  pct: number
  className?: string
  gradient?: string
}) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-white/10 ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </div>
  )
}

export function ProgressRing({
  pct,
  size = 56,
  stroke = 6,
  children,
}: {
  pct: number
  size?: number
  stroke?: number
  children?: React.ReactNode
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (Math.min(100, pct) / 100) * c
  return (
    <div className="relative inline-flex" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
  fallback = '/',
}: {
  title: string
  subtitle?: string
  fallback?: string
}) {
  const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-20 -mx-4 mb-3 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2">
        <button
          aria-label="Back"
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(fallback))}
          className="-ml-1 rounded-lg p-1.5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft />
        </button>
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold text-white">{title}</h1>
          {subtitle && <p className="truncate text-xs text-slate-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
