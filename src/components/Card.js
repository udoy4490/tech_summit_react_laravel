import React from 'react'
import card_image from "../images/card.webp";
import "./card.css"
import GreenButton from './GreenButton';
import Rating from './Rating';
function Card() {
  return (
    <div className="card">
      <img src={card_image} className="card_image" alt="card image" />

      <div className="card_info">
        <h3>Card Title</h3>
        <p className="price">Price: 1200tk</p>
        <Rating rating={3} />
      </div>
      <div className="card_footer">
        <GreenButton link='#' text='View More' />
      </div>
    </div>
  );
}

export default Card