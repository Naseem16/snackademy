import { Link } from 'react-router-dom'
import { certifications } from '../content'
import { countCards } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { BADGES, tierRing, xpForLevel } from '../store/badges'
import { ProgressBar, ProgressRing } from '../components/Ui'
import { FlameIcon } from '../components/Icons'

export default function Achievements() {
  const { stats, earnedBadgeIds, certProgress } = useProgress()
  const within = stats.xp - xpForLevel(stats.level)
  const span = xpForLevel(stats.level + 1) - xpForLevel(stats.level)
  const lvlPct = span > 0 ? Math.round((within / span) * 100) : 0
  const earnedCount = earnedBadgeIds.length

  return (
    <div>
      <header className="mb-4 pt-2">
        <h1 className="text-2xl font-extrabold text-white">Achievements</h1>
        <p className="text-sm text-slate-400">Your progress lives on this device.</p>
      </header>

      {/* Level + streak hero */}
      <div className="card-surface mb-4 p-4">
        <div className="flex items-center gap-4">
          <ProgressRing pct={lvlPct} size={72} stroke={7}>
            <div className="text-center">
              <div className="text-[10px] leading-none text-slate-400">LEVEL</div>
              <div className="text-2xl font-extrabold leading-none text-white">
                {stats.level}
              </div>
            </div>
          </ProgressRing>
          <div className="flex-1">
            <div className="text-lg font-bold text-white">{stats.xp} XP</div>
            <div className="text-xs text-slate-400">
              {xpForLevel(stats.level + 1) - stats.xp} XP to level {stats.level + 1}
            </div>
            <ProgressBar pct={lvlPct} className="mt-2" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat value={stats.cardsCompleted} label="Cards" />
          <Stat value={stats.quizzesCorrect} label="Quizzes aced" />
          <div className="rounded-xl bg-orange-500/10 py-2">
            <div className="flex items-center justify-center gap-1 text-lg font-extrabold text-orange-400">
              <FlameIcon className="h-4 w-4" />
              {stats.streakCurrent}
            </div>
            <div className="text-[10px] text-slate-400">
              streak (best {stats.streakLongest})
            </div>
          </div>
        </div>
      </div>

      {/* Per-cert progress */}
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
        Certification progress
      </h2>
      <div className="mb-5 space-y-2">
        {certifications
          .filter((c) => c.available)
          .map((c) => {
            const p = certProgress(c.id)
            return (
              <Link
                key={c.id}
                to={`/cert/${c.id}`}
                className="card-surface flex items-center gap-3 p-3"
              >
                <span className="text-2xl">{c.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold text-white">
                      {c.shortTitle}
                    </span>
                    <span className="text-xs font-semibold text-white">{p.pct}%</span>
                  </div>
                  <ProgressBar pct={p.pct} className="mt-1.5" />
                  <div className="mt-1 text-[11px] text-slate-500">
                    {p.done}/{countCards(c)} cards
                  </div>
                </div>
              </Link>
            )
          })}
      </div>

      {/* Badges */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Badges
        </h2>
        <span className="text-xs text-slate-400">
          {earnedCount} / {BADGES.length} earned
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {BADGES.map((b) => {
          const earned = earnedBadgeIds.includes(b.id)
          return (
            <div
              key={b.id}
              className={`flex flex-col items-center rounded-2xl border p-3 text-center transition ${
                earned
                  ? `ring-2 ${tierRing[b.tier]} border-transparent`
                  : 'border-white/5 bg-white/5'
              }`}
            >
              <span className={`text-3xl ${earned ? '' : 'opacity-25 grayscale'}`}>
                {b.emoji}
              </span>
              <span
                className={`mt-1 text-[11px] font-bold leading-tight ${
                  earned ? 'text-white' : 'text-slate-500'
                }`}
              >
                {b.name}
              </span>
              <span className="mt-0.5 text-[10px] leading-tight text-slate-500">
                {b.description}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-xl bg-white/5 py-2">
      <div className="text-lg font-extrabold text-white">{value}</div>
      <div className="text-[10px] text-slate-400">{label}</div>
    </div>
  )
}
