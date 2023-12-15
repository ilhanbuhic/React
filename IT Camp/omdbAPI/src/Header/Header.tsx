import React, { useState } from 'react'
import './header.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
const logo = require('/Users/ilhanbuhic/Desktop/Git/React/IT Camp/omdbAPI/src/assets/images/ilhan_logo.png')
const avatar = require('/Users/ilhanbuhic/Desktop/Git/React/IT Camp/omdbAPI/src/assets/images/avatar.png')

type BackgroundType = {
  [key: string]: string
}

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logOut } = UserAuth()
  console.log(user)

  const handleLogout = async () => {
    try {
      await logOut()
      console.log('logged out')
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  // Changing the navbar background
  const background: BackgroundType = {
    '/': require('../assets/images/banner.png'),
    '/why-us': require('../assets/images/bg.jpg'),
  }
  const backgroundImage: string = `url(${background[location.pathname]})`
  // Changing the navbar background

  // const [movies, setMovies] = useState<any>([])

  // Dynamic event handler
  const [handleSelect, setHandleSelect] = useState('')
  const HandlingSelectChanges: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setHandleSelect(event?.target.value)

    const navigationMap: { [key: string]: string } = {
      Movies: '/movies',
      Series: '/series',
    }

    const selectedValue = event.target.value
    const navigationPath = navigationMap[selectedValue]

    if (navigationPath) {
      setHandleSelect(selectedValue)
      navigate(`${navigationPath}`)
    }
  }
  // Dynamic event handler

  return (
    <div
      className={`navbar flex justify-between p-4`}
      // style={{ backgroundImage: backgroundImage, backgroundPosition: 'top' }}
    >
      <div className='ml-[20px]'>
        <img
          className='w-[110px] cursor-pointer'
          src={logo}
          alt='logo'
          onClick={() => navigate('/')}
        />
        <ul className='navbar-links'>
          {/* <li>
              <a onClick={() => navigate('/my-list')}>My List</a>
            </li> */}
          <li>
            {/* <a onClick={() => navigate('/why-us')} className='text-2xl'>Why Us </a> */}
            <a
              href='/why-us'
              className='display items-center ml-[30px] text-[15px]'
            >
              Why Us
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-rs'>
        <ul className='flex items-center gap-2'>
          {user ? (
            <>
              <li>
                {location.pathname !== '/why-us' && (
                  <select
                    className='text-[18px] bg-white bg-opacity-0 rounded-lg px-[5px]'
                    onChange={HandlingSelectChanges}
                  >
                    <option lang='en' label='Movies' value='Movies'></option>
                    <option lang='en' label='Series' value='Series'></option>
                    <option
                      disabled
                      selected
                      hidden
                      lang='unknown'
                      label='Show'
                      value='init-val'
                    ></option>
                  </select>
                )}
              </li>
              <div className='relative'>
                <img
                  src={avatar}
                  alt='Profile'
                  className='w-[35px] h-[35px] rounded-sm cursor-pointer ml-5'
                  onClick={toggleProfileDropdown}
                />
                {isProfileDropdownOpen && (
                  <div className='absolute bg-red-700 py-1 text-white rounded right-0 mt-2 w-48'>
                    <ul>
                      <li
                        className='py-2 text-center text-[12px] cursor-pointer'
                        onClick={handleLogout}
                      >
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <a href="/login">
                <button className='text-white text-[14px] mr-4'>Sign In</button>
                </a>
              <a href="/signup">
                <button className='bg-red-600 px-8 py-4 rounded cursor-pointer text-[14px] text-white'>
                  Sign Up
                </button>
                </a>
            </>
          )}
        </ul>
        <div className='flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            className='ml-[50px]'
          >
            <path d='M0 0h24v24H0z' fill='none'></path>
            <path
              d=' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z '
              style={{ fill: '#dbdbdb' }}
            ></path>
          </svg>

          <select
            className='select-language text-[14px] w-[40px] mr-[20px] bg-white bg-opacity-0 rounded-lg'
            onChange={HandlingSelectChanges}
          >
            <option selected lang='en' label='EN' value='en-RS'></option>
            <option lang='hr' label='HR' value='hr-RS'></option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default Navbar
