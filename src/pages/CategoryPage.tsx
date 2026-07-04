import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../content'
import { PageHeader } from '../components/Ui'
import { ChevronRight } from '../components/Icons'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)

  if (!category)
    return (
      <div className="py-20 text-center text-slate-400">
        Not found. <Link to="/" className="text-brand-400">Home</Link>
      </div>
    )

  return (
    <div>
      <PageHeader title={category.title} subtitle={category.subtitle} fallback="/" />

      <div className="space-y-3">
        {category.groups.map((group) => {
          const content = (
            <div className="flex items-center gap-4 p-4">
              <span className="text-3xl">{group.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">{group.title}</h3>
                  {!group.available && (
                    <span className="pill bg-white/10 text-amber-200">Coming soon</span>
                  )}
                </div>
                <p className="text-xs text-slate-400">{group.subtitle}</p>
                {group.available && (
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {group.certIds.length} {group.certIds.length === 1 ? 'course' : 'courses'}
                    {group.hasPracticeExams ? ' · practice exams' : ''}
                  </p>
                )}
              </div>
              {group.available && <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" />}
            </div>
          )

          if (!group.available)
            return (
              <div key={group.id} className="card-surface opacity-60">
                {content}
              </div>
            )

          return (
            <Link
              key={group.id}
              to={`/group/${group.id}`}
              className="card-surface block transition active:scale-[0.99]"
            >
              {content}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
