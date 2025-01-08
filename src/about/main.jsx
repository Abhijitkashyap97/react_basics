import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './about.css'
import About from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About/>
  </StrictMode>,
)