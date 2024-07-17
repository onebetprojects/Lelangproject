import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ContextProvider from './contexts/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ContextProvider>
    <RouterProvider  router={router} />
  </ContextProvider>
  // </React.StrictMode>,
)
