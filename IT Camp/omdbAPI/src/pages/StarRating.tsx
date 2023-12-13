import React from 'react'
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from 'react-icons/io'

const StarRating = ({ starRating }: { starRating: number }) => {
  const stars: JSX.Element[] = []
  const starCount: number = 5

  const filledStars: number = Math.floor(starRating)
  const hasHalfStar: boolean = starRating - filledStars >= 0.5

  for (let i = 0; i < starCount; i++) {
    if (i < filledStars) {
      stars.push(
        <IoIosStar
          key={i}
          style={{ fontSize: '1.7rem', margin: 0, fill: '#A92F43' }}
        />
      )
    } else if (hasHalfStar && i === filledStars) {
      stars.push(
        <IoIosStarHalf
          key={i}
          style={{ fontSize: '1.7rem', margin: 0, fill: '#A92F43' }}
        />
      )
    } else {
      stars.push(
        <IoIosStarOutline key={i} style={{ fontSize: '1.7rem', margin: 0 }} />
      )
    }
  }

  return <div className='flex gap-1'>{stars}</div>
}

export default StarRating
