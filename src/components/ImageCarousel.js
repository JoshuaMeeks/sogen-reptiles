import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ available }) => {
  const {imgs} = available[0]  
  const [selected, setSelected] = useState(imgs[0])
  const [unselected, setUnselected] = useState(imgs.filter(img => img !== selected))

  useEffect(() => {
    setUnselected(imgs.filter(img => img !== selected))
  }, selected)

  return (
    <div className='carousel-container'>
      <img className='selected-img' src={selected} alt="gecko" />
      <div className="unselected-img-container">
        {unselected.map(img => {
          return (
            <img onClick={() => {setSelected(img)}} className='unselected-img' src={img} alt='gecko' />
          )
        })}
      </div>
    </div>
  )
}
