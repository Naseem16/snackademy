import { Link, useParams } from 'react-router-dom'
import { getCertification } from '../content'
import { getExams } from '../content/exams'
import { useProgress } from '../store/ProgressContext'
import { PageHeader } from '../components/Ui'
import { ChevronRight } from '../components/Icons'

export default function ExamsList() {
  const { certId } = useParams()
  const cert = getCertification(certId)
  const exams = certId ? getExams(certId) : []
  const { examScore } = useProgress()

  if (!cert)
    return (
      <div className="py-20 text-center text-slate-400">
        Not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  return (
    <div>
      <PageHeader
        title="Practice Exams"
        subtitle={cert.shortTitle}
        fallback={`/cert/${cert.id}`}
      />

      <p className="mb-4 text-sm leading-relaxed text-slate-300">
        Exam-style questions to test your readiness. You'll see your score and full
        explanations at the end. Retake as often as you like — your best score is saved.
      </p>

      {exams.length === 0 ? (
        <div className="card-surface p-6 text-center text-sm text-slate-400">
          Practice exams for this course are coming soon.
        </div>
      ) : (
        <div className="space-y-3">
          {exams.map((exam) => {
            const score = certId ? examScore(certId, exam.id) : undefined
            return (
              <Link
                key={exam.id}
                to={`/cert/${cert.id}/exam/${exam.id}`}
                className="card-surface block p-4 transition active:scale-[0.99]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white">{exam.title}</h3>
                    {exam.description && (
                      <p className="mt-0.5 text-xs text-slate-400">{exam.description}</p>
                    )}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                      <span className="pill bg-white/10">{exam.questions.length} questions</span>
                      {exam.suggestedMinutes && (
                        <span className="pill bg-white/10">~{exam.suggestedMinutes} min</span>
                      )}
                      {score && (
                        <span
                          className={`pill ${
                            score.best >= 70
                              ? 'bg-emerald-500/20 text-emerald-200'
                              : 'bg-rose-500/20 text-rose-200'
                          }`}
                        >
                          Best {score.best}%
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" />
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
