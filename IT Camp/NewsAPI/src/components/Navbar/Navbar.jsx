import React from 'react'
import '../Navbar/Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/* <img src='/path-to-your-logo.png' alt='Logo' /> */}
        <span>Your Logo</span>
      </div>
      <ul className='navbar-links'>
        <li>
          <a href='/about'>About Us</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
