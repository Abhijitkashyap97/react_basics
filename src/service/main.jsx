import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './app.css'
import Services from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Services />
  </StrictMode>,
)

