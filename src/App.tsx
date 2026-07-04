import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import BadgeToast from './components/BadgeToast'
import ReloadPrompt from './components/ReloadPrompt'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import GroupPage from './pages/GroupPage'
import CertOverview from './pages/CertOverview'
import DomainPage from './pages/DomainPage'
import CardViewer from './pages/CardViewer'
import ExamsList from './pages/ExamsList'
import ExamRunner from './pages/ExamRunner'
import Achievements from './pages/Achievements'
import Bookmarks from './pages/Bookmarks'
import Settings from './pages/Settings'
import About from './pages/About'

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
          <Route path="/learn/:categoryId" element={<CategoryPage />} />
          <Route path="/group/:groupId" element={<GroupPage />} />
          <Route path="/cert/:certId" element={<CertOverview />} />
          <Route path="/cert/:certId/domain/:domainId" element={<DomainPage />} />
          <Route path="/cert/:certId/section/:sectionId" element={<CardViewer />} />
          <Route path="/cert/:certId/exams" element={<ExamsList />} />
          <Route path="/cert/:certId/exam/:examId" element={<ExamRunner />} />
          <Route path="/progress" element={<Achievements />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <footer className="mt-8 border-t border-white/5 pt-4 text-center text-[11px] text-slate-600">
          <Link to="/about" className="text-slate-500 hover:text-brand-400">
            About the developer
          </Link>
          <div className="mt-1">© 2026 Naseem Akhtar. All rights reserved.</div>
        </footer>
      </main>
      <BadgeToast />
      <BottomNav />
    </div>
  )
}
