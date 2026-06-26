import { useRegisterSW } from 'virtual:pwa-register/react'

// Shows a banner when a new version of the app (including updated course
// content) has been deployed and cached, letting the learner refresh to it.
export default function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      // Check for new content every hour while the app stays open.
      if (r)
        setInterval(() => r.update(), 60 * 60 * 1000)
      void swUrl
    },
  })

  if (!needRefresh) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-md items-center justify-between gap-3 border-b border-brand-400/40 bg-slate-900/95 px-4 py-3 backdrop-blur">
      <div className="text-sm">
        <span className="font-semibold text-white">📚 New content available</span>
        <span className="block text-xs text-slate-400">
          The course was updated. Refresh to get the latest.
        </span>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          className="btn-ghost px-3 py-1.5 text-xs"
          onClick={() => setNeedRefresh(false)}
        >
          Later
        </button>
        <button
          className="btn-primary px-3 py-1.5 text-xs"
          onClick={() => updateServiceWorker(true)}
        >
          Refresh
        </button>
      </div>
    </div>
  )
}
