import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAdminContext } from '@/hooks/useAdminContext'
import { About, Dashboard, Home, ItemDetail, Login, Secret, Signup } from '@/pages'

const RoutesIndex = () => {
  const { isAdmin } = useAdminContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route
        path='/dashboard' element={
          isAdmin
            ? <Dashboard />
            : <Navigate to='/' />
        }
      />
      <Route path='/items/:id' element={<ItemDetail />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/secret' element={
        isAdmin
          ? <Secret />
          : <Navigate to='/' />
      }
      />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
