import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LanguageProvider, useLang } from "./context/LanguageContext"
import TopBar from "./components/TopBar"
import BottomNav from "./components/BottomNav"
import NearMePage from "./pages/NearMePage"
import BenefitsPage from "./pages/BenefitsPage"
import QuickMealsPage from "./pages/QuickMealsPage"

function Shell() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen bg-[#FEFAE0] flex flex-col max-w-[390px] mx-auto relative">
      <TopBar />
      <main className="flex-1 pb-20">
        <Routes>
          <Route path="/" element={<Navigate to="/near-me" replace />} />
          <Route path="/near-me" element={<NearMePage />} />
          <Route path="/benefits/*" element={<BenefitsPage />} />
          <Route path="/meals" element={<QuickMealsPage />} />
          <Route path="*" element={<Navigate to="/near-me" replace />} />
        </Routes>
      </main>
      <BottomNav lang={lang} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  )
}
