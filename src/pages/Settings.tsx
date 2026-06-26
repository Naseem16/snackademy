import { useState } from 'react'
import { certifications } from '../content'
import { useProgress } from '../store/ProgressContext'

export default function Settings() {
  const { resetProgress, stats } = useProgress()
  const [confirming, setConfirming] = useState(false)

  return (
    <div>
      <header className="mb-4 pt-2">
        <h1 className="text-2xl font-extrabold text-white">Settings</h1>
        <p className="text-sm text-slate-400">App info & your data.</p>
      </header>

      {/* Privacy / data */}
      <section className="card-surface mb-4 p-4">
        <h2 className="text-sm font-bold text-white">🔒 Your data stays on this device</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">
          There's no login and nothing is uploaded. Your progress, streaks, badges and
          bookmarks are saved locally in this browser. Clearing your browser data or using a
          different device will start you fresh.
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <Mini value={stats.cardsCompleted} label="cards done" />
          <Mini value={stats.streakLongest} label="best streak" />
          <Mini value={stats.level} label="level" />
        </div>
      </section>

      {/* Content versions */}
      <section className="card-surface mb-4 p-4">
        <h2 className="text-sm font-bold text-white">📚 Course content</h2>
        <p className="mt-1 text-xs text-slate-400">
          Content auto-updates: when a new version is published you'll get a refresh prompt at
          the top of the app (works offline too, as an installable PWA).
        </p>
        <div className="mt-3 space-y-1.5">
          {certifications
            .filter((c) => c.available)
            .map((c) => (
              <div key={c.id} className="flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  {c.icon} {c.shortTitle}
                </span>
                <span className="text-slate-500">
                  v{c.version} · updated {c.lastUpdated}
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Install hint */}
      <section className="card-surface mb-4 p-4">
        <h2 className="text-sm font-bold text-white">📱 Install the app</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">
          Add CertPrep to your home screen for a full-screen, offline experience. In your
          browser menu choose <span className="text-slate-200">"Add to Home Screen"</span> or{' '}
          <span className="text-slate-200">"Install app"</span>.
        </p>
      </section>

      {/* Danger zone */}
      <section className="card-surface mb-4 border-rose-500/20 p-4">
        <h2 className="text-sm font-bold text-rose-300">Reset progress</h2>
        <p className="mt-1 text-xs text-slate-400">
          Permanently erase all progress, streaks, badges and bookmarks on this device.
        </p>
        {confirming ? (
          <div className="mt-3 flex gap-2">
            <button
              className="btn flex-1 bg-rose-500 text-white hover:bg-rose-400"
              onClick={() => {
                resetProgress()
                setConfirming(false)
              }}
            >
              Yes, erase everything
            </button>
            <button className="btn-ghost flex-1" onClick={() => setConfirming(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="btn-ghost mt-3 text-rose-300"
            onClick={() => setConfirming(true)}
          >
            Reset all progress
          </button>
        )}
      </section>

      <p className="pb-4 text-center text-[11px] text-slate-600">
        CertPrep · built for focused, fun certification prep.
      </p>
    </div>
  )
}

function Mini({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-xl bg-white/5 py-2">
      <div className="text-base font-extrabold text-white">{value}</div>
      <div className="text-[10px] text-slate-400">{label}</div>
    </div>
  )
}
