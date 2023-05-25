import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

export const Error = () => {
  return (
    <div className='error-container'>
      <h1>We're sorry. There doesn't seem to be anything here.</h1>
      <Link to="/">Click here to head back to the home page.</Link>
    </div>
  )
}
