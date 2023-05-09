import React from 'react';
import './Cart.css';

export const Cart = ({ cart }) => {
  return (
    <div className="title-container">
      <h1 className="title">cart</h1>
        {cart.map(item => {
          return (
            <div className="item-container">
              <p>{item.morph}</p>
              <p className="cart-price">{item.price}</p>
            </div>
          )
        })}
    </div>
  )
}

