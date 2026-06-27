import { useState } from 'react'
import type { Card } from '../content/types'
import MarkdownLite from './MarkdownLite'
import Diagram from './Diagram'

const KIND_META: Record<
  Card['kind'],
  { label: string; emoji: string; chip: string }
> = {
  concept: { label: 'Concept', emoji: '📘', chip: 'bg-sky-500/20 text-sky-200' },
  analogy: { label: 'Analogy', emoji: '💡', chip: 'bg-amber-500/20 text-amber-200' },
  example: { label: 'Example', emoji: '🧪', chip: 'bg-emerald-500/20 text-emerald-200' },
  diagram: { label: 'Diagram', emoji: '🗺️', chip: 'bg-indigo-500/20 text-indigo-200' },
  tip: { label: 'Exam Tip', emoji: '🎯', chip: 'bg-rose-500/20 text-rose-200' },
  compare: { label: 'Compare', emoji: '⚖️', chip: 'bg-fuchsia-500/20 text-fuchsia-200' },
  quiz: { label: 'Quick Check', emoji: '❓', chip: 'bg-brand-500/20 text-brand-200' },
  qa: { label: 'Interview Q', emoji: '🎤', chip: 'bg-violet-500/20 text-violet-200' },
}

function QaCard({ card }: { card: Card }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div>
      <p className="mb-4 text-lg font-semibold leading-snug text-white">{card.question}</p>
      {!revealed ? (
        <button onClick={() => setRevealed(true)} className="btn-primary w-full">
          💡 Reveal answer
        </button>
      ) : (
        <div className="animate-pop-in">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-300">
            Model answer
          </div>
          {card.body && <MarkdownLite text={card.body} />}
          {card.terms && card.terms.length > 0 && (
            <div className="mt-3 space-y-2">
              {card.terms.map((t, i) => (
                <div key={i} className="rounded-lg bg-slate-900/50 px-3 py-2">
                  <span className="text-sm font-semibold text-violet-300">{t.term}</span>
                  <span className="text-sm text-slate-300"> — {t.definition}</span>
                </div>
              ))}
            </div>
          )}
          {card.followUps && card.followUps.length > 0 && (
            <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/50 p-3">
              <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                🔥 Follow-ups they might ask
              </div>
              <ul className="space-y-1">
                {card.followUps.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-violet-400">›</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function QuizCard({
  card,
  savedCorrect,
  onAnswer,
}: {
  card: Card
  savedCorrect?: boolean
  onAnswer: (correct: boolean) => void
}) {
  const [picked, setPicked] = useState<string | null>(null)
  const answered = picked !== null
  const options = card.options ?? []

  const choose = (id: string) => {
    if (answered) return
    setPicked(id)
    const opt = options.find((o) => o.id === id)
    onAnswer(!!opt?.correct)
  }

  return (
    <div>
      <p className="mb-4 text-lg font-semibold leading-snug text-white">{card.question}</p>
      <div className="space-y-2.5">
        {options.map((o) => {
          const isPicked = picked === o.id
          const reveal = answered
          let cls = 'border-white/10 bg-white/5 hover:bg-white/10'
          if (reveal && o.correct) cls = 'border-emerald-400/60 bg-emerald-500/20'
          else if (reveal && isPicked && !o.correct)
            cls = 'border-rose-400/60 bg-rose-500/20'
          else if (reveal) cls = 'border-white/5 bg-white/5 opacity-60'
          return (
            <button
              key={o.id}
              onClick={() => choose(o.id)}
              disabled={answered}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${cls}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                  reveal && o.correct
                    ? 'border-emerald-300 bg-emerald-400 text-slate-900'
                    : reveal && isPicked
                      ? 'border-rose-300 bg-rose-400 text-slate-900'
                      : 'border-white/30 text-slate-300'
                }`}
              >
                {o.id.toUpperCase()}
              </span>
              <span className="text-slate-100">{o.text}</span>
            </button>
          )
        })}
      </div>
      {answered && (
        <div className="mt-4 animate-pop-in rounded-xl bg-slate-900/70 p-3">
          <div
            className={`mb-1 text-sm font-bold ${
              options.find((o) => o.id === picked)?.correct
                ? 'text-emerald-300'
                : 'text-rose-300'
            }`}
          >
            {options.find((o) => o.id === picked)?.correct
              ? '✅ Correct!'
              : '❌ Not quite'}
          </div>
          {card.explanation && (
            <p className="text-sm leading-relaxed text-slate-300">{card.explanation}</p>
          )}
        </div>
      )}
      {!answered && savedCorrect !== undefined && (
        <p className="mt-3 text-center text-xs text-slate-500">
          You previously answered this {savedCorrect ? 'correctly ✅' : 'incorrectly'}.
        </p>
      )}
    </div>
  )
}

export default function CardView({
  card,
  savedQuizCorrect,
  onQuizAnswer,
}: {
  card: Card
  savedQuizCorrect?: boolean
  onQuizAnswer?: (correct: boolean) => void
}) {
  const meta = KIND_META[card.kind]
  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span className={`pill ${meta.chip}`}>
          <span>{meta.emoji}</span>
          {meta.label}
        </span>
      </div>

      {card.title && card.kind !== 'quiz' && card.kind !== 'qa' && (
        <h3 className="mb-3 text-xl font-bold leading-snug text-white">
          {card.emoji && <span className="mr-1.5">{card.emoji}</span>}
          {card.title}
        </h3>
      )}

      {card.kind === 'quiz' ? (
        <QuizCard
          card={card}
          savedCorrect={savedQuizCorrect}
          onAnswer={(c) => onQuizAnswer?.(c)}
        />
      ) : card.kind === 'qa' ? (
        <QaCard card={card} />
      ) : (
        <>
          {card.body && <MarkdownLite text={card.body} />}

          {card.diagram && (
            <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/40 p-3">
              <Diagram spec={card.diagram} />
            </div>
          )}

          {card.compare && (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {card.compare.headers.map((h, i) => (
                      <th
                        key={i}
                        className="border-b border-white/15 px-2 py-2 text-left font-semibold text-brand-300"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {card.compare.rows.map((row, ri) => (
                    <tr key={ri} className="align-top">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`border-b border-white/5 px-2 py-2 ${
                            ci === 0 ? 'font-medium text-white' : 'text-slate-300'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {card.terms && card.terms.length > 0 && (
            <div className="mt-4 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Key terms
              </div>
              {card.terms.map((t, i) => (
                <div key={i} className="rounded-lg bg-slate-900/50 px-3 py-2">
                  <span className="text-sm font-semibold text-brand-300">{t.term}</span>
                  <span className="text-sm text-slate-300"> — {t.definition}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
