import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import BadgeToast from './components/BadgeToast'
import ReloadPrompt from './components/ReloadPrompt'
import Home from './pages/Home'
import CertOverview from './pages/CertOverview'
import DomainPage from './pages/DomainPage'
import CardViewer from './pages/CardViewer'
import Achievements from './pages/Achievements'
import Bookmarks from './pages/Bookmarks'
import Settings from './pages/Settings'

// Reset scroll to the top whenever the route changes, so a new page never
// inherits the previous page's scroll position.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.scrollingElement?.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col">
      <ScrollToTop />
      <ReloadPrompt />
      <main className="flex-1 px-4 pb-24 pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cert/:certId" element={<CertOverview />} />
          <Route path="/cert/:certId/domain/:domainId" element={<DomainPage />} />
          <Route path="/cert/:certId/section/:sectionId" element={<CardViewer />} />
          <Route path="/progress" element={<Achievements />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <footer className="mt-8 border-t border-white/5 pt-4 text-center text-[11px] text-slate-600">
          © 2026. All rights reserved.
        </footer>
      </main>
      <BadgeToast />
      <BottomNav />
    </div>
  )
}
