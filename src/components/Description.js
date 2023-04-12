import React from 'react'
import "./Description.css";
import { useParams } from 'react-router-dom'; 
import { ImageCarousel } from './ImageCarousel';
// import { useGlobalContext } from '../context';

export const Description = ({ availability }) => {
  const { id } = useParams();

  const available = availability.filter(available => available.id === id)

  return (
    <div className="description-container">
      <ImageCarousel 
        available={available}
      />
      <div className='description'>
        <h1>{available[0].morph}</h1>
        <p>Sex: {available[0].sex}</p>
        <p>D.O.B: {available[0].dob}</p>
        <p>Weight: {available[0].weight}</p>
        <p>Price: <span className='price-styling'>{available[0].price}</span></p>
        <p>{available[0].descriptor}</p>
        <button>Add to Cart</button>
      </div>
      {/* <img src={available[0].img} alt={available[0].id} /> */}
    </div>
  )
}
