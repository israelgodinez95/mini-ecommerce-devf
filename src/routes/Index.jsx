import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Dashboard, Home, ItemDetail, Login, Secret, Signup } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/items/:id' element={<ItemDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
