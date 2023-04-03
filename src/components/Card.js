import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


export const Card = ({ img, id }) => {
  return (
    <Link to={"/" + id}>
      <div className='card'>
        <img src={img} alt={id} />
        <button className="view-btn">View</button>
      </div>
    </Link>
  )
}
