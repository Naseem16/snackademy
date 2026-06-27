import { Link } from 'react-router-dom'
import { getCertification, getSection } from '../content'
import type { Card } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { BookmarkIcon } from '../components/Icons'

interface ResolvedBookmark {
  key: string
  ts: number
  certId: string
  certIcon: string
  sectionId: string
  sectionTitle: string
  chapterTitle: string
  card: Card
}

function resolve(key: string, ts: number): ResolvedBookmark | null {
  const [certId, sectionId, cardId] = key.split('::')
  const cert = getCertification(certId)
  if (!cert) return null
  const found = getSection(cert, sectionId)
  if (!found) return null
  const card = found.section.cards.find((c) => c.id === cardId)
  if (!card) return null
  return {
    key,
    ts,
    certId,
    certIcon: cert.icon,
    sectionId,
    sectionTitle: found.section.title,
    chapterTitle: found.chapter.title,
    card,
  }
}

const kindEmoji: Record<Card['kind'], string> = {
  concept: '📘',
  analogy: '💡',
  example: '🧪',
  diagram: '🗺️',
  tip: '🎯',
  compare: '⚖️',
  quiz: '❓',
  qa: '🎤',
}

export default function Bookmarks() {
  const { state, toggleBookmark } = useProgress()
  const items = Object.entries(state.bookmarks)
    .map(([k, ts]) => resolve(k, ts))
    .filter((x): x is ResolvedBookmark => x !== null)
    .sort((a, b) => b.ts - a.ts)

  return (
    <div>
      <header className="mb-4 pt-2">
        <h1 className="text-2xl font-extrabold text-white">Saved cards</h1>
        <p className="text-sm text-slate-400">Tap a card to jump back to it.</p>
      </header>

      {items.length === 0 ? (
        <div className="card-surface mt-10 flex flex-col items-center p-8 text-center">
          <BookmarkIcon className="h-10 w-10 text-slate-600" />
          <p className="mt-3 text-sm font-semibold text-slate-300">No bookmarks yet</p>
          <p className="mt-1 text-xs text-slate-500">
            While reading, tap the 🔖 icon to save tricky cards here for quick review.
          </p>
          <Link to="/" className="btn-primary mt-4">
            Start learning
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((b) => (
            <div key={b.key} className="card-surface flex items-center gap-3 p-3">
              <Link
                to={`/cert/${b.certId}/section/${b.sectionId}?card=${b.card.id}`}
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <span className="text-xl">{kindEmoji[b.card.kind]}</span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">
                    {b.card.title ?? b.card.question ?? 'Card'}
                  </div>
                  <div className="truncate text-xs text-slate-400">
                    {b.certIcon} {b.chapterTitle} · {b.sectionTitle}
                  </div>
                </div>
              </Link>
              <button
                aria-label="Remove bookmark"
                onClick={() => toggleBookmark(b.key)}
                className="shrink-0 rounded-lg p-1.5 text-brand-400 hover:bg-white/10"
              >
                <BookmarkIcon filled />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
