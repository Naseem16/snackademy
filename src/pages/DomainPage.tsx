import { Link, useParams } from 'react-router-dom'
import { getCertification, getDomain } from '../content'
import { useProgress } from '../store/ProgressContext'
import { PageHeader, ProgressBar } from '../components/Ui'
import { CheckIcon } from '../components/Icons'

export default function DomainPage() {
  const { certId, domainId } = useParams()
  const cert = getCertification(certId)
  const domain = cert ? getDomain(cert, domainId!) : undefined
  const { sectionProgress } = useProgress()

  if (!cert || !domain)
    return (
      <div className="py-20 text-center text-slate-400">
        Not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  return (
    <div>
      <PageHeader
        title={domain.title}
        subtitle={`${cert.shortTitle}${domain.weight ? ` · ${domain.weight} of exam` : ''}`}
        fallback={`/cert/${cert.id}`}
      />

      {domain.description && (
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{domain.description}</p>
      )}

      <div className="space-y-5">
        {domain.chapters.map((chapter) => (
          <div key={chapter.id}>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">{chapter.emoji ?? '📖'}</span>
              <h2 className="text-sm font-bold text-white">{chapter.title}</h2>
            </div>
            {chapter.description && (
              <p className="mb-2 text-xs text-slate-400">{chapter.description}</p>
            )}
            <div className="space-y-2">
              {chapter.sections.map((section) => {
                const ids = section.cards.map((c) => c.id)
                const sp = sectionProgress(cert.id, section.id, ids)
                const done = sp.pct === 100
                return (
                  <Link
                    key={section.id}
                    to={`/cert/${cert.id}/section/${section.id}`}
                    className="card-surface flex items-center gap-3 p-3 transition active:scale-[0.99]"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        done
                          ? 'bg-emerald-500 text-slate-900'
                          : sp.done > 0
                            ? 'bg-brand-500/20 text-brand-300'
                            : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {done ? <CheckIcon className="h-5 w-5" /> : `${sp.done}/${sp.total}`}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-white">
                        {section.title}
                      </div>
                      {section.summary && (
                        <div className="truncate text-xs text-slate-400">
                          {section.summary}
                        </div>
                      )}
                      <ProgressBar pct={sp.pct} className="mt-1.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
