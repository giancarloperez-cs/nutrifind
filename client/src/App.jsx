import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import RecipeBrowser from "./pages/RecipeBrowser"
import Navbar from "./components/navbar"
import Hello from "./components/Hello"
import Hero from "./components/Hero"
import Fruits from "./components/Fruits"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipeBrowser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
