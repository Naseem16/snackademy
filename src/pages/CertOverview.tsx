import { Link, useParams } from 'react-router-dom'
import { getCertification } from '../content'
import { cardKey, countCardsInDomain } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { PageHeader, ProgressBar } from '../components/Ui'

export default function CertOverview() {
  const { certId } = useParams()
  const cert = getCertification(certId)
  const { state, certProgress } = useProgress()

  if (!cert) return <Navigate />

  const prog = certProgress(cert.id)

  const domainProgress = (domainId: string) => {
    const domain = cert.domains.find((d) => d.id === domainId)!
    let done = 0
    let total = 0
    for (const ch of domain.chapters)
      for (const s of ch.sections)
        for (const c of s.cards) {
          total++
          if (state.completedCards[cardKey(cert.id, s.id, c.id)]) done++
        }
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
  }

  return (
    <div>
      <PageHeader title={cert.title} subtitle={`${cert.code} · ${cert.level}`} fallback="/" />

      <div
        className={`mb-4 rounded-2xl bg-gradient-to-br ${cert.gradient} p-[1px]`}
      >
        <div className="rounded-2xl bg-slate-900/80 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{cert.icon}</span>
            <div>
              <div className="text-lg font-extrabold text-white">{prog.pct}% complete</div>
              <div className="text-xs text-slate-400">
                {prog.done} of {prog.total} cards mastered
              </div>
            </div>
          </div>
          <ProgressBar pct={prog.pct} className="mt-3" />
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-slate-300">{cert.description}</p>

      {cert.examFacts.length > 0 && (
        <div className="card-surface mb-5 p-3">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {cert.kind === 'path' ? 'At a glance' : 'Exam at a glance'}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {cert.examFacts.map((f) => (
              <div key={f.label} className="flex flex-col">
                <span className="text-[11px] text-slate-500">{f.label}</span>
                <span className="text-sm font-semibold text-white">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
        {cert.kind === 'path' ? 'Topics' : 'Exam domains'}
      </h2>
      <div className="space-y-3">
        {cert.domains.map((d) => {
          const dp = domainProgress(d.id)
          return (
            <Link
              key={d.id}
              to={`/cert/${cert.id}/domain/${d.id}`}
              className="card-surface block p-4 transition active:scale-[0.99]"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{d.emoji ?? '📂'}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">{d.title}</h3>
                    {d.weight && (
                      <span className="pill shrink-0 bg-white/10 text-slate-300">
                        {d.weight}
                      </span>
                    )}
                  </div>
                  {d.description && (
                    <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
                      {d.description}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    <ProgressBar pct={dp.pct} className="flex-1" />
                    <span className="shrink-0 text-xs text-slate-400">
                      {dp.done}/{countCardsInDomain(d)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function Navigate() {
  return (
    <div className="py-20 text-center">
      <p className="text-slate-400">Certification not found.</p>
      <Link to="/" className="btn-primary mt-4 inline-flex">
        Back to home
      </Link>
    </div>
  )
}
