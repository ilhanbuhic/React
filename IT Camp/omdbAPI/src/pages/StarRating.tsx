import React from 'react';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

const StarRating = ({ fillPercentage }: any) => {
  // Ensure fillPercentage is within the range [0, 1]
  const normalizedPercentage = Math.min(1, Math.max(0, fillPercentage));

  const stars = [];
  const starCount = 5; // Total number of stars

  for (let i = 0; i < starCount; i++) {
    // Determine whether to show a filled or outlined star based on the fillPercentage
    const isFilled = i / starCount < normalizedPercentage;

    stars.push(
      <span key={i}>
        {isFilled ? <IoIosStar style={{fontSize: '1.3rem', margin: 0, fill: 'red'}}/> : <IoIosStarOutline style={{fontSize: '1.3rem', margin: 0}}/>}
      </span>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
