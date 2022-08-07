import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Start from './Start/Start'
import CardPage from './CardPage/CardPage'
import DrawerPage from './DrawerPage/DrawerPage'

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/card" exact element={<CardPage />} />
        <Route path="/drawer" exact element={<DrawerPage />} />
    </Routes>
  )
}

export default Pages