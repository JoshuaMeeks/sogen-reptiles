import React from 'react'
import "./Description.css";
import { useParams } from 'react-router-dom'; 
import { useGlobalContext } from '../context';

export const Description = () => {
  const { id } = useParams();

  return (
    <div className="description-container">
      
    </div>
  )
}
