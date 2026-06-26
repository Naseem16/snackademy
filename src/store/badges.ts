// Badge & milestone definitions. Each badge has a predicate evaluated against
// a snapshot of the learner's derived stats. Keep predicates pure & cheap —
// they run after every progress mutation.

export interface LearnerStats {
  cardsCompleted: number
  quizzesCorrect: number
  quizzesAnswered: number
  bookmarks: number
  streakCurrent: number
  streakLongest: number
  /** number of sections fully completed across all certs */
  sectionsCompleted: number
  /** number of domains fully completed across all certs */
  domainsCompleted: number
  /** certIds the learner has 100% completed */
  certsCompleted: string[]
  /** any progress recorded today */
  activeToday: boolean
  xp: number
  level: number
}

export interface BadgeDef {
  id: string
  name: string
  description: string
  emoji: string
  /** badge tier for styling */
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  earned: (s: LearnerStats) => boolean
}

export const BADGES: BadgeDef[] = [
  {
    id: 'first-step',
    name: 'First Step',
    description: 'Complete your very first card.',
    emoji: '👣',
    tier: 'bronze',
    earned: (s) => s.cardsCompleted >= 1,
  },
  {
    id: 'warming-up',
    name: 'Warming Up',
    description: 'Complete 10 cards.',
    emoji: '🔥',
    tier: 'bronze',
    earned: (s) => s.cardsCompleted >= 10,
  },
  {
    id: 'section-cleared',
    name: 'Section Cleared',
    description: 'Finish a full section.',
    emoji: '✅',
    tier: 'bronze',
    earned: (s) => s.sectionsCompleted >= 1,
  },
  {
    id: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Complete 50 cards.',
    emoji: '📚',
    tier: 'silver',
    earned: (s) => s.cardsCompleted >= 50,
  },
  {
    id: 'quiz-rookie',
    name: 'Quiz Rookie',
    description: 'Answer your first quiz correctly.',
    emoji: '🎯',
    tier: 'bronze',
    earned: (s) => s.quizzesCorrect >= 1,
  },
  {
    id: 'sharp-shooter',
    name: 'Sharp Shooter',
    description: 'Get 25 quiz questions right.',
    emoji: '🏹',
    tier: 'silver',
    earned: (s) => s.quizzesCorrect >= 25,
  },
  {
    id: 'domain-master',
    name: 'Domain Master',
    description: 'Complete an entire exam domain.',
    emoji: '🏆',
    tier: 'gold',
    earned: (s) => s.domainsCompleted >= 1,
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Bookmark 5 cards for later.',
    emoji: '🔖',
    tier: 'bronze',
    earned: (s) => s.bookmarks >= 5,
  },
  {
    id: 'streak-3',
    name: 'On a Roll',
    description: 'Keep a 3-day learning streak.',
    emoji: '⚡',
    tier: 'silver',
    earned: (s) => s.streakLongest >= 3,
  },
  {
    id: 'streak-7',
    name: 'Unstoppable',
    description: 'Keep a 7-day learning streak.',
    emoji: '🌟',
    tier: 'gold',
    earned: (s) => s.streakLongest >= 7,
  },
  {
    id: 'century',
    name: 'Centurion',
    description: 'Complete 100 cards.',
    emoji: '💯',
    tier: 'gold',
    earned: (s) => s.cardsCompleted >= 100,
  },
  {
    id: 'certified-mind',
    name: 'Certified Mind',
    description: 'Reach 100% on any certification.',
    emoji: '🎓',
    tier: 'platinum',
    earned: (s) => s.certsCompleted.length >= 1,
  },
  {
    id: 'level-5',
    name: 'Rising Star',
    description: 'Reach Level 5.',
    emoji: '⭐',
    tier: 'silver',
    earned: (s) => s.level >= 5,
  },
  {
    id: 'level-10',
    name: 'Cloud Sage',
    description: 'Reach Level 10.',
    emoji: '🧙',
    tier: 'platinum',
    earned: (s) => s.level >= 10,
  },
]

export const tierRing: Record<BadgeDef['tier'], string> = {
  bronze: 'ring-amber-700/60 bg-amber-900/20',
  silver: 'ring-slate-300/50 bg-slate-400/10',
  gold: 'ring-yellow-400/60 bg-yellow-500/10',
  platinum: 'ring-cyan-300/60 bg-cyan-400/10',
}

// XP → level curve. Level N requires N*N*50 cumulative XP (gentle ramp).
export function levelForXp(xp: number): number {
  return Math.max(1, Math.floor(Math.sqrt(xp / 50)) + 1)
}

export function xpForLevel(level: number): number {
  const l = Math.max(1, level - 1)
  return l * l * 50
}
