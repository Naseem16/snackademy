import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { certifications } from '../content'
import { cardKey } from '../content/types'
import { BADGES, levelForXp, type BadgeDef, type LearnerStats } from './badges'

const STORAGE_KEY = 'certprep.state.v1'

interface QuizResult {
  correct: boolean
  ts: number
}

interface PersistState {
  completedCards: Record<string, number> // cardKey -> completion timestamp
  bookmarks: Record<string, number> // cardKey -> timestamp
  quizResults: Record<string, QuizResult> // cardKey -> result
  earnedBadges: Record<string, number> // badgeId -> earned timestamp
  streak: { current: number; longest: number; lastActiveDay: string }
  lastVisited: Record<string, { sectionId: string; cardIndex: number }> // certId -> position
}

const emptyState: PersistState = {
  completedCards: {},
  bookmarks: {},
  quizResults: {},
  earnedBadges: {},
  streak: { current: 0, longest: 0, lastActiveDay: '' },
  lastVisited: {},
}

function todayKey(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

function dayDiff(a: string, b: string): number {
  if (!a || !b) return Infinity
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db.getTime() - da.getTime()) / 86_400_000)
}

function load(): PersistState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState
    const parsed = JSON.parse(raw)
    return { ...emptyState, ...parsed }
  } catch {
    return emptyState
  }
}

// Precompute, per cert, the set of card keys grouped by section/domain so badge
// math is cheap. Done once at module load.
interface CertIndex {
  certId: string
  available: boolean
  allCardKeys: string[]
  sections: { keys: string[] }[]
  domains: { keys: string[] }[]
}

const CERT_INDEX: CertIndex[] = certifications.map((cert) => {
  const sections: { keys: string[] }[] = []
  const domains: { keys: string[] }[] = []
  const allCardKeys: string[] = []
  for (const domain of cert.domains) {
    const domainKeys: string[] = []
    for (const chapter of domain.chapters) {
      for (const section of chapter.sections) {
        const keys = section.cards.map((c) => cardKey(cert.id, section.id, c.id))
        sections.push({ keys })
        domainKeys.push(...keys)
        allCardKeys.push(...keys)
      }
    }
    domains.push({ keys: domainKeys })
  }
  return { certId: cert.id, available: cert.available, allCardKeys, sections, domains }
})

interface ProgressContextValue {
  // raw
  state: PersistState
  // queries
  isCardComplete: (key: string) => boolean
  isBookmarked: (key: string) => boolean
  quizResult: (key: string) => QuizResult | undefined
  certProgress: (certId: string) => { done: number; total: number; pct: number }
  sectionProgress: (
    certId: string,
    sectionId: string,
    cardIds: string[],
  ) => { done: number; total: number; pct: number }
  // mutations
  completeCard: (key: string) => void
  toggleCardComplete: (key: string) => void
  toggleBookmark: (key: string) => void
  recordQuiz: (key: string, correct: boolean) => void
  setLastVisited: (certId: string, sectionId: string, cardIndex: number) => void
  resetProgress: () => void
  // gamification
  stats: LearnerStats
  earnedBadgeIds: string[]
  newlyEarned: BadgeDef[]
  dismissNewlyEarned: () => void
}

