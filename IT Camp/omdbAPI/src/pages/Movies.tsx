import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../components/Request'
// import { fetchData } from '../storage/storage'
// useEffect(() => {
//   const data = fetchData()
//   setMovies(data)
// }, [])

function Movies() {
  const [movies, setMovies] = useState<any>([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover object-top'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md: text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-4 px-8 text-[1.2rem]'>
              Play
            </button>
            <button className='border  text-white border-gray-300 py-4 px-8 ml-4 text-[1.2rem]'>
              Watch Later
            </button>
          </div>
          <p className='text-xl text-gray-400'>Released: {movie?.release_date}</p>
          <p className='w-full text-[1.7rem] mt-10 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Movies
