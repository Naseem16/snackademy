import { Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col">
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
      </main>
      <BadgeToast />
      <BottomNav />
    </div>
  )
}
