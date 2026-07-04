import { Link } from 'react-router-dom'
import { getCertification } from '../content'
import { countCards } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { ProgressBar } from './Ui'
import CourseIcon from './CourseIcon'

/** A course tile with progress. Used on group pages. */
export default function CertCard({ certId }: { certId: string }) {
  const cert = getCertification(certId)
  const { certProgress } = useProgress()
  if (!cert) return null
  const prog = certProgress(certId)
  const total = countCards(cert)

  const inner = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cert.gradient} p-[1px]`}
    >
      <div className="rounded-2xl bg-slate-900/80 p-4">
        <div className="flex items-start justify-between">
          <CourseIcon certId={cert.id} emoji={cert.icon} size={34} />
          <div className="flex flex-col items-end gap-1">
            <span className="pill bg-white/10 text-slate-200">{cert.code}</span>
            <span className="pill bg-white/5 text-slate-400">{cert.level}</span>
          </div>
        </div>
        <h3 className="mt-2 text-base font-bold leading-tight text-white">{cert.title}</h3>
        <p className="mt-0.5 text-xs text-slate-400">{cert.tagline}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>
            {prog.done} / {total} cards
          </span>
          <span className="font-semibold text-white">{prog.pct}%</span>
        </div>
        <ProgressBar pct={prog.pct} className="mt-1.5" />
      </div>
    </div>
  )

  return (
    <Link to={`/cert/${certId}`} className="block transition active:scale-[0.98]">
      {inner}
    </Link>
  )
}
