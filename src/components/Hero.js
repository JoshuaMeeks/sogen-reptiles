import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = ({setAvailability, data}) => {
  return (
    <div className='hero-container'>
      <Link to="/available">
        <button onClick={setAvailability(data)} class='available-btn'>available</button>
      </Link>
    </div>
  )
}