import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ fillPercentage }) => {
  // Ensure fillPercentage is within the range [0, 100]
  const normalizedPercentage = Math.min(100, Math.max(0, fillPercentage));

  return (
    <div className="star-rating">
      <FontAwesomeIcon icon={faStarRegular} className="star-icon" />
      <div className="star-fill" style={{ width: `${normalizedPercentage}%` }}>
        <FontAwesomeIcon icon={faStar} className="star-icon filled" />
      </div>
    </div>
  );
};

export default StarRating;