const Ctx = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersistState>(load)
  const [newlyEarned, setNewlyEarned] = useState<BadgeDef[]>([])

  // Persist on every change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage full / disabled — fail silent, app still works in-memory */
    }
  }, [state])

  // ── Derived stats ────────────────────────────────────────────────────
  const stats: LearnerStats = useMemo(() => {
    const completed = state.completedCards
    const cardsCompleted = Object.keys(completed).length

    let sectionsCompleted = 0
    let domainsCompleted = 0
    const certsCompleted: string[] = []

    for (const idx of CERT_INDEX) {
      if (!idx.available || idx.allCardKeys.length === 0) continue
      for (const s of idx.sections)
        if (s.keys.length > 0 && s.keys.every((k) => completed[k])) sectionsCompleted++
      for (const d of idx.domains)
        if (d.keys.length > 0 && d.keys.every((k) => completed[k])) domainsCompleted++
      if (idx.allCardKeys.every((k) => completed[k])) certsCompleted.push(idx.certId)
    }

    const quizValues = Object.values(state.quizResults)
    const quizzesAnswered = quizValues.length
    const quizzesCorrect = quizValues.filter((q) => q.correct).length

    const xp = cardsCompleted * 10 + quizzesCorrect * 5
    const level = levelForXp(xp)

    return {
      cardsCompleted,
      quizzesAnswered,
      quizzesCorrect,
      bookmarks: Object.keys(state.bookmarks).length,
      streakCurrent: state.streak.current,
      streakLongest: state.streak.longest,
      sectionsCompleted,
      domainsCompleted,
      certsCompleted,
      activeToday: state.streak.lastActiveDay === todayKey(),
      xp,
      level,
    }
  }, [state])

  // ── Badge evaluation ─────────────────────────────────────────────────
  const earnedBadgeIds = useMemo(
    () => BADGES.filter((b) => b.earned(stats)).map((b) => b.id),
    [stats],
  )

  // When new badges cross the threshold, record + surface them.
  useEffect(() => {
    const fresh = earnedBadgeIds.filter((id) => !state.earnedBadges[id])
    if (fresh.length === 0) return
    const now = Date.now()
    setState((prev) => {
      const earnedBadges = { ...prev.earnedBadges }
      for (const id of fresh) earnedBadges[id] = now
      return { ...prev, earnedBadges }
    })
    setNewlyEarned((prev) => [
      ...prev,
      ...BADGES.filter((b) => fresh.includes(b.id)),
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [earnedBadgeIds])

  // ── Streak bookkeeping when activity happens ──────────────────────────
  const touchStreak = (prev: PersistState): PersistState['streak'] => {
    const today = todayKey()
    const { lastActiveDay, current, longest } = prev.streak
    if (lastActiveDay === today) return prev.streak
    const gap = dayDiff(lastActiveDay, today)
    const nextCurrent = gap === 1 ? current + 1 : 1
    return {
      current: nextCurrent,
      longest: Math.max(longest, nextCurrent),
      lastActiveDay: today,
    }
  }

  const completeCard = (key: string) =>
    setState((prev) => {
      if (prev.completedCards[key]) return prev
      return {
        ...prev,
        completedCards: { ...prev.completedCards, [key]: Date.now() },
        streak: touchStreak(prev),
      }
    })

  const toggleCardComplete = (key: string) =>
    setState((prev) => {
      const completedCards = { ...prev.completedCards }
      if (completedCards[key]) {
        delete completedCards[key]
        return { ...prev, completedCards }
      }
      completedCards[key] = Date.now()
      return { ...prev, completedCards, streak: touchStreak(prev) }
    })

  const toggleBookmark = (key: string) =>
    setState((prev) => {
      const bookmarks = { ...prev.bookmarks }
      if (bookmarks[key]) delete bookmarks[key]
      else bookmarks[key] = Date.now()
      return { ...prev, bookmarks }
    })

  const recordQuiz = (key: string, correct: boolean) =>
    setState((prev) => ({
      ...prev,
      quizResults: { ...prev.quizResults, [key]: { correct, ts: Date.now() } },
      completedCards: prev.completedCards[key]
        ? prev.completedCards
        : { ...prev.completedCards, [key]: Date.now() },
      streak: touchStreak(prev),
    }))

  const setLastVisited = (certId: string, sectionId: string, cardIndex: number) =>
    setState((prev) => ({
      ...prev,
      lastVisited: { ...prev.lastVisited, [certId]: { sectionId, cardIndex } },
    }))

  const resetProgress = () => {
    setState(emptyState)
    setNewlyEarned([])
  }

  const certProgress = (certId: string) => {
    const idx = CERT_INDEX.find((c) => c.certId === certId)
    const total = idx?.allCardKeys.length ?? 0
    const done = idx ? idx.allCardKeys.filter((k) => state.completedCards[k]).length : 0
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
  }

  const sectionProgress = (certId: string, sectionId: string, cardIds: string[]) => {
    const total = cardIds.length
    const done = cardIds.filter((id) => state.completedCards[cardKey(certId, sectionId, id)])
      .length
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
  }

  const value: ProgressContextValue = {
    state,
    isCardComplete: (key) => !!state.completedCards[key],
    isBookmarked: (key) => !!state.bookmarks[key],
    quizResult: (key) => state.quizResults[key],
    certProgress,
    sectionProgress,
    completeCard,
    toggleCardComplete,
    toggleBookmark,
    recordQuiz,
    setLastVisited,
    resetProgress,
    stats,
    earnedBadgeIds,
    newlyEarned,
    dismissNewlyEarned: () => setNewlyEarned([]),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(): ProgressContextValue {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
