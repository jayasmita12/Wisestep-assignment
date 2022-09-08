import React from 'react'
import {Routes,Route} from "react-router-dom"
import { AllOutlets } from './AllOutlets'
import { AllScooty } from './AllScooty'
import { HomePage } from './HomePage'
import { NavbarBasic } from './Navbar'


export const AllRoutes = () => {
  return (
    <div>
        <NavbarBasic/>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/alloutlets" element={<AllOutlets/>}></Route>
            <Route path="/honda" element={<AllScooty/>}></Route>
        </Routes>
    </div>
  )
}
