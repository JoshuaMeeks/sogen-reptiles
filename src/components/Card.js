import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';


export const Card = ({ img }) => {
  return (
    <Link to="/">
      <div className='card'>
        <img src={img} alt="name" />
        <button className="view-btn">View</button>
      </div>
    </Link>
  )
}
