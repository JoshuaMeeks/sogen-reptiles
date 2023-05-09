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
          <Link to="/about"><li>about</li></Link>
          <Link to="/available"><li>available</li></Link>
          <Link to="/termsconditions"><li>terms and conditions</li></Link>
          <Link to="/contact"><li>contact</li></Link>
          <Link to="/cart">cart</Link>
        </ul>
      </nav>
    </header>
  )
}
