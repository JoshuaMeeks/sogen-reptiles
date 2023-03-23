import React from 'react'
import './Card.css';

export const Card = () => {
  return (
    <div className='card'>
      <img src="/IMG_0405.jpg" alt="name" />
      <div className="description">
        age weight sex<br/>
        price<br/>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
