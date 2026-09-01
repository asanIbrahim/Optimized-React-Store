import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TrafficLight from '../component/Trafiic/TrafficLight'
import Table from '../component/table/Table'
import Count from '../component/Count/Count'
import NewTheme from './../component/theme/NewTheme';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<TrafficLight />} />
        <Route path="/table" element={<Table/>}/>
        <Route path='/count'  element={<Count/>}/>
        <Route path = '/theme' element={<NewTheme/>}/>
      </Routes>
    </BrowserRouter>
  )
}


