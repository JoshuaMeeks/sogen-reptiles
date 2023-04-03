import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero-container'>
      <Link to="/available">
        <button class='available-btn'>available</button>
      </Link>
    </div>
  )
}