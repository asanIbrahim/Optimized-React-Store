import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TrafficLight from '../component/Trafiic/TrafficLight'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<TrafficLight />} />
      </Routes>
    </BrowserRouter>
  )
}


