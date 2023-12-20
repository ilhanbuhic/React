import React from 'react'
import SavedShows from '../components/SavedShows'
const bg = require('../assets/images/movie-list-bg.jpg')

const Account = () => {
  return (
    <div>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src={bg}
          alt='background'
        />
        <div className='bg-black/50 absolute top-0 left-0 w-full h-[400px]'>
          <div className='absolute top-[20%] pl-4'>
            <h1 className='text-5xl mt-[70px] font-bold'>My Movies</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account
