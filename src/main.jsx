import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from './AnimatedRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <AnimatedRoutes />
      </Router>
  </React.StrictMode>
)
