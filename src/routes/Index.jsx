import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import ItemDetail from '@/pages/ItemDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/items/:id' element={<ItemDetail />} />
    </Routes>
  )
}

export default RoutesIndex
