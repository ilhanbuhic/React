import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../components/context/AuthContext'
import { db } from '../firebase.config'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

interface MovieProps {
  item: [object] | any
  key: number
}

const Movie = ({ item, key }: MovieProps) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const { user } = UserAuth()
  const movieID = doc(db, 'users', `${user?.email}`)
  const itemCheck = item?.title && item?.backdrop_path

  const saveShow = async () => {
    if (user) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      })
    }
  }

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
          onClick={saveShow}
          className={
            like
              ? 'absolute top-4 left-[10px] text-gray-300 text-[25px]'
              : 'absolute top-4 left-[10px] text-gray250 text-[25px]'
          }
        >
          {like ? <FaHeart style={{fill: '#df0000'}}/> : <FaRegHeart />}
        </p>
      </div>
    </div>
  ) : null
}

export default Movie
