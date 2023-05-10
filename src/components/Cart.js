import React from 'react';
import './Cart.css';

export const Cart = ({ cart }) => {
  let total = cart.map(item => item.price);
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
        <div className="item-container">
          <p>Flatrate shipping</p>
          <p className="cart-price">50</p>
        </div>
        <div className="item-container">
          <p>Total</p>
          <p className="cart-price">{total.map(Number).reduce((acc, curr) => acc + curr, 0) + 50}</p>
        </div>
    </div>
  )
}

