import { Link } from 'react-router-dom'
import { navCategories, getCertification, getSection } from '../content'
import { useProgress } from '../store/ProgressContext'
import { ProgressBar, ProgressRing } from '../components/Ui'
import { FlameIcon, SparkleIcon, ChevronRight } from '../components/Icons'
import CourseIcon from '../components/CourseIcon'
import { xpForLevel } from '../store/badges'

function ContinueCard() {
  const { state, certProgress } = useProgress()
  const entries = Object.entries(state.lastVisited)
  if (entries.length === 0) return null
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
        <span className="shrink-0">
          <CourseIcon certId={cert.id} emoji={cert.icon} size={28} />
        </span>
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

function CategoryTile({ categoryId }: { categoryId: string }) {
  const category = navCategories.find((c) => c.id === categoryId)!
  const liveGroups = category.groups.filter((g) => g.available)
  const courseCount = liveGroups.reduce((n, g) => n + g.certIds.length, 0)
  return (
    <Link
      to={`/learn/${category.id}`}
      className={`block rounded-2xl bg-gradient-to-br ${category.gradient} p-[1px] transition active:scale-[0.98]`}
    >
      <div className="flex items-center gap-4 rounded-2xl bg-slate-900/80 p-5">
        <span className="text-4xl">{category.icon}</span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-extrabold text-white">{category.title}</h3>
          <p className="text-xs text-slate-400">{category.subtitle}</p>
          <p className="mt-1 text-[11px] font-medium text-slate-500">
            {courseCount} courses · {liveGroups.length} tracks
          </p>
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" />
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      <header className="mb-5 pt-2">
        <h1 className="text-2xl font-extrabold text-white">
          Snackademy<span className="text-brand-400">.</span>
        </h1>
        <p className="text-sm text-slate-400">
          Snack-sized learning — certifications, dev paths &amp; interview prep.
        </p>
      </header>

      <StatStrip />
      <ContinueCard />

      <h2 className="mb-3 text-lg font-bold text-white">Where would you like to start?</h2>
      <div className="grid grid-cols-1 gap-3">
        {navCategories.map((c) => (
          <CategoryTile key={c.id} categoryId={c.id} />
        ))}
      </div>
    </div>
  )
}
