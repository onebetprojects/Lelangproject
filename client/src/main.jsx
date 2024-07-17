import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ContextProvider from './contexts/Context.jsx'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ContextProvider>
    <RouterProvider  router={router} />
    <ToastContainer />
  </ContextProvider>
  // </React.StrictMode>,
)
