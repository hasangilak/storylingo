import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { StagewiseToolbar } from '@stagewise/toolbar-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <StagewiseToolbar />
    </BrowserRouter>
  </StrictMode>,
)
