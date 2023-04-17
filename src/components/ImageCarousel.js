import React from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ available }) => {
  const {img} = available[0]
  return (
    <div className='carousel-container'>
      <img className='selected-img' src={img} alt="gecko image" />
      <div className="unselected-img-container">
        <img className='unselected-img' src={img} alt="gecko image" />
        <img className='unselected-img' src={img} alt="gecko image" />
        <img className='unselected-img' src={img} alt="gecko image" />
        <img className='unselected-img' src={img} alt="gecko image" />
      </div>
    </div>
  )
}
