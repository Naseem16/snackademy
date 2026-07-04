import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCertification } from '../content'
import { getExam } from '../content/exams'
import type { ExamQuestion } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import { ChevronLeft, ChevronRight, CheckIcon } from '../components/Icons'

/** Parse "700 / 1000" style passing score into a percentage; default 70. */
function passingPct(cert: ReturnType<typeof getCertification>): number {
  const fact = cert?.examFacts.find((f) => /passing/i.test(f.label))
  if (fact) {
    const nums = fact.value.match(/\d+/g)
    if (nums && nums.length >= 2) {
      const pct = Math.round((Number(nums[0]) / Number(nums[1])) * 100)
      if (pct > 0 && pct <= 100) return pct
    }
  }
  return 70
}

function isCorrect(q: ExamQuestion, selected: string[]): boolean {
  const correct = q.options.filter((o) => o.correct).map((o) => o.id).sort()
  const picked = [...selected].sort()
  return correct.length === picked.length && correct.every((id, i) => id === picked[i])
}

export default function ExamRunner() {
  const { certId, examId } = useParams()
  const navigate = useNavigate()
  const cert = getCertification(certId)
  const exam = certId && examId ? getExam(certId, examId) : undefined
  const { recordExam } = useProgress()

  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [index, setIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [savedPct, setSavedPct] = useState(0)

  const pass = useMemo(() => passingPct(cert), [cert])

  if (!cert || !exam)
    return (
      <div className="py-20 text-center text-slate-400">
        Exam not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  const questions = exam.questions
  const q = questions[index]
  const multi = q.options.filter((o) => o.correct).length > 1
  const selected = answers[q.id] ?? []
  const answeredCount = questions.filter((qq) => (answers[qq.id] ?? []).length > 0).length

  const toggle = (optId: string) => {
    if (submitted) return
    setAnswers((prev) => {
      const cur = prev[q.id] ?? []
      if (multi) {
        return {
          ...prev,
          [q.id]: cur.includes(optId) ? cur.filter((x) => x !== optId) : [...cur, optId],
        }
      }
      return { ...prev, [q.id]: [optId] }
    })
  }

  const submit = () => {
    const correctCount = questions.filter((qq) => isCorrect(qq, answers[qq.id] ?? [])).length
    const pct = Math.round((correctCount / questions.length) * 100)
    setSavedPct(pct)
    if (certId && examId) recordExam(certId, examId, pct)
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  // ── Results view ──────────────────────────────────────────────────────
  if (submitted) {
    const correctCount = questions.filter((qq) => isCorrect(qq, answers[qq.id] ?? [])).length
    const passed = savedPct >= pass
    return (
      <div>
        <div className="sticky top-0 z-20 -mx-4 mb-4 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
          <h1 className="text-base font-bold text-white">{exam.title} — Results</h1>
          <p className="text-xs text-slate-400">{cert.shortTitle}</p>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`mb-5 rounded-2xl border p-5 text-center ${
            passed
              ? 'border-emerald-400/40 bg-emerald-500/10'
              : 'border-rose-400/40 bg-rose-500/10'
          }`}
        >
          <div className="text-5xl font-extrabold text-white">{savedPct}%</div>
          <div
            className={`mt-1 text-sm font-bold ${passed ? 'text-emerald-300' : 'text-rose-300'}`}
          >
            {passed ? '🎉 Passed!' : 'Keep practicing'}
          </div>
          <div className="mt-1 text-xs text-slate-400">
            {correctCount} / {questions.length} correct · passing mark {pass}%
          </div>
        </motion.div>

        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Review
        </h2>
        <div className="space-y-3">
          {questions.map((qq, qi) => {
            const sel = answers[qq.id] ?? []
            const ok = isCorrect(qq, sel)
            return (
              <div key={qq.id} className="card-surface p-4">
                <div className="mb-2 flex items-start gap-2">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      ok ? 'bg-emerald-500 text-slate-900' : 'bg-rose-500 text-white'
                    }`}
                  >
                    {ok ? '✓' : '✕'}
                  </span>
                  <p className="text-sm font-semibold text-white">
                    <span className="text-slate-500">Q{qi + 1}. </span>
                    {qq.question}
                  </p>
                </div>
                <div className="space-y-1.5">
                  {qq.options.map((o) => {
                    const picked = sel.includes(o.id)
                    let cls = 'text-slate-400'
                    if (o.correct) cls = 'text-emerald-300 font-medium'
                    else if (picked) cls = 'text-rose-300 line-through'
                    return (
                      <div key={o.id} className={`flex items-start gap-2 text-xs ${cls}`}>
                        <span className="mt-px">
                          {o.correct ? '✅' : picked ? '❌' : '•'}
                        </span>
                        <span>{o.text}</span>
                      </div>
                    )
                  })}
                </div>
                {qq.explanation && (
                  <p className="mt-2 rounded-lg bg-slate-900/60 p-2 text-xs leading-relaxed text-slate-300">
                    {qq.explanation}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={() => {
              setAnswers({})
              setIndex(0)
              setSubmitted(false)
              window.scrollTo(0, 0)
            }}
            className="btn-primary"
          >
            ↺ Retake exam
          </button>
          <Link to={`/cert/${cert.id}/exams`} className="btn-ghost">
            Back to practice exams
          </Link>
        </div>
      </div>
    )
  }

  // ── Taking view ───────────────────────────────────────────────────────
  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col">
      <div className="sticky top-0 z-20 -mx-4 mb-3 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            aria-label="Exit exam"
            onClick={() => navigate(`/cert/${cert.id}/exams`)}
            className="-ml-1 rounded-lg p-1.5 text-slate-300 hover:bg-white/10"
          >
            <ChevronLeft />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-bold text-white">{exam.title}</h1>
            <p className="text-[11px] text-slate-400">
              {answeredCount} / {questions.length} answered
            </p>
          </div>
        </div>
        {/* question number grid */}
        <div className="mt-2 flex flex-wrap gap-1">
          {questions.map((qq, i) => {
            const done = (answers[qq.id] ?? []).length > 0
            return (
              <button
                key={qq.id}
                onClick={() => setIndex(i)}
                className={`h-6 w-6 rounded text-[10px] font-bold transition ${
                  i === index
                    ? 'bg-brand-400 text-slate-900'
                    : done
                      ? 'bg-brand-500/30 text-brand-200'
                      : 'bg-white/10 text-slate-400'
                }`}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2 text-xs text-slate-400">
          <span className="pill bg-white/10">Question {index + 1}</span>
          {q.topic && <span className="pill bg-white/5 text-slate-400">{q.topic}</span>}
          {multi && <span className="pill bg-amber-500/20 text-amber-200">Choose all that apply</span>}
        </div>
        <p className="mb-4 text-base font-semibold leading-snug text-white">{q.question}</p>
        <div className="space-y-2.5">
          {q.options.map((o) => {
            const picked = selected.includes(o.id)
            return (
              <button
                key={o.id}
                onClick={() => toggle(o.id)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                  picked
                    ? 'border-brand-400/60 bg-brand-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold ${
                    multi ? 'rounded' : 'rounded-full'
                  } border ${
                    picked
                      ? 'border-brand-300 bg-brand-400 text-slate-900'
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
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="btn-ghost flex-1"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        {index < questions.length - 1 ? (
          <button onClick={() => setIndex((i) => i + 1)} className="btn-primary flex-1">
            Next <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button onClick={submit} className="btn-primary flex-1">
            Submit <CheckIcon className="h-4 w-4" />
          </button>
        )}
      </div>
      {answeredCount < questions.length && index === questions.length - 1 && (
        <p className="mt-2 text-center text-[11px] text-amber-300/80">
          {questions.length - answeredCount} unanswered — they'll be marked incorrect.
        </p>
      )}
      <button
        onClick={submit}
        className="mt-2 text-center text-xs text-slate-500 hover:text-slate-300"
      >
        Submit exam now
      </button>
    </div>
  )
}
