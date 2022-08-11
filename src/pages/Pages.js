import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Start from './Start/Start'
import ThemePage from './ThemePage/ThemePage'
import CardPage from './CardPage/CardPage'
import DrawerPage from './DrawerPage/DrawerPage'
import SideMenuPage from './SideMenuPage/SideMenuPage'
import FormPage from './FormPage/FormPage'
import ModalPage from './ModalPage/ModalPage'
import ThemeSwitcherPage from './ThemeSwitcherPage/ThemeSwitcherPage'
import StepsPage from './StepsPage/StepsPage'
import SwitchPage from './SwitchPage/SwitchPage'
import TablePage from './TablePage/TablePage'
import CountdownPage from './CountdownPage/CountdownPage'

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/theme" exact element={<ThemePage />} />
        <Route path="/theme-switch" exact element={<ThemeSwitcherPage />} />
        <Route path="/card" exact element={<CardPage />} />
        <Route path="/drawer" exact element={<DrawerPage />} />
        <Route path="/sidemenu" exact element={<SideMenuPage />} />
        <Route path="/forms" exact element={<FormPage />} />
        <Route path="/modal" exact element={<ModalPage />} />
        <Route path="/steps" exact element={<StepsPage />} />
        <Route path="/switch" exact element={<SwitchPage />} />
        <Route path="/table" exact element={<TablePage />} />
        <Route path="/countdown" exact element={<CountdownPage />} />
    </Routes>
  )
}

export default Pages