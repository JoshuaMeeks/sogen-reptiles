import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


export const Card = ({ imgs, id }) => {

  return (
    <Link to={"/available/" + id}>
      <div className='card'>
        <img src={imgs[0]} alt={id} />
        <button className="view-btn">View</button>
      </div>
    </Link>
  )
}
