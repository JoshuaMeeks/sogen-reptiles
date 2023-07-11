import './Cart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Cart = ({ cart, setCart }) => {

  let total = cart.map(item => item.price);
  let productIDs = cart.map(item => item.id);

  const handleCheckout = async() => {
    const lineItems = cart.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.morph,
          },
          unit_amount: item.price * 100
        }, 
        quantity: 1
      }
    })

    const { data } = await axios.post(`${process.env.REACT_APP_SOGEN_EXPRESS}/create-checkout-session`, {lineItems, productIDs})
    window.location = data
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  if (cart.length === 0) {
    return (
      <div className="title-container cart-container">
        <h1 className="title">cart</h1>
        <p className='empty-cart-text'>Your cart is currently empty.</p>
      </div>
    )
  } else {
    return (
      <div className="title-container cart-container">
        <h1 className="title">cart</h1>
        {cart.map(item => {
          return (
            <div className="item-container">
              <img src={item.imgs[0]} className='checkout-thumbnail' alt='Gecko'></img>
              <Link to={"/available/" + item.id}><p>{item.morph}</p></Link>
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
        <button className='checkout-button' role='link' onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    )
  }
}

