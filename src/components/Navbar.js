import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <img src='#' alt='SoGen Reptiles'></img>
        <ul>
          <li>available</li>
          <li>about</li>
          <li>contact</li>
          <li>terms and conditions</li>
          <li>shipping</li>
        </ul>
      </nav>
    </header>
  )
}
