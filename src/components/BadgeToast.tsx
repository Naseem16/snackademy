import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useProgress } from '../store/ProgressContext'

// Celebratory toast shown when one or more badges are newly earned.
export default function BadgeToast() {
  const { newlyEarned, dismissNewlyEarned } = useProgress()
  const badge = newlyEarned[0]

  useEffect(() => {
    if (!badge) return
    const t = setTimeout(dismissNewlyEarned, 4500)
    return () => clearTimeout(t)
  }, [badge, dismissNewlyEarned])

  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          key={badge.id}
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="fixed inset-x-0 bottom-20 z-50 mx-auto flex max-w-sm justify-center px-4"
          onClick={dismissNewlyEarned}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-yellow-400/40 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 px-4 py-3 shadow-2xl backdrop-blur-lg">
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8 }}
            >
              {badge.emoji}
            </motion.span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-yellow-300">
                Badge unlocked!
              </div>
              <div className="text-sm font-bold text-white">{badge.name}</div>
              <div className="text-xs text-slate-300">{badge.description}</div>
            </div>
            {newlyEarned.length > 1 && (
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold text-white">
                +{newlyEarned.length - 1}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
