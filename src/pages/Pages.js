import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Dashboard />} />
    </Routes>
  )
}

export default Pages