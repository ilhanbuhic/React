import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface MovieProps {
  item: [object] | any
  key: number
}

const Movie = ({ item, key }: MovieProps) => {
  const [like, setLike] = useState(false)
  const itemCheck = item?.title && item?.backdrop_path

  return itemCheck ? (
    <div
      key={key}
      className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
    >
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100  text-white'>
        <p className='whitespace-normal max-w-full text-[10px] tracking-[1.2px] font-[500] md:text-[15px] flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p
          className={
            like
              ? 'absolute top-4 left-[-18px] text-gray-300 text-[25px]'
              : 'absolute top-4 left-[-18px] text-gray250 text-[25px]'
          }
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  ) : null
}

export default Movie
