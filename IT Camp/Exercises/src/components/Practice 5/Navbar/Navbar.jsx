import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a >Your Logo</a>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a onClick={() => navigate('/')}>Home</a>
        </li>
        <li className='nav-item'>
          <a onClick={() => navigate('/posts')}>Posts</a>
        </li>
        <li className='nav-item'>
          <a onClick={() => navigate('/products')}>Products</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
