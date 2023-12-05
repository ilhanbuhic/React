import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from '../pages/Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface RowProps {
  title: string
  fetchURL: string
}

function Row({ title, fetchURL }: RowProps) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])
  console.log(movies)

  return (
    <>
      <h2 className='text-white font-bold md:text-[20px] p-4'>{title}</h2>
      <div className='relative flex items-center justify-center group'>
        <MdChevronLeft className='bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40}/>
        <div
          id={'slider'}
          className='bar w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative '
        >
          {movies.map((item: [object] | any, id: number) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight className='bg-white right-12 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </>
  )
}

export default Row
