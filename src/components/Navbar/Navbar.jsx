import { React, useState } from 'react'
import { useItemContext } from '@/hooks/useItemContext'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { items } = useItemContext()
  const [inputValue, setInputValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const listElement = document.getElementsByClassName('autocomplete-list')
  console.log(items)
  const handleInputChange = (event) => {
    const newInputValue = event.target.value.toLowerCase()
    setInputValue(newInputValue)

    const newFilteredData = items.filter(item => item.product_name.toLowerCase().includes(newInputValue))
    setFilteredData(newFilteredData)

    listElement.style.display = 'block'
  }
  const handleItemClick = (item) => {
    setInputValue(item)
    setFilteredData([])
  }

  console.log(filteredData)
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-4'>
        <a className='navbar-brand' to='/'>MINIshop</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Cart</a>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
        <div className='container-fluid justify-content-center'>
          <form className='d-flex col-md-6' role='search'>
            <input className='form-control me-2' type='text' value={inputValue} onChange={handleInputChange} placeholder='What are you looking for?' aria-label='Search' />
            <ul className='autocomplete-list'>
              {filteredData.map((item, index) => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <p>{item.product_name + ':' + (index + 1)}</p>
                </li>
              ))}
            </ul>
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
