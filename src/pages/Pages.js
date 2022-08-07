import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Start from './Start/Start'

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Start />} />
    </Routes>
  )
}

export default Pages