import React from 'react';
import './Success.css';

export const Success = () => {
  const returnHome = () => {
    setTimeout(() => {
      window.location.replace('http://localhost:3000/')
    }, 2000)
  }
  
  returnHome()
  return (
    <div className='success-container'>
      <h1>
        Thanks for shopping with us!
      </h1>
    </div>
  )
}
