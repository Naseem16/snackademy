import { Link } from 'react-router-dom'
import { certifications, getCertification, getSection } from '../content'
import { countCards } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { ProgressBar, ProgressRing } from '../components/Ui'
import { FlameIcon, SparkleIcon } from '../components/Icons'
import { xpForLevel } from '../store/badges'

function ContinueCard() {
  const { state, certProgress } = useProgress()
  const entries = Object.entries(state.lastVisited)
  if (entries.length === 0) return null
  // most recent by no timestamp; just take first available cert with a position
  const [certId, pos] = entries[entries.length - 1]
  const cert = getCertification(certId)
  if (!cert) return null
  const found = getSection(cert, pos.sectionId)
  if (!found) return null
  const prog = certProgress(certId)
  return (
    <Link
      to={`/cert/${certId}/section/${pos.sectionId}`}
      className="card-surface mb-5 block p-4 transition active:scale-[0.99]"
    >
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-400">
        ▶ Continue where you left off
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-bold text-white">{found.section.title}</div>
          <div className="truncate text-xs text-slate-400">
            {cert.shortTitle} · {found.chapter.title}
          </div>
        </div>
        <span className="shrink-0 text-2xl">{cert.icon}</span>
      </div>
      <ProgressBar pct={prog.pct} className="mt-3" />
    </Link>
  )
}

function StatStrip() {
  const { stats } = useProgress()
  const within = stats.xp - xpForLevel(stats.level)
  const span = xpForLevel(stats.level + 1) - xpForLevel(stats.level)
  const lvlPct = span > 0 ? Math.round((within / span) * 100) : 0
  return (
    <div className="card-surface mb-5 flex items-center gap-4 p-4">
      <ProgressRing pct={lvlPct}>
        <div className="text-center">
          <div className="text-[10px] leading-none text-slate-400">LVL</div>
          <div className="text-lg font-extrabold leading-none text-white">{stats.level}</div>
        </div>
      </ProgressRing>
      <div className="flex-1">
        <div className="flex items-center gap-1 text-sm font-bold text-white">
          <SparkleIcon className="h-4 w-4 text-brand-400" />
          {stats.xp} XP
        </div>
        <div className="mt-0.5 text-xs text-slate-400">
          {stats.cardsCompleted} cards · {stats.quizzesCorrect} quizzes aced
        </div>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-orange-500/10 px-3 py-1.5">
        <div className="flex items-center gap-1 text-lg font-extrabold text-orange-400">
          <FlameIcon className="h-4 w-4" />
          {stats.streakCurrent}
        </div>
        <div className="text-[10px] text-slate-400">day streak</div>
      </div>
    </div>
  )
}

function CertCard({ certId }: { certId: string }) {
  const cert = getCertification(certId)!
  const { certProgress } = useProgress()
  const prog = certProgress(certId)
  const total = countCards(cert)

  const inner = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cert.gradient} p-[1px]`}
    >
      <div className="rounded-2xl bg-slate-900/80 p-4">
        <div className="flex items-start justify-between">
          <span className="text-3xl">{cert.icon}</span>
          <div className="flex flex-col items-end gap-1">
            <span className="pill bg-white/10 text-slate-200">{cert.code}</span>
            {!cert.available && (
              <span className="pill bg-white/10 text-amber-200">Coming soon</span>
            )}
          </div>
        </div>
        <h3 className="mt-2 text-base font-bold leading-tight text-white">{cert.title}</h3>
        <p className="mt-0.5 text-xs text-slate-400">{cert.tagline}</p>
        {cert.available ? (
          <>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span>{prog.done} / {total} cards</span>
              <span className="font-semibold text-white">{prog.pct}%</span>
            </div>
            <ProgressBar pct={prog.pct} className="mt-1.5" />
          </>
        ) : (
          <p className="mt-3 text-xs text-slate-500">{cert.description}</p>
        )}
      </div>
    </div>
  )

  if (!cert.available) return <div className="opacity-60">{inner}</div>
  return (
    <Link to={`/cert/${certId}`} className="block transition active:scale-[0.98]">
      {inner}
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      <header className="mb-5 pt-2">
        <h1 className="text-2xl font-extrabold text-white">
          CertPrep <span className="text-brand-400">·</span> AWS
        </h1>
        <p className="text-sm text-slate-400">
          Bite-sized, fun prep for your next cloud certification.
        </p>
      </header>

      <StatStrip />
      <ContinueCard />

      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {certifications.map((c) => (
          <CertCard key={c.id} certId={c.id} />
        ))}
      </div>
    </div>
  )
}
