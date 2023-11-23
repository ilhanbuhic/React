import React, { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
// import './header.css'
import './header.scss'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logoGreen.jpeg'
import { CartContext } from '../../store/CartContext'

function Header() {
  const navigate = useNavigate()

  const { cartSize } = useContext(CartContext)

  console.log(cartSize())

  return (
    <div className='headerContainer'>
      <div style={{ width: '8%' }}>
        <img
          onClick={() => navigate('/')}
          src={Logo}
          style={{ width: '100%', cursor: 'pointer' }}
          alt='logo'
        />
      </div>
      <div className='pageContainer'>
        <p onClick={() => navigate('/')}>All products</p>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/contact')}>Contact us</p>
      </div>
      <div className='iconContainer'>
        <div style={{ position: 'relative' }}>
          <BsCart3
            fontSize={25}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/cart')}
          />
          {cartSize() !== 0 && (
            <div
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                backgroundColor: 'red',
                borderRadius: '50%',
                width: 20,
                height: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {cartSize()}
            </div>
          )}
        </div>

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
