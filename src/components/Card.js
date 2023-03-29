import React from 'react'
import './Card.css';


export const Card = ({ img, weight, sexIcon, price }) => {
  return (
    <div className='card'>
      <img src={img} alt="name" />
      <button className="view-btn">View</button>
      {/* <div className="description">
        {sexIcon} weight: {weight}g<br/>
        <div className='cart-container'>
          ${price}<br/>
          <button>Add to cart</button>
        </div>
      </div> */}
    </div>
  )
}
