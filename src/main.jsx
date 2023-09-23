import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Welcome from './Welcome.jsx'

const router = createBrowserRouter([
  {
    path: "/game",
    element: <App />,
  },
  {
    path: "/",
    index: true,
    element: <Welcome />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
