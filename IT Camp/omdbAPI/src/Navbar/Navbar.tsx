import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.scss'
import { getTopMovies } from '../axios/api'

export const Navbar = () => {
  const [movies, setMovies] = useState<any>([])
  const [isInputExtended, setIsInputExtended] = useState(false)

  const handleButtonClick = () => {
    setIsInputExtended(!isInputExtended)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [closeDetails, setCloseDetails] = useState(false)

  useEffect(() => {
    const details = document.querySelector('details')

    const handleWindowClick = () => {
      if (details && details.open) {
        setCloseDetails(!closeDetails)
        details.open = !closeDetails
      }
    }

    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [closeDetails])

  // -------------------------------------------------------------------- //
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopMovies()
      setMovies(data)
    }
    fetchData()
  }, [])
  // -------------------------------------------------------------------- //
  console.log(movies)
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
                stroke='white'
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
                <ul className='bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md'>
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0z' fill='none'></path>
            <path
              d=' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z '
              style={{ fill: '#dbdbdb' }}
            ></path>
          </svg>

          <select className='select-language bg-white bg-opacity-0 rounded-lg '>
            <option selected lang='en' label='EN' value='en-RS'></option>
            <option lang='hr' label='HR' value='hr-RS'></option>
          </select>
        </div>
      </div>
      <h1 className='banner-title'>Discover the Magic of Cinema</h1>
    </div>
  )
}
export default Navbar
