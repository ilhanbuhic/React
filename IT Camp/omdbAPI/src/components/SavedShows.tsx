import React from 'react'
import { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from './context/AuthContext'
import { db } from '../firebase.config'
import {
  updateDoc,
  doc,
  onSnapshot,
  onSnapshotsInSync,
  CollectionReference,
} from 'firebase/firestore'

const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()
  const movieRef = doc(db, 'users', `${user?.email}`)



  const slideLeft = () => {
    let slider: any = document.getElementById('slider')
    slider.scrollLeft = slider?.scrollLeft - 500
  }
  const slideRight = () => {
    let slider: any = document.getElementById('slider')
    slider.scrollLeft = slider?.scrollLeft + 500
  }

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(
        doc(db, 'users', user.email),
        (snapshot) => {
          setMovies(snapshot.data()?.savedMovies || [])
        }
      )

      // Cleanup the subscription when the component unmounts
      return () => unsubscribe()
    }
  }, [user?.email])

  return (
    <div className=''>
      <h2 className='text-white text-[16px] bg-black font-bold md:text-[20px] p-4'>
        My Shows
      </h2>
      <div className='relative bg-black flex items-center justify-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-10 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '
          size={40}
        />
        <div
          id={'slider'}
          className='bar w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative '
        >
          {movies.map((item: any, id: number) => (
            <div
              key={id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/original/${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100  text-white'>
                <p className='whitespace-normal max-w-full text-[10px] tracking-[1.2px] font-[500] md:text-[15px] flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteMovie(item.id)}
                  className='absolute text-[28px] text-gray-300 top-4 right-4'
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-12 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </div>
  )
}

export default SavedShows
