import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/logo_ibk.png'

// set favicon dynamically so the built asset is used
const setFavicon = (href) => {
  const link = document.querySelector("link[rel~='icon']") || document.createElement('link')
  link.rel = 'icon'
  link.href = href
  if (!document.querySelector("link[rel~='icon']")) document.getElementsByTagName('head')[0].appendChild(link)
}

setFavicon(logo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
