import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SantiagoHub from './components/hub/SantiagoHub'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SantiagoHub />
  </StrictMode>,
)
