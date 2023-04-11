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
        availability={availability}
      />
      {/* <img src={available[0].img} alt={available[0].id} /> */}
    </div>
  )
}
