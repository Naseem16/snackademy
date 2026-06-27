// ─────────────────────────────────────────────────────────────────────────
// Content schema
// Hierarchy:  Certification → Domain (exam topic) → Chapter → Section → Card
// Cards are the atomic, bite-sized unit shown one-at-a-time to the learner.
// ─────────────────────────────────────────────────────────────────────────

export type CardKind =
  | 'concept' // core explanation
  | 'analogy' // a real-world analogy to make it stick
  | 'example' // worked example / scenario
  | 'diagram' // a data-driven visual
  | 'tip' // exam tip / gotcha
  | 'compare' // side-by-side comparison
  | 'quiz' // knowledge check
  | 'qa' // interview-style question with a reveal-able answer

export interface KeyTerm {
  term: string
  definition: string
}

export interface QuizOption {
  id: string
  text: string
  correct: boolean
}

// ── Data-driven diagrams (rendered as SVG by <Diagram/>) ──────────────────
export type DiagramType =
  | 'flow' // ordered steps with arrows
  | 'stack' // nested / layered concepts (e.g. AI ⊃ ML ⊃ DL)
  | 'pyramid' // hierarchy with a base
  | 'cycle' // a repeating loop
  | 'quadrant' // 2x2 positioning
  | 'compare' // visual columns

export interface DiagramNode {
  label: string
  sublabel?: string
  emoji?: string
}

export interface DiagramColumn {
  title: string
  emoji?: string
  items: string[]
}

export interface DiagramSpec {
  type: DiagramType
  direction?: 'horizontal' | 'vertical'
  nodes?: DiagramNode[]
  // quadrant only
  axes?: { x: [string, string]; y: [string, string] }
  points?: { label: string; x: number; y: number }[] // each 0..1
  // compare only
  columns?: DiagramColumn[]
}

export interface Card {
  id: string
  kind: CardKind
  title?: string
  emoji?: string
  /** Markdown-lite: paragraphs, **bold**, `code`, and "- " bullet lines. */
  body?: string
  terms?: KeyTerm[]
  // compare cards
  compare?: { headers: string[]; rows: string[][] }
  // diagram cards
  diagram?: DiagramSpec
  // quiz cards (and the question text for 'qa' cards)
  question?: string
  options?: QuizOption[]
  explanation?: string
  // qa (interview) cards: `question` holds the prompt, `body` holds the
  // reveal-able model answer; optional follow-up prompts to think about.
  followUps?: string[]
}

export interface Section {
  id: string
  title: string
  summary?: string
  cards: Card[]
}

export interface Chapter {
  id: string
  title: string
  emoji?: string
  description?: string
  sections: Section[]
}

export interface Domain {
  id: string
  title: string
  emoji?: string
  weight?: string // exam weight, e.g. "20%"
  description?: string
  chapters: Chapter[]
}

export type CertLevel =
  | 'Foundational'
  | 'Associate'
  | 'Professional'
  | 'Specialty'
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'

export interface ExamFact {
  label: string
  value: string
}

export interface Certification {
  id: string
  /** 'certification' = exam track (AWS); 'path' = skill learning path (JS, React). Defaults to certification. */
  kind?: 'certification' | 'path'
  code: string // e.g. "AIF-C01" for certs, or a short tag like "JS" for paths
  title: string
  shortTitle: string
  provider: string // e.g. "AWS", "JavaScript", "React"
  level: CertLevel
  /** Tailwind gradient classes for the cert's accent, e.g. "from-orange-500 to-amber-600". */
  gradient: string
  icon: string // emoji
  tagline: string
  description: string
  examFacts: ExamFact[]
  version: string
  lastUpdated: string // ISO date
  available: boolean // false => shown as "coming soon"
  domains: Domain[]
}

// ── Derived helpers ───────────────────────────────────────────────────────

export interface CardLocation {
  certId: string
  domainId: string
  chapterId: string
  sectionId: string
  card: Card
}

export function countCards(cert: Certification): number {
  let n = 0
  for (const d of cert.domains)
    for (const ch of d.chapters) for (const s of ch.sections) n += s.cards.length
  return n
}

export function countCardsInDomain(domain: Domain): number {
  let n = 0
  for (const ch of domain.chapters) for (const s of ch.sections) n += s.cards.length
  return n
}

export function countCardsInChapter(chapter: Chapter): number {
  let n = 0
  for (const s of chapter.sections) n += s.cards.length
  return n
}

/** Stable, globally-unique key for a card used in progress storage. */
export function cardKey(certId: string, sectionId: string, cardId: string): string {
  return `${certId}::${sectionId}::${cardId}`
}

export function sectionKey(certId: string, sectionId: string): string {
  return `${certId}::${sectionId}`
}
