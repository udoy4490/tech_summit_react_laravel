import React from 'react'

function Rating({ rating }) {
  return (
    <p className="rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <span>⭐</span>
        ))}
    </p>
  );
}

export default Rating