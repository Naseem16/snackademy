import { NavLink } from 'react-router-dom'
import { HomeIcon, TrophyIcon, BookmarkIcon, GearIcon } from './Icons'

const items = [
  { to: '/', label: 'Learn', Icon: HomeIcon, end: true },
  { to: '/progress', label: 'Achievements', Icon: TrophyIcon, end: false },
  { to: '/bookmarks', label: 'Saved', Icon: BookmarkIcon, end: false },
  { to: '/settings', label: 'Settings', Icon: GearIcon, end: false },
]

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-slate-900/90 backdrop-blur-lg">
      <div
        className="mx-auto flex max-w-md items-stretch justify-around"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {items.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${
                isActive ? 'text-brand-400' : 'text-slate-400 hover:text-slate-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''} transition`} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
