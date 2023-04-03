import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <div className="logo">
            <a href='#'>
              <img src='./resources/logo.png' alt='SoGen Reptiles'></img>
              <span>Southern<br></br>Genetics</span>
            </a>
          </div>
        </Link>
        <ul className='links'>
          <a href='#'><li>about</li></a>
          <a href='#'><li>contact</li></a>
          <a href='#'><li>terms and conditions</li></a>
          <a href='#'><li>shipping</li></a>
        </ul>
      </nav>
    </header>
  )
}
