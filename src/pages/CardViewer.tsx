import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getCertification, getSection, flattenSections } from '../content'
import { cardKey } from '../content/types'
import { useProgress } from '../store/ProgressContext'
import CardView from '../components/CardView'
import { BookmarkIcon, ChevronLeft, ChevronRight, CheckIcon } from '../components/Icons'

export default function CardViewer() {
  const { certId, sectionId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const cert = getCertification(certId)
  const found = cert ? getSection(cert, sectionId!) : undefined

  const {
    state,
    completeCard,
    toggleBookmark,
    isBookmarked,
    recordQuiz,
    quizResult,
    setLastVisited,
  } = useProgress()

  const [index, setIndex] = useState(() => {
    const cardParam = searchParams.get('card')
    if (cardParam && cert && found) {
      const i = found.section.cards.findIndex((c) => c.id === cardParam)
      if (i >= 0) return i
    }
    const last = certId ? state.lastVisited[certId] : undefined
    return last && last.sectionId === sectionId ? last.cardIndex : 0
  })
  const [dir, setDir] = useState(1)
  const [finished, setFinished] = useState(false)

  const cards = found?.section.cards ?? []
  const total = cards.length
  const safeIndex = Math.min(index, Math.max(0, total - 1))
  const card = cards[safeIndex]

  // Next section in reading order (for "Continue").
  const nextSection = useMemo(() => {
    if (!cert) return undefined
    const all = flattenSections(cert)
    const pos = all.findIndex((x) => x.section.id === sectionId)
    return pos >= 0 && pos < all.length - 1 ? all[pos + 1] : undefined
  }, [cert, sectionId])

  useEffect(() => {
    if (certId && sectionId && !finished)
      setLastVisited(certId, sectionId, safeIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeIndex, certId, sectionId, finished])

  if (!cert || !found || total === 0)
    return (
      <div className="py-20 text-center text-slate-400">
        Section not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  const key = cardKey(cert.id, found.section.id, card.id)

  const goNext = () => {
    if (card.kind !== 'quiz') completeCard(key)
    if (safeIndex >= total - 1) {
      completeCard(key)
      setFinished(true)
      return
    }
    setDir(1)
    setIndex(safeIndex + 1)
  }

  const goPrev = () => {
    if (safeIndex <= 0) return
    setDir(-1)
    setIndex(safeIndex - 1)
  }

  if (finished) {
    return (
      <FinishScreen
        certId={cert.id}
        sectionTitle={found.section.title}
        domainId={found.domain.id}
        next={
          nextSection
            ? {
                certId: cert.id,
                sectionId: nextSection.section.id,
                title: nextSection.section.title,
              }
            : undefined
        }
        onReplay={() => {
          setFinished(false)
          setDir(-1)
          setIndex(0)
        }}
      />
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 -mx-4 mb-3 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <button
            aria-label="Back"
            onClick={() => navigate(`/cert/${cert.id}/domain/${found.domain.id}`)}
            className="-ml-1 rounded-lg p-1.5 text-slate-300 hover:bg-white/10"
          >
            <ChevronLeft />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-bold text-white">{found.section.title}</h1>
            <p className="truncate text-[11px] text-slate-400">{found.chapter.title}</p>
          </div>
          <button
            aria-label="Bookmark"
            onClick={() => toggleBookmark(key)}
            className={`rounded-lg p-1.5 transition ${
              isBookmarked(key) ? 'text-brand-400' : 'text-slate-400 hover:bg-white/10'
            }`}
          >
            <BookmarkIcon filled={isBookmarked(key)} />
          </button>
        </div>
        {/* progress dots */}
        <div className="mt-2 flex gap-1">
          {cards.map((c, i) => {
            const k = cardKey(cert.id, found.section.id, c.id)
            const done = !!state.completedCards[k]
            return (
              <button
                key={c.id}
                aria-label={`Go to card ${i + 1}`}
                onClick={() => {
                  setDir(i > safeIndex ? 1 : -1)
                  setIndex(i)
                }}
                className={`h-1.5 flex-1 rounded-full transition ${
                  i === safeIndex
                    ? 'bg-brand-400'
                    : done
                      ? 'bg-emerald-500/70'
                      : 'bg-white/15'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Card */}
      <div className="relative flex-1">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={card.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.22 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) goNext()
              else if (info.offset.x > 80) goPrev()
            }}
            className="card-surface min-h-[55vh] cursor-grab touch-pan-y p-5 active:cursor-grabbing"
          >
            <CardView
              card={card}
              savedQuizCorrect={quizResult(key)?.correct}
              onQuizAnswer={(correct) => recordQuiz(key, correct)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer controls */}
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={goPrev}
          disabled={safeIndex === 0}
          className="btn-ghost flex-1"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <span className="shrink-0 text-xs font-medium text-slate-400">
          {safeIndex + 1} / {total}
        </span>
        <button onClick={goNext} className="btn-primary flex-1">
          {safeIndex >= total - 1 ? (
            <>
              Finish <CheckIcon className="h-4 w-4" />
            </>
          ) : (
            <>
              Next <ChevronRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <p className="mt-2 text-center text-[11px] text-slate-500">
        Swipe left / right to navigate
      </p>
    </div>
  )
}

function FinishScreen({
  sectionTitle,
  certId,
  domainId,
  next,
  onReplay,
}: {
  sectionTitle: string
  certId: string
  domainId: string
  next?: { certId: string; sectionId: string; title: string }
  onReplay: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-[60vh] flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-5xl shadow-2xl"
      >
        🎉
      </motion.div>
      <h2 className="text-xl font-extrabold text-white">Section complete!</h2>
      <p className="mt-1 max-w-xs text-sm text-slate-400">
        You finished <span className="font-semibold text-slate-200">{sectionTitle}</span>. Nice
        work — keep the streak alive!
      </p>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2">
        {next ? (
          <Link to={`/cert/${next.certId}/section/${next.sectionId}`} className="btn-primary">
            Next: {next.title} <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link to={`/cert/${certId}`} className="btn-primary">
            🏁 You reached the end!
          </Link>
        )}
        <Link to={`/cert/${certId}/domain/${domainId}`} className="btn-ghost">
          Back to domain
        </Link>
        <button onClick={onReplay} className="text-xs text-slate-500 hover:text-slate-300">
          ↺ Review this section again
        </button>
      </div>
    </motion.div>
  )
}
