import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App.jsx'
import Welcome from './Welcome.jsx'
import Errorpage from './Errorpage.jsx'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Welcome />} errorElement={<Errorpage />} />
                <Route path="/game" element={<App />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes