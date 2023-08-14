import React from 'react'

const Navbar = () => {
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
              <a className='nav-link active' aria-current='page' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Cart</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>About</a>
            </li>
          </ul>
        </div>
        <div className='container-fluid justify-content-center'>
          <form className='d-flex col-md-6' role='search'>
            <input className='form-control me-2' type='search' placeholder='What are you looking for?' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
