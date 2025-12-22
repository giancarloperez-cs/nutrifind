import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // Tailwind CSS entry point

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
