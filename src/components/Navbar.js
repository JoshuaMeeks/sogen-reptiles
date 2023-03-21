import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href='#'>
            <img src='./resources/logo.png' alt='SoGen Reptiles'></img>
            <span>Southern Genetics</span>
          </a>
        </div>
        <ul className='links'>
          <a href='#'><li>available</li></a>
          <a href='#'><li>about</li></a>
          <a href='#'><li>contact</li></a>
          <a href='#'><li>terms and conditions</li></a>
          <a href='#'><li>shipping</li></a>
        </ul>
      </nav>
    </header>
  )
}
