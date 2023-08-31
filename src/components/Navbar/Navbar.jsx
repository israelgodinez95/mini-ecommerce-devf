import { React, useState } from 'react'
import { useItemContext } from '@/hooks/useItemContext'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const { items } = useItemContext()
  const [inputValue, setInputValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const handleInputChange = (event) => {
    const newInputValue = event.target.value.toLowerCase()
    setInputValue(newInputValue)

    const newFilteredData = items.filter(item => item.product_name.toLowerCase().includes(newInputValue))
    setFilteredData(newFilteredData)
  }
  const handleItemClick = (item) => {
    setInputValue('')
    setFilteredData([])
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-4'>
        <a className='navbar-brand' to='/'>MINIshop</a>

        <div className='container-fluid justify-content-center'>
          <form className='d-flex col-md-10' role='search'>
            <div className='container'>
              <input className='form-control me-2' type='text' value={inputValue} onChange={handleInputChange} placeholder='What are you looking for?' aria-label='Search' />
              <ul id='filtered-item-list' className='autocomplete-list col-md-5'>
                {filteredData.map((item, index) => (
                  <li key={item.id} onClick={() => handleItemClick(item)}>
                    <Link to={`/items/${item.id}`}>{item.product_name + ':' + (index + 1)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/secret'>Secret</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/signup'>Signup</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
