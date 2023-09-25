import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Welcome from './Welcome.jsx'
import Errorpage from './Errorpage.jsx'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter([
  {
    path: "/game",
    element: <App />,
  },
  {
    path: "/",
    index: true,
    element: <Welcome />,
    errorElement: <Errorpage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
