import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer footer-dark bg-dark'>
      <ul className='nav justify-content-center border-bottom pb-1 mb-4'>
        <li className='nav-item'><NavLink to='/' className='nav-link px-2'>Home</NavLink></li>
        <li className='nav-item'><NavLink to='/' className='nav-link px-2'>Features</NavLink></li>
        <li className='nav-item'><NavLink to='/' className='nav-link px-2'>Pricing</NavLink></li>
        <li className='nav-item'><NavLink to='/' className='nav-link px-2'>FAQs</NavLink></li>
        <li className='nav-item'><NavLink to='/' className='nav-link px-2'>About</NavLink></li>
      </ul>
      <p className='text-center'>IsraelGodinezBravo© 2023 Company, Inc</p>
    </footer>
  )
}

export default Footer
