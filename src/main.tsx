import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterRoot } from './router/RouterRoot.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterRoot />
  </React.StrictMode>,
)
