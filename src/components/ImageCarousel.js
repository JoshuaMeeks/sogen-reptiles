import React from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ available }) => {
  const {img} = available[0]
  return (
    <div className='carousel-container'>
      <img className='selected-img' src={img} alt="gecko" />
      <div className="unselected-img-container">
        <img className='unselected-img' src={img} alt="gecko" />
        <img className='unselected-img' src={img} alt="gecko" />
        <img className='unselected-img' src={img} alt="gecko" />
        <img className='unselected-img' src={img} alt="gecko" />
      </div>
    </div>
  )
}
