import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import RoutesApp from './rotas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
)
