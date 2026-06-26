import type { DiagramSpec } from '../content/types'

const ACCENTS = [
  'from-orange-500/30 to-amber-600/20 border-orange-400/40',
  'from-sky-500/30 to-indigo-600/20 border-sky-400/40',
  'from-emerald-500/30 to-teal-600/20 border-emerald-400/40',
  'from-fuchsia-500/30 to-purple-600/20 border-fuchsia-400/40',
  'from-rose-500/30 to-pink-600/20 border-rose-400/40',
  'from-cyan-500/30 to-blue-600/20 border-cyan-400/40',
]

function NodeBox({
  label,
  sublabel,
  emoji,
  i,
}: {
  label: string
  sublabel?: string
  emoji?: string
  i: number
}) {
  return (
    <div
      className={`w-full rounded-xl border bg-gradient-to-br ${ACCENTS[i % ACCENTS.length]} px-3 py-2.5 text-center`}
    >
      <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white">
        {emoji && <span className="text-base">{emoji}</span>}
        <span>{label}</span>
      </div>
      {sublabel && <div className="mt-0.5 text-xs text-slate-300">{sublabel}</div>}
    </div>
  )
}

function Flow({ spec }: { spec: DiagramSpec }) {
  const nodes = spec.nodes ?? []
  return (
    <div className="flex flex-col items-center gap-1.5">
      {nodes.map((n, i) => (
        <div key={i} className="flex w-full max-w-xs flex-col items-center gap-1.5">
          <NodeBox {...n} i={i} />
          {i < nodes.length - 1 && (
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-brand-400">
              <path d="M12 4v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

function Stack({ spec }: { spec: DiagramSpec }) {
  // nested boxes: first node is outermost
  const nodes = spec.nodes ?? []
  const render = (idx: number): React.ReactNode => {
    if (idx >= nodes.length) return null
    const n = nodes[idx]
    return (
      <div
        className={`rounded-xl border bg-gradient-to-br ${ACCENTS[idx % ACCENTS.length]} p-3`}
      >
        <div className="mb-2 text-center text-sm font-semibold text-white">
          {n.emoji && <span className="mr-1">{n.emoji}</span>}
          {n.label}
          {n.sublabel && (
            <span className="ml-1 text-xs font-normal text-slate-300">— {n.sublabel}</span>
          )}
        </div>
        {render(idx + 1)}
      </div>
    )
  }
  return <div className="mx-auto max-w-sm">{render(0)}</div>
}

function Pyramid({ spec }: { spec: DiagramSpec }) {
  // first node = apex (narrowest), last = base (widest)
  const nodes = spec.nodes ?? []
  const n = nodes.length
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-1.5">
      {nodes.map((node, i) => {
        const width = 45 + ((i + 1) / n) * 55 // 45% → 100%
        return (
          <div key={i} style={{ width: `${width}%` }}>
            <NodeBox {...node} i={i} />
          </div>
        )
      })}
    </div>
  )
}

function Cycle({ spec }: { spec: DiagramSpec }) {
  const nodes = spec.nodes ?? []
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-brand-300">
        <svg width="14" height="14" viewBox="0 0 24 24" className="text-brand-400">
          <path d="M3 12a9 9 0 1 1 3 6.7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M3 20v-4h4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Repeats continuously
      </div>
      {nodes.map((node, i) => (
        <div key={i} className="flex w-full max-w-xs flex-col items-center gap-1.5">
          <NodeBox {...node} i={i} />
          {i < nodes.length - 1 && <span className="text-brand-400">↓</span>}
        </div>
      ))}
      <div className="mt-1 text-xs text-slate-400">↻ back to start</div>
    </div>
  )
}

function Quadrant({ spec }: { spec: DiagramSpec }) {
  const axes = spec.axes
  const points = spec.points ?? []
  return (
    <div className="mx-auto max-w-xs">
      <div className="mb-1 text-center text-xs font-medium text-slate-300">
        {axes?.y[1]}
      </div>
      <div className="flex items-stretch gap-1">
        <div className="flex items-center text-[10px] font-medium text-slate-400 [writing-mode:vertical-rl]">
          {axes?.x[0]}
        </div>
        <div className="relative aspect-square flex-1 rounded-xl border border-white/15 bg-slate-900/50">
          {/* grid lines */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
          {points.map((p, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x * 100}%`, top: `${(1 - p.y) * 100}%` }}
            >
              <span className="whitespace-nowrap rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-semibold text-slate-900 shadow">
                {p.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center text-[10px] font-medium text-slate-400 [writing-mode:vertical-rl]">
          {axes?.x[1]}
        </div>
      </div>
      <div className="mt-1 text-center text-xs font-medium text-slate-300">{axes?.y[0]}</div>
    </div>
  )
}

function Compare({ spec }: { spec: DiagramSpec }) {
  const cols = spec.columns ?? []
  return (
    <div className={`grid gap-2 ${cols.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
      {cols.map((c, i) => (
        <div
          key={i}
          className={`rounded-xl border bg-gradient-to-br ${ACCENTS[i % ACCENTS.length]} p-3`}
        >
          <div className="mb-2 text-center text-sm font-bold text-white">
            {c.emoji && <span className="mr-1">{c.emoji}</span>}
            {c.title}
          </div>
          <ul className="space-y-1">
            {c.items.map((it, j) => (
              <li key={j} className="flex gap-1.5 text-xs text-slate-200">
                <span className="text-brand-400">›</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function Diagram({ spec }: { spec: DiagramSpec }) {
  let body: React.ReactNode = null
  switch (spec.type) {
    case 'flow':
      body = <Flow spec={spec} />
      break
    case 'stack':
      body = <Stack spec={spec} />
      break
    case 'pyramid':
      body = <Pyramid spec={spec} />
      break
    case 'cycle':
      body = <Cycle spec={spec} />
      break
    case 'quadrant':
      body = <Quadrant spec={spec} />
      break
    case 'compare':
      body = <Compare spec={spec} />
      break
  }
  return <div className="py-1">{body}</div>
}
