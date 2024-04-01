import React, { useState } from 'react';

const RatingStars = ({ count, value }) => {
  const [hovered, setHovered] = useState(false);
  const stars = Array.from({ length: count }, (_, i) => i + 1);
  const fullStarColor = "#ffd700"; 
  const emptyStarColor = "#000";
  const starOutline = "0 0 4px #000"; 

  return (
    <div className="rating-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {stars.map((star, index) => (
        <span
          key={star}
          className={`star ${hovered ? 'animate' : ''}`}
          style={{
            animationDelay: `${index * 100}ms`,
            color: star <= value ? fullStarColor : emptyStarColor,
            textShadow: starOutline, // Applique le contour
          }}
        >
          {'★'}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
