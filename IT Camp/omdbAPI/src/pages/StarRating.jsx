import React from 'react'
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from 'react-icons/io'

const StarRating = ({ starRating }) => {
  const normalizedPercentage = Math.min(1, Math.max(0, starRating))

  const normalizedScore = normalizedPercentage * 0.5

  const stars = []
  const starCount = 5

  const filledStars = Math.floor(starRating)
  const hasHalfStar = starRating - filledStars >= 0.5

  for (let i = 0; i < starCount; i++) {
    const isFilled = i / starCount < normalizedScore

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


