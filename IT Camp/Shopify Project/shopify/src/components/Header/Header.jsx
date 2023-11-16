import React, { useEffect } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logoGreen.jpeg'
import './header.scss'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div style={{ width: '8%' }}>
        <img
          onClick={() => navigate('/')}
          src={Logo}
          style={{ width: '100%', cursor: 'pointer' }}
          alt='logo'
        />
      </div>
      <div className='page-container'>
        <p onClick={() => navigate('/')}>All products</p>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/contact')}>Contact us</p>
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
