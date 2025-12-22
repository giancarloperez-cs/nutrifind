import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import RecipeBrowser from "./pages/RecipeBrowser"
import Navbar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipeBrowser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
