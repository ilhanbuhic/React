import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Request'
import StarRating from './StarRating'
// import { fetchData } from '../storage/storage'
// useEffect(() => {
//   const data = fetchData()
//   setMovies(data)
// }, [])

function MoviePoster() {
  const [movies, setMovies] = useState<any>([])
  const [randomMovie, setRandomMovie] = useState<any>(null)
  const releaseDate = randomMovie ? new Date (randomMovie.release_date).getFullYear() : null

  const logFillPercentage = (fillPercentage: number | undefined): React.ReactNode => {
    console.log('Logging the fillPercentage:', fillPercentage);
    return null
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      console.log(response.data.results)

      setMovies(response.data.results)
      setRandomMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      )
    })
  }, [])

  const TruncateString = (str: string, num: number) => {
    const [isTruncated, setIsTruncated] = useState(true)

    const toggleTruncate = () => {
      setIsTruncated(!isTruncated)
    }

    if (str?.length > num) {
      return (
        <>
          {isTruncated ? `${str.slice(0, num)}` : str}
          <span
            className='w-full cursor-pointer text-[1.8rem] mt-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'
            onClick={toggleTruncate}
          >
            {isTruncated ? ' ... Read more' : ' Show less'}
          </span>
        </>
      )
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
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          
        />
        <div className='absolute mt-[50px] w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl mb-[15px] md:text-5xl font-bold'>
            {randomMovie?.title}
          </h1>
          
          <div className='mt-[10px] flex items-center mb-[30px]'>
            <StarRating starRating={randomMovie?.vote_average * 0.5}/>
            {logFillPercentage(randomMovie?.vote_average * 0.5)}
          <p className='text-2xl text-gray-400 mx-[10px] inline'>
            {releaseDate}
          </p>
          <div className='text-[2.1rem] font-fahkwang tracking-[1.5px] text-black  bg-[#c2c2c2] rounded-[2px] w-[120px] inline-flex justify-center align-middle gap-[2px]'>
          <span className='font-[400]'>ULTRA </span><span className='font-bold'> HD 4K</span>
          </div>
          <p className='text-[1.5rem] font-[500] font-fahkwang  text-black bg-[#c2c2c2] rounded-[2px] w-[32px] text-center ml-[10px]'>5.1</p>
          </div>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-4 px-8 text-[1.2rem]'>
              Play
            </button>
            <button className='border  text-white border-gray-300 py-4 px-8 ml-4 text-[1.2rem]'>
              Watch Later
            </button>
          </div>

          <p className='w-full text-[1.7rem] mt-10 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {TruncateString(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePoster
