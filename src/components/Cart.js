import React from 'react';
import './Cart.css';

export const Cart = ({ cart, setCart }) => {
  let total = cart.map(item => item.price);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  {if (cart.length === 0) {
    return (
      <div className="title-container cart-container">
        <h1 className="title">cart</h1>
        <p>Your cart is currently empty.</p>
      </div>
    )
  } else {
    return (
      <div className="title-container cart-container">
        <h1 className="title">cart</h1>
          {cart.map(item => {
            return (
              <div className="item-container">
                {console.log(cart)}
                <img src={item.imgs[0]} className='checkout-thumbnail'></img>
                <p>{item.morph}</p>
                <p className="cart-price">${item.price}.00</p>
                <p className='remove-btn' onClick={() => removeFromCart(item.id)}>&times;</p>
              </div>
            )
          })}
          <div className="item-container shipping-container">
            <p>Flatrate shipping</p>
            <p className="cart-price">$50.00</p>
          </div>
          <div className="item-container total-amount-container">
            <p>Total</p>
            <p className="cart-price">${total.map(Number).reduce((acc, curr) => acc + curr, 0) + 50}.00</p>
          </div>
      </div>
    )
  }}
}

