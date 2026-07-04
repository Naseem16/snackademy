import { Link, useParams } from 'react-router-dom'
import { getGroup } from '../content'
import { PageHeader } from '../components/Ui'
import CertCard from '../components/CertCard'

export default function GroupPage() {
  const { groupId } = useParams()
  const found = getGroup(groupId)

  if (!found)
    return (
      <div className="py-20 text-center text-slate-400">
        Not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  const { category, group } = found

  return (
    <div>
      <PageHeader
        title={group.title}
        subtitle={category.title}
        fallback={`/learn/${category.id}`}
      />

      {group.hasPracticeExams && (
        <p className="mb-4 rounded-xl border border-white/10 bg-slate-800/40 px-3 py-2 text-xs text-slate-400">
          🧭 Each certification includes <span className="font-semibold text-slate-200">practice exams</span> — open a course to find them.
        </p>
      )}

      <div className="space-y-3">
        {group.certIds.map((id) => (
          <CertCard key={id} certId={id} />
        ))}
      </div>
    </div>
  )
}
