import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import './header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div>
        <p onClick={() => navigate('/')}>Logo</p>
      </div>
      <div className='page-container'>
        <ul>
          <li onClick={() => navigate('/')}>
            <a href=''>All products</a>
          </li>
          <li onClick={() => navigate('/about')}>
            <a href=''>About</a>
          </li>
          <li onClick={() => navigate('/contact')}>
            <a href=''>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='icon-container'>
        <BsCart3
          fontSize={25}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/cart')}
        />
        <FaRegUser
          fontSize={25}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/profile')}
        />
      </div>
    </div>
  )
}

export default Header
