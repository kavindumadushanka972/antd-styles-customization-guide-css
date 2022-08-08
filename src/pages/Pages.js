import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Start from './Start/Start'
import CardPage from './CardPage/CardPage'
import DrawerPage from './DrawerPage/DrawerPage'
import SideMenuPage from './SideMenuPage/SideMenuPage'
import FormPage from './FormPage/FormPage'

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/card" exact element={<CardPage />} />
        <Route path="/drawer" exact element={<DrawerPage />} />
        <Route path="/sidemenu" exact element={<SideMenuPage />} />
        <Route path="/forms" exact element={<FormPage />} />
    </Routes>
  )
}

export default Pages