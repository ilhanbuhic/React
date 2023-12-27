import React from 'react'
import SavedShows from '../components/SavedShows'
const bg = require('../assets/images/movie-list-bg.jpg')
const avatar = require('/Users/ilhanbuhic/Desktop/Git/React/IT Camp/omdbAPI/src/assets/images/avatar.png')

const Account = () => {
  return (
    <div className='flex justify-around'>
      <div className='flex-shrink-0 w-[10%] bg-red-800 rounded p-4'>
        <div className='text-[25px] text-white mb-6 mt-[70px]'>Account</div>
        <div className='flex flex-col space-y-[140px]'>
          <ul className='space-y-2'>
            <li className='text-3xl cursor-pointer text-white px-4 py-3 bg-gray-800 rounded'>
              Settings
            </li>
            <li className='text-3xl cursor-pointer text-white px-4 py-3 bg-gray-800 rounded'>
              Profile
            </li>
          </ul>

          <img
            src={avatar}
            alt='Profile'
            className='w-[35px] h-[35px] rounded-sm cursor-pointer ml-1'
          />
        </div>
      </div>

      <div className='w-[90%] relative'>
        <img
          className='w-full h-[400px] object-cover'
          src={bg}
          alt='background'
        />
        <div className='bg-black/50 absolute top-0 left-0 w-full h-[400px]'>
          <div className='absolute top-[20%] pl-4'>
            <h1 className='text-5xl mt-[70px] font-bold text-white'>
              My Movies
            </h1>
          </div>
        </div>
        {/* Include SavedShows or any other content here */}
      </div>
    </div>
  )
}

export default Account
