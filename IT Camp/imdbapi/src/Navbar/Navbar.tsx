import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import '../Navbar/Navbar.scss'

export const Navbar = () => {
  const [isInputExtended, setIsInputExtended] = useState(false)

  const handleButtonClick = () => {
    setIsInputExtended(!isInputExtended)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // ------------------ Loader ------------------
  // document.addEventListener('DOMContentLoaded', function () {
  //   const loadingSpinner = document.querySelector<HTMLElement>('.loading')
  //   const mainApp = document.querySelector<HTMLElement>('.mainApp')

  //   if (loadingSpinner && mainApp) {
  //     // Hide the loading spinner after a specified delay (in milliseconds)
  //     const delay = 2000 // Adjust the delay as needed (e.g., 2000 milliseconds or 2 seconds)
  //     loadingSpinner.style.display = 'block'

  //     setTimeout(() => {
  //       loadingSpinner.style.display = 'none'
  //     }, delay)
  //   }
  // })

  // ------------------ Loader ------------------

  return (
    <div className='navbar-container'>
      <div className='navbar p-3 items-start bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md'>
        <div className='flex-1'>
          <h1 className='normal-case text-xl'>Ilhan</h1>
        </div>
        <div className='flex-0'>
          <ul className='menu menu-horizontal gap-2 px-1'>
            <button
              onClick={handleButtonClick}
              className='btn  btn-ghost btn-circle'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <input
              type='text'
              placeholder=''
              className={`search-bar-input border-b border-gray-300 bg-transparent focus:outline-none ${
                isInputExtended ? 'extended' : ''
              }`}
            />
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Show</summary>
                <ul className='bg-base-100 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md'>
                  <li>
                    <a>Movies</a>
                  </li>
                  <li>
                    <a>Series</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <h1 className='banner-title'>Discover the Magic of Cinema</h1>
    </div>
  )
}
export default Navbar
