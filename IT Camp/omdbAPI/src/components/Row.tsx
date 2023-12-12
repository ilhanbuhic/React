import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from '../pages/Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface RowProps {
  title: string
  fetchURL: string
  rowID: string
}

function Row({ title, fetchURL, rowID }: RowProps) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])

  const slideLeft = () => {
    let slider: any = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider?.scrollLeft - 500
  }
  const slideRight = () => {
    let slider: any = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider?.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white text-[16px] bg-black font-bold md:text-[20px] p-4'>
        {title}
      </h2>
      <div className='relative bg-black flex items-center justify-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='bar w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative '
        >
          {movies.map((item: [object], id: number) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-12 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default Row
